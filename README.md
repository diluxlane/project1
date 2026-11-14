# RÊVERIE — A Waking Dream

**Zyberlane Project 01 — a Zyberlane-managed concept project.**
This is an adaptation of an existing licensed design, not an independently created Zyberlane design.
Source baseline: `b7cb35235ee695d99d982a4186ddc71cb58b1eca` (63 tracked files).
See `PROJECT-01.md` for provenance, rights limitations and intentional changes.

Vercel: import `diluxlane/project1`, select Next.js, run `npm ci` and `npm run build`.
No custom domain or DNS change is required. `VERCEL_URL` supplies the deployment origin;
optionally set `NEXT_PUBLIC_SITE_URL` to a verified final URL.

A cinematic, single-page luxury website — a dreamy journey through light, stillness, and
wonder, built around fullscreen film, glassmorphism, smooth scrolling, and editorial motion.

- **Live site:** Not deployed for this project.
- **Repository:** https://github.com/diluxlane/project1

---

## ✨ Overview

RÊVERIE is a one-page, scroll-driven experience. The narrative runs top to bottom:

**Hero** (fullscreen film) → **Editorial** (two artworks) → **Story** → **Experience** (3 cards)
→ **Gallery** (5 images) → **Philosophy** → **Invitation** (CTA) → **Footer** (fullscreen film).

Every section shares one palette, one type system, and one motion language, so the whole page
feels like a single continuous film rather than a stack of blocks.

---

## 🧱 Tech Stack

| Purpose | Technology |
| --- | --- |
| Framework | **Next.js 14** (App Router, React 18, TypeScript) |
| Styling | **Tailwind CSS 3** with a custom design-token system |
| Animation | **Framer Motion** (reveals, parallax, micro-interactions) |
| Smooth scroll | **Lenis** |
| Fonts | **Cormorant Garamond** + **Inter** via `next/font` (self-hosted at build, no runtime request) |
| Icons | Inline SVG (no icon dependency) |

Rendered output is a fully static page (`○ (Static)`), so it can be hosted on any static/serverless
platform. First-load JS is ~155 kB.

---

## 🚀 Quick Start (run locally)

