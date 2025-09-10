# AgroVision

## Problem Statement

**AI-Powered Crop Yield Prediction and Optimization**

Develop an AI-based platform to predict crop yields using historical agricultural data, weather patterns, and soil health metrics. The system provides actionable recommendations to optimize irrigation, fertilization, and pest control tailored to specific crops and regional conditions.

---

## Expected Outcome

A scalable web/mobile solution that helps small-scale farmers increase productivity by **at least 10%**, with an interface supporting regional languages for accessibility.

---

## Proposed Solution (Concise)

- AI-powered platform (web + mobile PWA) that predicts crop yield using historical datasets, weather APIs, and soil metrics.
- Recommends best sowing period, irrigation schedule, fertilization dosage, and pest-control actions.
- Provides multilingual chatbot, community alerts, offline access, and local booths for soil testing & consultation.

---

## Key Features

- Crop yield prediction (AI/ML)
- Optimal sowing time recommendation
- Irrigation & fertilization optimization
- Pest & disease alerts (location-based)
- Multilingual chatbot for farmer guidance
- Offline-first support + local booths for soil testing
- NGO & community integration for outreach

---

## Technology Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express (or Next.js API routes)
- **Database:** MongoDB (Atlas)
- **AI/ML:** Python (scikit-learn, XGBoost / TensorFlow / PyTorch)
- **APIs:** WeatherAPI, SoilGrids (or similar)
- **Maps/Location:** Mapbox / Google Maps
- **i18n:** next-intl (or alternative)
- **Deployment:** Vercel (frontend), DigitalOcean / Render / AWS (backend & ML)

---

## Workflow (High-level)

1. Farmer selects crop & optionally enters soil data; system fetches weather & soil via APIs.
2. Data preprocessing & feature engineering (GDD, cumulative rainfall, NDVI if available).
3. ML model predicts yield and optimal sowing window.
4. Recommendation engine produces irrigation/fertilization/pest-control plan.
5. Deliver results via dashboard, chatbot, community alerts; support offline sync & booth workflows.

---

## Implementation Steps (MVP)

1. Data collection & research (open datasets + APIs).
2. Baseline model (XGBoost/LightGBM) + evaluation (RMSE / R²).
3. Backend API for /predict and farmer CRUD.
4. Frontend farmer dashboard (mobile-first) + multilingual UI.
5. Chatbot + community alerts + offline support.
6. Pilot & simulated evaluation to show productivity uplift.

---

## How to Run (local - example)

\`\`\`bash

# clone

git clone https://github.com/your-repo/agrovision.git
cd agrovision

# backend (example)

cd backend

# create venv and install requirements for Python ML/backend

pip install -r requirements.txt

# run api

uvicorn main:app --reload --port 8000

# frontend

cd ../frontend
npm install
npm run dev
\`\`\`

---

## Team Roles (recommended)

- Frontend (Next.js, Tailwind)
- Backend & Integration (APIs, DB)
- ML / Data (model training, feature engineering) — can start with pre-trained models / public models
- UX & Documentation (design, PPT, pitch)
- Outreach (NGO / field partners)

---

## Feasibility & Impact

- **Feasible:** Uses proven ML techniques + open datasets + realtime APIs.
- **Impact:** Improves farmer decision-making, resource optimization, and expected productivity uplift (~10%+).
- **Sustainability:** Offline support, booths, and NGO partnerships boost adoption.

---

## References (IEEE style)

[1] Kaggle, “Crop Recommendation Dataset.” [Online]. Available: https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset  
[2] Food and Agriculture Organization (FAO), “FAOSTAT Agricultural Data.” [Online]. Available: https://www.fao.org/faostat/en/  
[3] WeatherAPI, “Real-time weather data API.” [Online]. Available: https://www.weatherapi.com/  
[4] SoilGrids, “Global soil information based on machine learning.” [Online]. Available: https://soilgrids.org/  
[5] NITI Aayog, “AI in Agriculture: Applications & Opportunities.” [Online]. Available: https://www.niti.gov.in/  
[6] Ministry of Agriculture & Farmers Welfare, Government of India, “Agriculture Statistics.” [Online]. Available: https://agricoop.gov.in/  
[7] Next.js Documentation. [Online]. Available: https://nextjs.org/  
[8] MongoDB Documentation. [Online]. Available: https://www.mongodb.com/  
[9] TensorFlow. [Online]. Available: https://www.tensorflow.org/

---

## License

MIT

---

**Project:** AgroVision — AI-Powered Crop Yield Prediction and Optimization
