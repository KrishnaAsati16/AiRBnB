# Airbnb Clone

A full stack Airbnb-style web app where users can log in, list their property, browse listings and leave reviews.

## Tech Stack

- **Frontend:** Next.js 14 (React), Tailwind CSS
- **Backend:** Next.js server actions
- **Database:** PostgreSQL with Prisma ORM
- **Auth:** NextAuth (Google and GitHub login)
- **Maps:** Leaflet + OpenStreetMap

## Features

- Login with Google or GitHub
- Browse listings on the home page
- Create a listing ("Airbnb your home") with location, photos, price and details
- View a room page with photos and details
- Rate and review a stay, with average rating
- Pick a property location on a map

## Getting Started

### 1. Requirements

- Node.js 18 or higher
- PostgreSQL (local, or a free one from Supabase or Neon)

### 2. Install

```bash
git clone https://github.com/KrishnaAsati16/AiRBnB.git
cd AiRBnB
npm install
```

### 3. Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/airbnb"
DIRECT_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/airbnb"
```

Create a `.env.local` file in the project root:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=any_long_random_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

OAuth callback URLs:

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
prisma/schema.prisma     Database models
src/app/actions/         Server actions (create listing, reviews, users)
src/app/api/auth/        NextAuth config
src/app/components/      Reusable UI components
src/app/room/            Room details page
src/app/review/          Review pages
src/app/become-a-host/   Create listing flow
```

## Roadmap

- Booking flow with date picker and overlap validation
- Working search and category filters
- Host dashboard (edit and delete listings)
- Auth protection on server actions
- Deployment

## License

 [MIT License](LICENSE).
