# Deployment guide

## Frontend on Vercel
1. Push this repo to GitHub.
2. Create a Vercel project from the repository.
3. Set Root Directory to `client`.
4. Set Build Command to `npm run build`.
5. Set Output Directory to `dist`.
6. Add environment variable:
   - `VITE_API_URL=https://your-render-service.onrender.com/api/v1`

## Backend on Render
1. Create a new Render Web Service from this repo.
2. Set the Root Directory to `server`.
3. Use the following build/start commands:
   - Build: `npm install --include=dev && npm run build`
   - Start: `npm run start`
4. Add environment variables:
   - `PORT=5000`
   - `JWT_SECRET=<your-secret>`

## Important
The frontend and backend are separate deployments. The frontend cannot call the backend successfully unless `VITE_API_URL` points to the live Render URL.
