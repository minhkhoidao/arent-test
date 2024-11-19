# Project Name

Arent Test

## Description

- Health care app helps users track their fitness progress

## Problem

- The goal is to develop a straightforward yet feature-packed tracking app that provides users with clear, intuitive charts to monitor their progress, alongside a user-friendly and easily navigable interface.

- From a development perspective, the codebase should maintain a clean separation between the user interface (UI) and business logic. The project structure should follow best practices to ensure readability, maintainability, and scalability. Moreover, all libraries used must be simple, secure, and easy to integrate.

## 🚀 Technologies

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Recharts](https://recharts.org/) - Charting Library

## 📁 Project Structure

```
src/
├── adapters/              # Data adapters and transformers
│   ├── api/              # API data adapters
│   └── dto/              # Data Transfer Objects
│
├── assets/               # Static assets
│   ├── images/          # Image files
│   └── styles/          # Global styles
│
├── components/          # Reusable UI components
│   ├── common/         # Common components
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Card/
│   └── ui/            # UI specific components
│       ├── Forms/
│       └── Charts/
│
├── containers/         # Feature containers/modules
│   ├── auth/          # Authentication related
│   ├── health/        # Health tracking features
│   └── dashboard/     # Dashboard features
│
├── layout/            # Layout components
│   ├── main/         # Main layout wrapper
│   ├── headers/      # Header components
│   └── footers/      # Footer components
│
├── lib/              # Core library folder
│   ├── config/       # Configuration files
│   │   ├── api.config.ts
│   │   └── app.config.ts
│   ├── icons/        # Icon components and assets
│   │   ├── common/
│   │   └── index.ts
│   ├── hooks/        # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useForm.ts
│   │   └── useApi.ts
│   ├── types/        # TypeScript type definitions
│   │   ├── api.types.ts
│   │   ├── common.types.ts
│   │   └── models.types.ts
│   └── utils/        # Utility functions
│       ├── formatters.ts
│       ├── validators.ts
│       └── helpers.ts
│
├── pages/            # Page components
│   ├── Home/
│   ├── Dashboard/
│   ├── Profile/
│   └── Settings/
│
└── services/         # Business logic and API calls
    ├── auth/
    ├── user/
    └── health/
```

## Run and Setup

- npm install
- npm run dev
