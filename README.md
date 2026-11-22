# Airbnb Clone (Next.js 14 + Prisma + PostgreSQL)

A full-stack Airbnb clone built with Next.js 14, Tailwind CSS, Prisma, PostgreSQL, and NextAuth.js (supporting Google and GitHub OAuth).

---

## Prerequisites

- **Node.js**: v18 or higher
- **PostgreSQL**: Local or hosted instance (e.g., Supabase / Neon / pgAdmin)

---

## Getting Started

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/KrishnaAsati16/AiRBnB.git
cd AiRBnB
npm install
```

### 2. Configure Environment Variables

Refer to `.env.example` to set up your environment variables:

- **`.env`** (Database Configuration):
  ```env
  DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/airbnb"
  DIRECT_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/airbnb"
  ```

- **`.env.local`** (Authentication & OAuth Configuration):
  ```env
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  GITHUB_ID=your_github_client_id
  GITHUB_SECRET=your_github_client_secret
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=your_random_secret_key
  ```

> **Note**: For OAuth callbacks, configure your OAuth apps with:
> - Google redirect URI: `http://localhost:3000/api/auth/callback/google`
> - GitHub redirect URI: `http://localhost:3000/api/auth/callback/github`

### 3. Setup Database Schema

Push the Prisma schema to your PostgreSQL database:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Google & GitHub)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Radix UI
- **Maps**: Leaflet & React-Leaflet
