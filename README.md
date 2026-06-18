# Medical Calculation App

Medical Calculation App is a web application designed to help healthcare professionals and students perform common medical calculations quickly and accurately. Built with Next.js and TypeScript, the app offers an intuitive interface for calculating body mass index (BMI), drug dosages, infusion rates, unit conversions and more.

## Features

- **BMI Calculator** – Calculate Body Mass Index based on patient height and weight.
- **Drug Dosage Calculator** – Estimate dosage per weight or body surface area for medications.
- **Infusion Rate Calculator** – Compute drip rates and infusion times for intravenous medications.
- **Unit Conversions** – Convert between imperial and metric units commonly used in medicine.
- **Responsive Design** – Works seamlessly on desktops, tablets and mobile devices.
- **Extensible Architecture** – Built with a modular design to easily add new calculators and features.
- **Authentication (optional)** – Use NextAuth.js to secure sensitive calculators with user login.
- **Dashboard** – Centralized dashboard to access all calculators and view recent calculations.

## Tech Stack

- **Next.js & React** – Framework for building server-rendered React applications.
- **TypeScript** – Provides type safety and improved developer experience.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **Prisma ORM & PostgreSQL** – (Optional) Database layer for persisting calculation history and user accounts.
- **NextAuth.js** – (Optional) Authentication solution for protecting routes.
- **Vercel** – Deployment platform for hosting Next.js applications with serverless functions.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io) or npm for managing packages
- [PostgreSQL](https://www.postgresql.org/) database (optional, if using Prisma)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohkila/medicalc.git
   cd medicalc
   ```

2. Install dependencies using your preferred package manager:

   Using pnpm:

   ```bash
   pnpm install
   ```

   Or using npm:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and define the following environment variables as needed:

   ```bash
   # For example:
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/medicalc
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret
   ```

4. If you are using Prisma and PostgreSQL, run the migrations to set up the database schema:

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   # Optionally seed the database with sample data
   npx prisma db seed
   ```

5. Start the development server:

   Using pnpm:

   ```bash
   pnpm dev
   ```

   Or using npm:

   ```bash
   npm run dev
   ```

   The app will be running at [http://localhost:3000](http://localhost:3000).

## Deployment

The application can be deployed easily to [Vercel](https://vercel.com/) by connecting the repository and setting up the environment variables in the Vercel dashboard. Vercel provides automatic deployments on every push to your main branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
