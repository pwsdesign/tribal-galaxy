This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), customized for Tribal Galaxy.

## Booking system

- Booking form submits to `POST /api/booking`.
- Form data is validated on the server and written to Supabase (`bookings` table).
- Admin endpoint: `GET/PATCH /api/admin/bookings` (requires `ADMIN_TOKEN`).
- Availability check endpoint: `GET /api/booking/availability?date=YYYY-MM-DD&time=...`.
- Optional email notifications can be enabled with Resend.

## Environment

Copy `.env.example` to `.env.local` and fill:

```bash
cp .env.example .env.local
```

Required:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Optional:
- `RESEND_API_KEY` plus `ADMIN_BOOKING_EMAIL` and `BOOKING_FROM_EMAIL`
- `ADMIN_TOKEN`
- `BOOKING_SLOT_CAPACITY`, `BOOKING_DATE_CAPACITY`
- `BOOKING_RATE_LIMIT_WINDOW_MINUTES`, `BOOKING_RATE_LIMIT_MAX_ATTEMPTS`

## Supabase setup

Use `supabase.schema.sql` to create required tables in your Supabase project:

```sql
-- Open SQL editor in Supabase and run:
\i supabase.schema.sql
```

## Admin UI

Visit `/admin` and paste your `ADMIN_TOKEN` once to view and update booking status.

## Deployment

Vercel deployment works with defaults. Ensure all required environment variables are set in Vercel Settings.
If admin token is needed in production, set `ADMIN_TOKEN` there too.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
