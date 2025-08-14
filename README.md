# Benav Blog Starter (Next.js + Vercel + Supabase)

A minimal, production-ready starter for a personal/political blog:
- Next.js 14 (App Router), Tailwind CSS
- Prisma (PostgreSQL/Supabase)
- NextAuth (credentials) with roles (ADMIN/USER)
- Admin CRUD for posts, categories (auto-created), basic public blog pages

## Quick Start

1) Create a new Supabase project (or any Postgres), copy the `DATABASE_URL`.

2) Create a new Vercel Project and import this repo. Add environment variables in Vercel:
```
DATABASE_URL=...
NEXTAUTH_SECRET=... (generate a long random string)
NEXTAUTH_URL=https://benav.dk
AUTH_TRUST_HOST=true
NEXT_PUBLIC_SITE_NAME=Benav
```

3) Locally:
```bash
npm i
npx prisma generate
npx prisma db push
npm run dev
```

4) Create an admin user (temporarily allow self-register then promote via Prisma Studio):
- Visit `/register` to create your user.
- Run `npx prisma studio` and set `role` of your user to `ADMIN`.
- Or run an UPDATE SQL in Supabase:
  ```sql
  update "User" set role='ADMIN' where email='you@example.com';
  ```

5) Login at `/login`, go to `/admin`, create posts.

## Notes
- Rich text: For now, the editor expects HTML in the content field. We can swap to TipTap/Markdown easily.
- Images: Add Cloudinary or Supabase storage later and store the URL in `coverImage`.
- Comments & bookmarks: DB schema is ready; add UI & API routes when needed.
