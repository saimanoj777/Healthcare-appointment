# Healthcare Appointment App - Frontend Only - Vercel Deployment Guide

## Overview

This is now a **frontend-only** application that uses static data and localStorage for demonstration purposes. No backend server is required.

## Prerequisites

1. Make sure you have a GitHub account
2. Install Vercel CLI (optional): `npm i -g vercel`

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Convert to frontend-only app"
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

3. **Deploy**
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

## Application Features

### Frontend-Only Features:
- ✅ **Static Doctor Data**: 6 sample doctors with realistic information
- ✅ **Local Storage**: Appointments are stored in browser localStorage
- ✅ **Responsive Design**: Works on all devices
- ✅ **Search Functionality**: Filter doctors by name, specialization, etc.
- ✅ **Appointment Booking**: Book appointments with form validation
- ✅ **Doctor Profiles**: Detailed doctor information and availability
- ✅ **No Backend Required**: Completely self-contained

### Data Storage:
- Doctor information is stored in `src/data/doctors.js`
- Appointments are stored in browser localStorage
- No external API calls required

## Configuration Files

The following files have been configured for Vercel deployment:

- `vercel.json`: Vercel configuration
- `.gitignore`: Git ignore rules
- Updated `vite.config.js`: Optimized build settings
- `src/data/doctors.js`: Static doctor data

## Post-Deployment

1. **Custom Domain** (Optional)
   - Go to your project settings in Vercel
   - Add a custom domain if desired

2. **Automatic Deployments**
   - Every push to your main branch will trigger a new deployment
   - Preview deployments are created for pull requests

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that the build command works locally: `npm run build`

### Data Issues
- Doctor data is static and doesn't require a backend
- Appointments are stored in localStorage (browser-specific)
- Clear localStorage to reset appointment data

### Routing Issues
- The `vercel.json` includes a rewrite rule for SPA routing
- All routes will serve `index.html`

## Performance Optimization

The build configuration includes:
- Code splitting for better performance
- Optimized chunk splitting
- Static asset caching headers
- Source map disabled for production

## Demo Features

The app includes:
- 6 sample doctors with different specializations
- Realistic availability slots
- Form validation for appointments
- Responsive design
- Search and filter functionality
- Local storage for appointment persistence

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Test the build locally first: `npm run build`
3. Verify all imports are correct
4. Clear browser localStorage if appointment data is corrupted 