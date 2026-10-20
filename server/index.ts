import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable JSON body parsing and CORS
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '100kb' }));

// Central Agency defaults (matching frontend config)
const AGENCY_CONFIG = {
  name: process.env.AGENCY_NAME || 'Auren Digital',
  email: process.env.AGENCY_EMAIL || 'hello@aurendigital.com',
  whatsapp: process.env.AGENCY_WHATSAPP || '7066593251',
};

// Check if SMTP is configured
const hasSmtpConfig = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
);

let transporter: nodemailer.Transporter | null = null;
if (hasSmtpConfig) {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    console.log('✓ SMTP Email Transporter configured successfully');
  } catch (err) {
    console.error('Failed to initialize SMTP transporter:', err);
  }
} else {
  console.log('ℹ SMTP credentials not detected in .env. Running in Development Mode (logging submissions to terminal).');
}

// In-Memory Rate Limiter (sliding window per IP: max 6 requests per 10 mins)
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 6;

function rateLimiter(req: Request, res: Response, next: () => void) {
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const clientRecord = rateLimitMap.get(clientIp);

  if (!clientRecord || (now - clientRecord.firstSeen) > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientIp, { count: 1, firstSeen: now });
    return next();
  }

  if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many submissions from this connection. Please wait a few minutes before trying again or chat directly on WhatsApp.'
    });
  }

  clientRecord.count += 1;
  next();
}

// Helper validator
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 1. Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    smtpConfigured: hasSmtpConfig,
    agency: AGENCY_CONFIG.name
  });
});