**Prerequisites:** [Node.js 18.18+](https://nodejs.org) (or 20+) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → open http://localhost:3000

# 3. Build for production (optional, to verify)
npm run build
npm run start
```

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload (http://localhost:3000) |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
.
├── public/                     # Static assets served at the site root
│   ├── images/                 #   Photos + film stills (JPEG)
│   │   ├── hand.jpg, meadow.jpg          # Editorial section
│   │   ├── g-blooms/-drift/-branch/      # Gallery (5 images)
│   │   │   -haze/-wind.jpg
│   │   ├── invitation.jpg                # Invitation (CTA) background
│   │   └── swirl.jpg, wander.jpg …       # Hero/footer poster stills
│   └── videos/
│       ├── hero-coat.mp4                 # Hero background film
│       └── footer.mp4                    # Footer background film
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: fonts, metadata, providers, Header
│   │   ├── page.tsx            # The page — composes every section in order
│   │   └── globals.css         # Design tokens (CSS vars), base styles, glass utilities
│   │
│   ├── components/
│   │   ├── sections/           # One file per section
│   │   │   ├── Hero.tsx  Editorial.tsx  Story.tsx  Experience.tsx
│   │   │   └── Gallery.tsx  Philosophy.tsx  CTA.tsx
│   │   ├── layout/             # Header.tsx  Footer.tsx  Wordmark.tsx
│   │   ├── ui/                 # Button  Container  Section  GlassCard  Eyebrow  ScrollIndicator
│   │   ├── motion/             # Reveal  Stagger  Parallax  TextReveal  ScrollRevealText  Magnetic
│   │   ├── effects/            # CustomCursor  ScrollProgress  Particles
│   │   └── providers/          # SmoothScrollProvider (Lenis)
│   │
│   ├── hooks/                  # useMediaQuery  useMousePosition  useScrollDirection …
│   └── lib/
│       ├── constants.ts        # Brand name, nav links, socials, ASSET PATHS  ← edit content here
│       ├── fonts.ts            # Google font configuration
│       ├── motion.ts           # Shared easing curves + animation variants
│       └── utils.ts            # cn() class helper + math helpers
│
├── tailwind.config.ts          # Colors, type scale, shadows, keyframes  ← edit the design system here
├── next.config.mjs
├── tsconfig.json
└── package.json
```

> **Note on raw uploads:** the original upload files in the project root (`image 1.webp`, the
> source `.mp4`s, etc.) are intentionally **git-ignored**. The app only uses the processed copies
> inside `/public`, so the repository stays clean.

---

## 🎨 Design System

Defined once in **`src/app/globals.css`** (as CSS variables) and **`tailwind.config.ts`**:

| Token | Value | Meaning |
| --- | --- | --- |
| `background` | `#0A1A22` | Deep twilight teal canvas |
| `surface` / `surface-2` | `#0F252F` / `#16323E` | Layered dark surfaces |
| `foreground` | `#F4F1E9` | Warm cloud-cream text |
| `gold` | `#F2B44E` | Luminous golden light (primary accent) |
| `sky` | `#4FA8CE` | Sky azure (secondary accent) |
| `bloom` | `#F08A50` | Coral wildflower (tertiary pop) |
| Display font | Cormorant Garamond | Headings |
| Body font | Inter | UI + prose |

Glass helpers (`.glass`, `.glass-panel`, `.glass-bar`), gold glows (`shadow-glow-gold`), and a
signature easing curve `ease-luxury` (`cubic-bezier(0.16, 1, 0.3, 1)`) unify the feel.

---

## 🛠 How to Customize

Everything you'll commonly change lives in **two places**: `src/lib/constants.ts` (content) and
`tailwind.config.ts` + `src/app/globals.css` (look & feel).

| I want to change… | Edit |
| --- | --- |
| Brand name / tagline | `src/lib/constants.ts` → `siteConfig` |
| Navigation links | `src/lib/constants.ts` → `navLinks` |
| Social links / footer links | `src/lib/constants.ts` → `socials`, `footerLinks` |
| Which image/video a section uses | `src/lib/constants.ts` → `assets` (paths point into `/public`) |
| Headlines & body copy | The matching file in `src/components/sections/` |
| Colors | `src/app/globals.css` (`:root` variables) — Tailwind reads them automatically |
| Fonts | `src/lib/fonts.ts` (swap the `next/font/google` imports) |
| Animation timing / easing | `src/lib/motion.ts` |
| Section order | `src/app/page.tsx` (reorder the components) |

### Replacing images & videos

1. Drop your new file into `public/images/` or `public/videos/`.
2. Point the relevant path in `src/lib/constants.ts` (or the section's `tiles` array in
   `Gallery.tsx`) at it, e.g. `"/images/my-photo.jpg"`.
3. For gallery tiles, set the `aspect` to the image's real ratio (e.g. `aspect-[4/5]`) so it
   isn't cropped.

> **Gotcha:** Next.js optimizes images with `sharp`, which can silently hang on some JPEGs that
> have unusual encoding. If an image never appears (its network request stays pending), re-encode
> it to a clean baseline JPEG and it will work:
> ```bash
> ffmpeg -i input.jpg -map_metadata -1 -pix_fmt yuvj420p -q:v 3 output.jpg
> ```

---

## 📦 GitHub

This project is already published at **https://github.com/diluxlane/project1**
(branch `main`, remote `origin`).

**Push future changes:**

```bash
git add .
git commit -m "Describe what you changed"
git push
```

**Clone it fresh on another machine:**

```bash
git clone https://github.com/diluxlane/project1.git
cd project1
npm install
npm run dev
```

---

## 🌍 Deployment

**Vercel** (made by the creators of Next.js) is the recommended host — zero config, free tier,
global CDN, HTTPS, and **public by default**.

### Deploy to Vercel — step by step

The repository is already on GitHub, so this is just a few clicks:

1. Go to **https://vercel.com** and sign up / log in **with your GitHub account**.
2. Click **Add New → Project**, then **Import** the **`project1`** repository.
3. Leave every setting at its default — Vercel auto-detects Next.js
   (Build = `next build`, Output handled automatically). No environment variables are needed.
4. Click **Deploy** and wait ~1–2 minutes.
5. Vercel gives you a public URL like **`https://project1-xxxx.vercel.app`**. **That is your live
   website link** — anyone can open it, no login required.

> **Make sure it's fully public:** on Hobby (free) projects it already is. If you're on a Team
> plan, open **Project → Settings → Deployment Protection** and confirm **Vercel Authentication**
> is **off** so visitors don't hit a login wall.

You can later add a custom domain under **Project → Settings → Domains**.

### Deploy to Netlify — step by step

A **`netlify.toml`** is committed to the repo, so Netlify needs zero manual configuration:

1. Go to **https://app.netlify.com/start** and log in (you can use your GitHub account).
2. Choose **Import from Git → GitHub**, and **authorize Netlify** to access your repositories
   (grant access to `project1` if prompted).
3. Pick the **`project1`** repository. Netlify reads `netlify.toml` and fills in the build
   settings automatically (`npm run build`, Next.js Runtime, Node 20).
4. Click **Deploy**. After ~1–2 minutes you get a public URL like
   **`https://<random-name>.netlify.app`** — open to everyone.
5. Optional: **Site configuration → Change site name** to get a cleaner
   `https://your-name.netlify.app`.

### Alternative — Vercel CLI (no website clicks)

```bash
npm i -g vercel
vercel            # first run: log in + link the project (follow prompts)
vercel --prod     # deploy to a public production URL
```

---

## 🔁 Redeploying & Updating (continuous deployment)

Once the repo is imported into Vercel, deployment is **automatic**:

```bash
# make your edits, then:
git add .
git commit -m "Describe what you changed"
git push
```

Every push to `main` triggers a fresh production deploy. Pull requests get their own live preview
URL. To roll back, open the Vercel dashboard → **Deployments** → pick a previous one → **Promote to
Production**. No rebuild-by-hand ever required.

Routine maintenance:

```bash
npm outdated        # see which dependencies have updates
npm update          # apply minor/patch updates
npm run build       # always confirm it still builds before pushing
```

---

## 🩺 Troubleshooting

| Symptom | Fix |
| --- | --- |
| An image never loads (request stays pending) | Re-encode it with the `ffmpeg` command in [Replacing images](#replacing-images--videos). |
| Video won't autoplay | Videos must be `muted` + `playsInline` (they already are); some browsers block autoplay with sound. |
| Fonts look wrong on first load | Ensure you have internet on the **build** machine — `next/font` fetches Google fonts at build time, then self-hosts them. |
| `npm run build` fails on types | Run `npx tsc --noEmit` to see the exact type error. |
| Animations feel heavy on a low-end device | The site already respects `prefers-reduced-motion`; enable it in your OS to verify. |

---

## 📄 Credits & License

- Design & build: crafted as a bespoke luxury experience.
- Typography: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) &
  [Inter](https://fonts.google.com/specimen/Inter) (SIL Open Font License).
- Imagery & film: provided by the project owner.

This project is provided for the owner's use. Replace or add a license file if you intend to
distribute it.
