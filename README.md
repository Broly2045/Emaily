# 📧 Emaily

Emaily is a full-stack MERN application that allows authenticated users to create, send, and manage email surveys.  
It integrates Google OAuth for authentication, SendGrid for email delivery, Stripe for credit-based billing, and MongoDB for persistent storage.

This project was built as a learning-focused, production-style application following a Udemy full-stack course, with emphasis on real-world backend architecture, authentication flows, payments, and webhook handling.

---

## ✨ Key Features

- 🔐 Google OAuth authentication using Passport.js
- 📧 Create and send survey emails via SendGrid
- 📨 Collect user feedback through email links
- 📊 Track survey responses (Yes / No)
- 💳 Credit-based system using Stripe payments
- 🧾 Webhook handling for email responses
- 🧠 Secure API routes with middleware protection
- ⚙️ Production-ready backend structure

---

## 🧑‍💻 Tech Stack

### Frontend
- React
- Redux
- React Router
- Materialize CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (Google OAuth 2.0)

### Services & Integrations
- SendGrid (email delivery)
- Stripe (payment & credits)
- Google OAuth
- Webhooks (SendGrid event processing)

### Tooling
- Concurrently
- Nodemon
- dotenv
- Lodash
- Path Parser

---

## 📁 Project Structure

emaily/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ ├── build/
│ ├── .env.development
│ ├── .env.production
│ └── package.json
│
├── server/ # Express backend
│ ├── config/ # Environment & keys
│ │ ├── dev.js
│ │ ├── prod.js
│ │ └── keys.js
│ │
│ ├── middlewares/ # Auth & credit guards
│ │ ├── requireLogin.js
│ │ └── requireCredits.js
│ │
│ ├── models/ # Mongoose models
│ │ ├── User.js
│ │ ├── Surveys.js
│ │ └── Recipient.js
│ │
│ ├── routes/ # API routes
│ │ ├── authRoutes.js
│ │ ├── billingRoutes.js
│ │ └── surveyRoutes.js
│ │
│ ├── services/
│ │ ├── passport.js
│ │ ├── mailer.js
│ │ └── emailTemplates/
│ │ └── surveyTemplate.js
│ │
│ ├── index.js
│ └── package.json
│
└── README.md


---
## 🔄 How It Works

## 🔐 Authentication Flow (Google OAuth)

- Users authenticate via Google
- Passport.js handles OAuth strategy
- User profiles are stored in MongoDB
- Session-based authentication using cookies
- Auth-protected routes prevent unauthorized access

---

## 📧 Survey & Email Flow

1. User logs in using Google
2. User creates a survey (title, subject, body, recipients)
3. Credits are required to send surveys
4. Emails are sent using SendGrid
5. Users click **Yes / No** links in emails
6. Webhooks process responses
7. Survey results are updated in MongoDB

---

## 💳 Billing & Credits (Stripe)

- Users purchase credits via Stripe
- Each email survey consumes credits
- Secure billing route with authentication
- Credits are stored and updated on the user model

---

## 🔌 API Routes Overview

### Authentication
- `GET /auth/google`
- `GET /auth/google/callback`
- `GET /api/logout`
- `GET /api/current_user`

### Surveys
- `GET /api/surveys`
- `POST /api/surveys`
- `POST /api/surveys/webhooks`
- `GET /api/surveys/:surveyId/:choice`

### Billing
- `POST /api/stripe`


## ⚙️ Setup
npm install  
npm run dev  


---