// 2. High-Priority Project Enquiry endpoint
app.post('/api/enquire', rateLimiter, async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      companyName,
      workEmail,
      whatsappNumber,
      country,
      preferredContact,
      projectType,
      businessDescription,
      websiteGoal,
      hasExistingWebsite,
      existingWebsiteUrl,
      selectedFeatures,
      budgetRange,
      desiredLaunchDate,
      projectUrgency,
      additionalNotes,
      consent,
      honeypot
    } = req.body;

    // Spam trap check
    if (honeypot) {
      console.warn('[SPAM DETECTED] Honeypot triggered. Silently aborting.');
      return res.status(200).json({ success: true });
    }

    // Required fields validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide a valid full name.' });
    }

    if (!workEmail || !isValidEmail(workEmail)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid work email address.' });
    }

    if (!whatsappNumber || typeof whatsappNumber !== 'string' || whatsappNumber.replace(/\D/g, '').length < 8) {
      return res.status(400).json({ success: false, error: 'Please provide a valid WhatsApp number.' });
    }

    if (!projectType) {
      return res.status(400).json({ success: false, error: 'Please select a project type.' });
    }

    if (!budgetRange) {
      return res.status(400).json({ success: false, error: 'Please select an estimated budget tier.' });
    }

    if (!consent) {
      return res.status(400).json({ success: false, error: 'Consent to contact is required to submit your enquiry.' });
    }

    const submissionTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Format Email Content
    const emailSubject = `🚀 New Project Enquiry: ${fullName} (${companyName || 'Individual'}) — [${projectType}]`;
    const featuresList = Array.isArray(selectedFeatures) && selectedFeatures.length > 0 
      ? selectedFeatures.join(', ') 
      : 'None specified';

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #171717; line-height: 1.6; border: 1px solid #E7E5E0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #171717; color: #ffffff; padding: 24px; text-align: left;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 600;">${AGENCY_CONFIG.name} — New Client Project Enquiry</h2>
          <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.85;">Submitted on ${submissionTimestamp} (IST)</p>
        </div>

        <div style="padding: 24px;">
          <h3 style="border-bottom: 2px solid #E7E5E0; padding-bottom: 8px; margin-top: 0; color: #3157E8;">1. Client Information</h3>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Company / Business:</strong> ${companyName || 'Not specified'}</p>
          <p><strong>Work Email:</strong> <a href="mailto:${workEmail}">${workEmail}</a></p>
          <p><strong>WhatsApp Number:</strong> ${whatsappNumber}</p>
          <p><strong>Country / Region:</strong> ${country || 'India'}</p>
          <p><strong>Preferred Contact Method:</strong> ${preferredContact || 'Either'}</p>

          <h3 style="border-bottom: 2px solid #E7E5E0; padding-bottom: 8px; margin-top: 24px; color: #3157E8;">2. Project Specifications</h3>
          <p><strong>Project Category:</strong> ${projectType}</p>
          <p><strong>Business Summary:</strong> ${businessDescription || 'None provided'}</p>
          <p><strong>Primary Website Goal:</strong> ${websiteGoal || 'Not specified'}</p>
          <p><strong>Has Existing Website:</strong> ${hasExistingWebsite === 'yes' ? `Yes (${existingWebsiteUrl || 'No URL given'})` : 'No (Brand new website)'}</p>
          <p><strong>Selected Features:</strong> ${featuresList}</p>

          <h3 style="border-bottom: 2px solid #E7E5E0; padding-bottom: 8px; margin-top: 24px; color: #3157E8;">3. Budget & Schedule</h3>
          <p><strong>Budget Tier:</strong> <span style="background-color: #EBF1FF; color: #3157E8; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${budgetRange}</span></p>
          <p><strong>Project Urgency:</strong> ${projectUrgency || 'Standard'}</p>
          <p><strong>Target Launch Date:</strong> ${desiredLaunchDate || 'Flexible'}</p>
          <p><strong>Additional Notes:</strong> ${additionalNotes || 'None'}</p>
        </div>

        <div style="background-color: #F7F6F2; padding: 16px 24px; font-size: 12px; color: #737373; border-top: 1px solid #E7E5E0;">
          <p style="margin: 0;">This enquiry was sent via the ${AGENCY_CONFIG.name} official Start-Project form.</p>
        </div>
      </div>
    `;

    // If SMTP is active, dispatch real email
    if (transporter && hasSmtpConfig) {
      await transporter.sendMail({
        from: `"${AGENCY_CONFIG.name} Enquiries" <${process.env.SMTP_USER}>`,
        to: AGENCY_CONFIG.email,
        replyTo: workEmail,
        subject: emailSubject,
        html: emailHtml,
        text: `New Enquiry from ${fullName} (${workEmail}, ${whatsappNumber})\n\nProject: ${projectType}\nBudget: ${budgetRange}\nTimeline: ${projectUrgency}\n\nFeatures: ${featuresList}\n\nNotes: ${additionalNotes}`
      });

      // Send confirmation to client
      try {
        await transporter.sendMail({
          from: `"${AGENCY_CONFIG.name}" <${process.env.SMTP_USER}>`,
          to: workEmail,
          subject: `We've received your project enquiry — ${AGENCY_CONFIG.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #171717; line-height: 1.6; border: 1px solid #E7E5E0; padding: 24px; border-radius: 8px;">
              <h2 style="color: #171717; margin-top: 0;">Hi ${fullName}, thank you for reaching out!</h2>
              <p>We've received your project details for <strong>${companyName || 'your upcoming website'}</strong>.</p>
              <p>Our senior team is reviewing your requirements (${projectType}, ${budgetRange}). We typically respond within 2 to 4 business hours.</p>
              <p>If you'd like to fast-track our discussion or share reference links immediately, feel free to chat with us directly on WhatsApp:</p>
              <p><a href="https://wa.me/${AGENCY_CONFIG.whatsapp.replace(/\D/g, '')}" style="display: inline-block; background-color: #25D366; color: white; padding: 10px 18px; text-decoration: none; border-radius: 6px; font-weight: bold;">Continue on WhatsApp</a></p>
              <br/>
              <p style="font-size: 13px; color: #737373;">Best regards,<br/><strong>${AGENCY_CONFIG.name}</strong></p>
            </div>
          `
        });
      } catch (confErr) {
        console.warn('Could not dispatch client auto-confirmation email:', confErr);
      }

      return res.status(200).json({
        success: true,
        mode: 'production',
        message: 'Your project enquiry has been successfully delivered to our team.'
      });
    }

    // Development Mode Fallback (Clean terminal logging)
    console.log('\n================== [DEV MODE: NEW PROJECT ENQUIRY] ==================');
    console.log(`Time:        ${submissionTimestamp}`);
    console.log(`Client:      ${fullName} (${workEmail} | WhatsApp: ${whatsappNumber})`);
    console.log(`Company:     ${companyName || 'N/A'} (Country: ${country || 'India'})`);
    console.log(`Contact via: ${preferredContact}`);
    console.log(`Type:        ${projectType}`);
    console.log(`Goal:        ${websiteGoal}`);
    console.log(`Features:    ${featuresList}`);
    console.log(`Budget:      ${budgetRange}`);
    console.log(`Urgency:     ${projectUrgency}`);
    console.log(`Launch Date: ${desiredLaunchDate || 'Flexible'}`);
    console.log(`Notes:       ${additionalNotes || 'None'}`);
    console.log('======================================================================\n');

    return res.status(200).json({
      success: true,
      mode: 'development_mock',
      message: 'Enquiry received and validated. Running in development mode without live SMTP credentials.',
      details: {
        fullName,
        workEmail,
        whatsappNumber,
        projectType,
        budgetRange
      }
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try contacting directly via WhatsApp.'
    });
  }
});

// 3. Contact Form endpoint (for /contact page)
app.post('/api/contact', rateLimiter, async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, subject, message, honeypot } = req.body;

    if (honeypot) {
      return res.status(200).json({ success: true });
    }

    if (!fullName || !email || !message || !isValidEmail(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid name, email, and message.' });
    }

    if (transporter && hasSmtpConfig) {
      await transporter.sendMail({
        from: `"${AGENCY_CONFIG.name} Contact" <${process.env.SMTP_USER}>`,
        to: AGENCY_CONFIG.email,
        replyTo: email,
        subject: `📬 Direct Contact: ${subject || 'New Message'} from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
      });

      return res.status(200).json({
        success: true,
        mode: 'production',
        message: 'Your message has been sent successfully.'
      });
    }

    console.log('\n================== [DEV MODE: CONTACT MESSAGE] ==================');
    console.log(`From:    ${fullName} (${email} | ${phone || 'No phone'})`);
    console.log(`Subject: ${subject || 'General Enquiry'}`);
    console.log(`Message: ${message}`);
    console.log('=================================================================\n');

    return res.status(200).json({
      success: true,
      mode: 'development_mock',
      message: 'Message received and logged in development mode.'
    });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    return res.status(500).json({ success: false, error: 'Failed to process message.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`⚡ Agency API Server running on port ${PORT}`);
});
