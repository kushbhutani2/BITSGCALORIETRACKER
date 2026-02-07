Smart Mess Tracker

This is a static client-side web app (HTML/CSS/JS) that tracks mess meals and calories and stores per-user data in localStorage.

Quick local test

1. Start a simple HTTP server (Python):

```powershell
cd "c:\WEB DEVELOPMENT"
python -m http.server 8000
```

2. Open in your browser: http://localhost:8000

Quick share (temporary) — ngrok (recommended for testing with friends)

1. Install ngrok: https://ngrok.com/
2. Authenticate (one-time):

```powershell
# replace <YOUR_AUTHTOKEN> with token from ngrok dashboard
\path\to\ngrok.exe authtoken <YOUR_AUTHTOKEN>
```

3. Start ngrok to expose the local server on port 8000:

```powershell
cd "c:\WEB DEVELOPMENT"
\path\to\ngrok.exe http 8000
```

4. Share the HTTPS forwarding URL shown by ngrok with your friends. This is temporary and will stop when ngrok stops.

Persistent free hosting options

Option A — GitHub Pages (good for static sites)

1. Create a GitHub repository (e.g. `mess-tracker`).
2. Initialize git locally and push:

```bash
cd "c:/WEB DEVELOPMENT"
git init
git add .
git commit -m "Initial commit"
# create repo on GitHub (or use the web UI), then add remote:
git remote add origin https://github.com/<YOUR_USER>/<REPO>.git
git branch -M main
git push -u origin main
```

3. Enable GitHub Pages in the repository Settings → Pages and select `main` branch, `/ (root)`.
4. Your site will be available at `https://<YOUR_USER>.github.io/<REPO>/` (may take a minute).

Option B — Netlify (drag-and-drop or connect a Git repo)

- Drag & drop: open https://app.netlify.com/drop and upload the site folder (build not required since site is static).
- Or connect your GitHub repo in Netlify dashboard and deploy from `main` branch.

Option C — Vercel (static hosting)

- Install Vercel CLI or connect GitHub and import project.
- From CLI: `npm i -g vercel` then `vercel` and follow prompts.

Security & privacy notes

- The app stores user data in localStorage per email + mess. If you host publicly, be mindful that data is only client-side (not shared unless someone uses the same browser and email).
- For multi-user persistent storage across devices, consider adding a backend (Firebase, Supabase, or your own API).

If you want me to do one of the following for you, tell me which and I'll proceed:
- Initialize a git repo locally and create the first commit (I can run the commands here).
- Help connect and deploy to GitHub Pages (you'll need to create the GitHub repo or provide the repo URL).
- Provide ngrok commands and help run ngrok here (you must provide your ngrok authtoken).

