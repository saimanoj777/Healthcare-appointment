# Healthcare Appointment App - Vercel Deployment Guide

## Prerequisites

1. Make sure you have a GitHub account
2. Install Vercel CLI (optional): `npm i -g vercel`

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Set the following configuration:
     - **Framework Preset**: Vite
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - Your API is already configured to use the deployed backend

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd client
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: `Y`
   - Link to existing project: `N`
   - Project name: `healthcare-appointment`
   - Directory: `./`
   - Override settings: `N`

## Configuration Files

The following files have been added for Vercel deployment:

- `vercel.json`: Vercel configuration
- `.gitignore`: Git ignore rules
- Updated `vite.config.js`: Optimized build settings

## Post-Deployment

1. **Custom Domain** (Optional)
   - Go to your project settings in Vercel
   - Add a custom domain if desired

2. **Environment Variables**
   - Add any API keys or environment variables in the Vercel dashboard

3. **Automatic Deployments**
   - Every push to your main branch will trigger a new deployment
   - Preview deployments are created for pull requests

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that the build command works locally: `npm run build`

### API Issues
- Verify your API endpoints are accessible
- Check CORS settings on your backend

### Routing Issues
- The `vercel.json` includes a rewrite rule for SPA routing
- All routes will serve `index.html`

## Performance Optimization

The build configuration includes:
- Code splitting for better performance
- Optimized chunk splitting
- Static asset caching headers
- Source map disabled for production

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Verify your API endpoints are working
3. Test the build locally first 