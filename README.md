# Auren Digital — Premium Web Development Agency

> **Tagline:** We Turn Vision Into Digital Excellence.  
> **Brand Identity:** High-end independent digital agency inspired by editorial web design, restrained luxury aesthetics, human craftsmanship, zero generic AI patterns, and business-focused conversion engineering.

---

## 🚀 How to Run

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Start Both Frontend and Backend Concurrently
Run a single command:
```bash
npm run dev
```

- **Frontend Application (Vite + React + Tailwind CSS v4):** [http://localhost:5173/](http://localhost:5173/)
- **Backend API Server (Express + TypeScript):** [http://localhost:5000/](http://localhost:5000/)

---

## 🛠️ Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts both Frontend & Backend API concurrently with hot-reload |
| `npm run dev:client` | Runs only the Vite client on port `5173` |
| `npm run dev:server` | Runs only the Express backend on port `5000` |
| `npm run build` | Compiles TypeScript and builds the production bundle |
| `npm run preview` | Previews the production build locally |

---

## 🎨 Visual Identity & Design System

- **Midnight Black (`#101114`):** Primary text and deep structural backgrounds.
- **Warm Ivory (`#F7F5F0`):** Editorial background tone offering comfort and elegance.
- **Champagne Gold (`#C5A572`):** Restrained luxury accent for CTAs, active states, and highlights.
- **Muted Grey (`#898B91`):** Subdued metadata and secondary typography.
- **Surface White (`#FFFFFF`):** High-craft elevated cards and container panels.
- **Geometric Monogram Logo:** Precision-crafted vector `A` monogram symbolizing an architectural gateway to digital craft.

---

## 🗺️ Website Structure & Pages

1. **Homepage (`/`):**
   - **Hero:** "Your Vision. Our Digital Craft." with supporting headline, dual CTAs ("Start Your Project" & "Explore Our Work"), and live browser mockup.
   - **Foundation / Trust:** 6 core engineering principles (Strategy before design, real users, clean code, mobile-first, performance, transparent communication).
   - **Capabilities:** Grid of all 8 agency services with deliverables and direct inquiry links.
   - **Selected Work:** Curated portfolio showcases with browser previews and interactive case study modals.
   - **Why Auren Digital:** 7 agency differentiators in an editorial border-boxed grid.
   - **Workflow:** 7-step structured delivery process (Requirements → Discussion → Proposal → Build → Review → QA & Launch → Maintenance).
   - **Verified Reviews:** Zero-fabricated-reviews integrity policy.
   - **FAQ Accordion:** 10 practical questions and honest answers.
   - **Final CTA:** High-conversion banner with dual WhatsApp and Inquiry triggers.

2. **Services (`/services`):**
   - In-depth breakdowns for all 8 core services:
     1. Business Website Development
     2. Custom Website Design
     3. E-commerce Development
     4. Landing Page Development
     5. Web Application Development
     6. UI/UX Design
     7. Website Redesign
     8. Website Maintenance and Optimization

3. **Portfolio (`/work`):**
   - Category filtering (E-commerce, Healthcare, Hospitality, Advisory, Design Studio).
   - Clear concept project labeling ("Concept Exploration").
   - Detailed case study modals with challenge, solution, and technical deliverables.

4. **About & Approach (`/about`):**
   - Studio philosophy, values (Clarity, Direct collaboration, Zero lock-in, Performance), and code ownership guarantees.

5. **Contact (`/contact`):**
   - Direct WhatsApp quick action (`7066593251`), working hours, email, location, and validated contact form.

6. **Start Your Project (`/start-project`):**
   - High-priority 4-step wizard:
     - Step 1: Contact details & communication preferences
     - Step 2: Project category, business summary, goals, and feature checklist
     - Step 3: Indicative investment tiers ("Let's Discuss Your Requirements") and launch date
     - Step 4: Summary review, consent checkbox, API submission, and direct WhatsApp sync
   - Confirmation screen with instant WhatsApp fast-track button.

7. **Legal Documentation (`/privacy-policy` & `/terms`):**
   - Full client confidentiality, NDA policies, milestone schedules, and code ownership terms.

---

## ⚙️ Configuration & Environment Variables

All parameters are centrally managed in `src/config/agency.ts` and `.env`:

```env
PORT=5000
AGENCY_NAME="Auren Digital"
AGENCY_EMAIL="hello@aurendigital.com"
AGENCY_WHATSAPP="7066593251"
ALLOWED_ORIGINS="http://localhost:5173,http://localhost:5000"
```

- **WhatsApp Integration:** Click-to-chat links automatically format `7066593251` as `https://wa.me/917066593251`.
- **Email Pipeline:** Works out of the box in Development Mode (logging submissions to terminal). For production email dispatch, configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` in `.env`.
