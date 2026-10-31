# Krono Desktop

Electron + React + Vite. It uses the **same account and database as the Krono website** through the website API
(the website lives in its own repo/folder).

## Run (Windows, Laragon)
1. Start Laragon (Apache + MySQL) and make sure the website works (`php database/migrate.php` done in the website folder).
2. In this folder: `npm install`, then `npm run dev`.
3. Close every old Krono / Electron window first. Port **5173** must be free (Vite uses `strictPort`).

## Connect to the website
Edit `src/config.js`:
- `API_BASE`    = website address + `/api`   (e.g. `http://localhost/krono/website/public/api`)
- `WEBSITE_URL` = website address            (e.g. `http://localhost/krono/website/public`)
Check: open `API_BASE/me` in a browser. JSON with `"error":"unauthorized"` means the website API is reachable.

Website -> app auto-login uses the `krono://` link. Run the app once so Windows remembers where it is.

## Build installer
`npm run build` (output in `release/`).
# Krono-Desktop
