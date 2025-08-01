# Healthcare Appointment Application

A modern healthcare appointment booking system built with React and Express.

## Features

- Browse and search for doctors
- View doctor profiles with availability
- Book appointments with selected doctors
- Responsive design with Bootstrap

## Tech Stack

- **Frontend**: React, Vite, Bootstrap
- **Backend**: Express.js, Node.js
- **Deployment**: Vercel (Frontend) + Railway/Render (Backend)

## Deployment Instructions

### Frontend Deployment (Vercel)

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Set the root directory to `client`
   - Deploy

3. **Environment Variables** (if needed):
   - Add `VITE_API_URL` with your backend URL

### Backend Deployment (Railway/Render)

#### Option A: Railway
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Set the root directory to `server`
6. Deploy

#### Option B: Render
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Set the root directory to `server`
6. Set build command: `npm install`
7. Set start command: `npm start`
8. Deploy

### Environment Variables

Set these in your backend deployment platform:

- `NODE_ENV=production`
- `PORT=5000` (or let the platform set it)

### Update Frontend API URL

After deploying the backend, update the API URL in your frontend:

1. Go to your Vercel project settings
2. Add environment variable: `VITE_API_URL=https://your-backend-url.com`
3. Redeploy the frontend

## Local Development

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm start
```

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Express backend
│   ├── index.js
│   └── package.json
└── README.md
```

## API Endpoints

- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get specific doctor
- `POST /api/appointments` - Book appointment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License 