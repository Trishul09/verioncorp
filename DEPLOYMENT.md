# Deployment Guide

## Recommended free setup

- Host the website on Vercel.
- Point your GoDaddy domain to Vercel with DNS records.
- Host the desktop installers as GitHub Release assets instead of keeping them inside the website build.

This keeps Vercel deployments small and makes the download links stable.

## What to upload to GitHub Releases

Use only the final installer files:

- `artifacts/desktop-macos-14/Aether-0.1.0-mac-arm64.dmg`
- `artifacts/desktop-windows-2022/Aether-Setup-0.1.0-x64.exe`

Do not upload:

- `artifacts/.../mac-arm64/`
- `artifacts/.../win-unpacked/`
- `.blockmap`
- other unpacked Electron files

## GitHub Release steps

1. Open your GitHub repo.
2. Create a new release with tag `v0.1.0`.
3. Upload these two files as release assets:
   - `Aether-0.1.0-mac-arm64.dmg`
   - `Aether-Setup-0.1.0-x64.exe`
4. Publish the release.

After that, the site download buttons will work with these URLs:

- `https://github.com/Trishul09/verioncorp/releases/download/v0.1.0/Aether-0.1.0-mac-arm64.dmg`
- `https://github.com/Trishul09/verioncorp/releases/download/v0.1.0/Aether-Setup-0.1.0-x64.exe`

## Vercel steps

1. Import the GitHub repo into Vercel.
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

The included `vercel.json` handles SPA routes like `/features` and `/download`.

## GoDaddy domain steps

In Vercel, add your custom domain first, then update DNS in GoDaddy using the exact records Vercel shows you.

Most commonly:

- add an `A` record for the root domain pointing to Vercel
- add a `CNAME` record for `www` pointing to Vercel

Use the values shown inside Vercel because they can vary.
