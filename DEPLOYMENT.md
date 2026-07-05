# Complete Guide: Deploy Portfolio to GitHub Pages

Follow these steps to publish your portfolio website publicly on GitHub.

---

## Part 1 — Prepare the Project Locally

### Step 1: Install Node.js

1. Download Node.js from https://nodejs.org (LTS version recommended)
2. Install it and verify:

```bash
node -v
npm -v
```

### Step 2: Extract / Open the Project

If you received a ZIP file:

1. Extract `portfolio-website.zip` to a folder (e.g. `C:\Projects\portfolio-website`)
2. Open terminal in that folder

### Step 3: Install Dependencies

```bash
cd portfolio-website
npm install
```

### Step 4: Add Your Resume

Copy your resume PDF into the `public` folder and rename it to `resume.pdf`:

**Windows (PowerShell):**
```powershell
Copy-Item "C:\Desktop\college\Roshan Kanase Resume.pdf" ".\public\resume.pdf"
```

### Step 5: Test Locally

```bash
npm run dev
```

Visit **http://localhost:5173** — verify all sections load correctly.

Press `Ctrl+C` to stop the server.

---

## Part 2 — Create GitHub Repository

### Step 6: Create a GitHub Account (if needed)

Go to https://github.com and sign up.

### Step 7: Create a New Repository

1. Click the **+** icon (top-right) → **New repository**
2. Fill in:
   - **Repository name:** `roshan-kanase-portfolio` (or any name you prefer)
   - **Description:** Personal portfolio website
   - **Visibility:** Public
   - **Do NOT** check "Add a README" (we already have one)
3. Click **Create repository**

### Step 8: Update Base Path in vite.config.ts

Open `vite.config.ts` and change the base path to match your repo name:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/YOUR-REPO-NAME/' : '/',
```

Example — if your repo is `roshan-kanase-portfolio`:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/roshan-kanase-portfolio/' : '/',
```

> **Important:** The repo name must match exactly (case-sensitive).

---

## Part 3 — Push Code to GitHub

### Step 9: Initialize Git and Push

Run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/roshan-kanase-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

If prompted for credentials, use a **Personal Access Token** (not your password):
1. GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. Select `repo` scope
3. Use the token as your password when pushing

---

## Part 4 — Enable GitHub Pages

### Step 10: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source:** Select **GitHub Actions**
5. Save — no further config needed (workflow file is already included)

### Step 11: Trigger Deployment

The deployment runs automatically when you push to `main`. To trigger manually:

1. Go to **Actions** tab in your repo
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

Wait 1–2 minutes for the build to complete (green checkmark).

### Step 12: View Your Live Site

Your site will be live at:

```
https://YOUR-USERNAME.github.io/roshan-kanase-portfolio/
```

(GitHub shows the exact URL under Settings → Pages after deployment.)

---

## Part 5 — Update Your Portfolio Later

Whenever you make changes:

```bash
# Edit files (especially src/data/portfolio.ts)
npm run dev          # test locally

git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will automatically rebuild and redeploy.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank page after deploy | Check `base` path in `vite.config.ts` matches repo name |
| Resume download 404 | Ensure `public/resume.pdf` exists and was committed |
| Build fails in Actions | Check Actions tab for error logs; run `npm run build` locally |
| CSS/JS not loading | Verify base path ends with `/` e.g. `/roshan-kanase-portfolio/` |
| Git push rejected | Run `git pull origin main --rebase` then push again |

---

## Optional: Custom Domain

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In repo Settings → Pages → Custom domain, enter your domain
3. Add DNS records as GitHub instructs

---

## Summary Checklist

- [ ] Node.js installed
- [ ] `npm install` completed
- [ ] Resume copied to `public/resume.pdf`
- [ ] `npm run dev` works locally
- [ ] GitHub repo created
- [ ] `vite.config.ts` base path updated
- [ ] Code pushed to GitHub
- [ ] GitHub Pages source set to **GitHub Actions**
- [ ] Deployment workflow succeeded
- [ ] Live site verified in browser

Your portfolio is now publicly accessible worldwide!
