# Zyberlane Project 01 implementation record

## Source and ownership
Source: https://github.com/gireeshkumarreddy/R-VERIE-A-Waking-Dream
Source commit: b7cb35235ee695d99d982a4186ddc71cb58b1eca
All 63 tracked files copied; no source Git history imported.
This is a Zyberlane-managed concept project adapted from an existing design.
No claim of independent original design is made.

## Rights status
The user states permission was purchased to copy, modify and commercially use the source.
No purchased agreement was supplied or present in the repository. The source README
states owner use and owner-provided imagery/film, but has no general distribution license.
Attribution-waiver terms and transfer/sublicensing rights for all 11 public/images/*.jpg
and both public/videos/*.mp4 remain unverified. This is a rights-documentation blocker
for declaring commercial media clearance or permission to remove required attribution.
No media was replaced and no existing license notice was removed. The original README
Credits & License section is retained. The two font OFL notices were retrieved from
https://github.com/google/fonts/tree/main/ofl/cormorantgaramond and
https://github.com/google/fonts/tree/main/ofl/inter and are included in licenses/.
Dependency license notices remain in installed packages; dependencies are not vendored.

## Every intentional difference
- README.md: project-management disclosure, source baseline, destination repository,
  removal of the unrelated live URL, and project-specific deployment instructions.
  Original creative narrative and Credits & License section retained.
- package.json and package-lock.json: package name changed to zyberlane-project-01;
  package description identifies the managed concept. Dependency versions unchanged.
- src/lib/constants.ts: placeholder origin replaced by NEXT_PUBLIC_SITE_URL or VERCEL_URL;
  generic Instagram/Behance/Vimeo links replaced by the verified destination repository.
  Journal anchor retained; no contact or social account invented.
- src/app/layout.tsx: metadataBase only set when a deployment origin is available.
- src/components/layout/Footer.tsx: unrelated email replaced by
  “Zyberlane-managed concept project”, using the existing text style and layout.
- Added vercel.json: Next.js framework, npm ci installation, npm run build.
- Added this record, SOURCE-MANIFEST.json, ASSET-VERIFICATION.json and two font licenses.

57 of the original 63 files are byte-identical. All original sections, CSS, Tailwind
configuration, fonts, motion components, scrolling, responsive classes and assets are unchanged.
SOURCE-MANIFEST.json records both hashes for each original file.

## Verification performed
- npm ci: passed (397 packages; upstream deprecation warnings).
- npm run build: passed, including Next.js lint and TypeScript validation.
- npx tsc --noEmit: passed independently.
- Static HTML inspection: seven main sections plus cinematic footer; all six navigation IDs present.
- Eleven JPEGs decoded successfully; all 13 assets hash-identical to source.
- ffprobe: both videos valid H.264/AAC, 1280x720; hero 6.016 seconds, footer 8 seconds.
- Production route is statically prerendered; homepage first-load JS 156 kB.
- Vercel framework/build configuration prepared; actual Vercel deployment not tested.

## Verification limits
Managed browser preview failed: the environment launcher appends --host and --strictPort,
which Next.js does not support. No application workaround was introduced.
Desktop/mobile visual behavior, actual video playback, interactive navigation and smooth
scrolling, Framer Motion behavior, browser console and runtime network errors remain unverified.
The source CTA “Watch the Film” scrolls to Gallery; this existing behavior was preserved.
No separate live deployment was made and no existing Zyberlane production or DNS was changed.
