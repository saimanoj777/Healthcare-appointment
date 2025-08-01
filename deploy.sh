#!/bin/bash

echo "🚀 Healthcare Appointment App Deployment Script"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin <your-github-repo-url>"
    echo "   git push -u origin main"
    exit 1
fi

# Check if changes are committed
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for deployment'"
    echo "   git push"
    exit 1
fi

echo "✅ Repository is ready for deployment"
echo ""
echo "📋 Deployment Steps:"
echo ""
echo "1. 🎯 FRONTEND DEPLOYMENT (Vercel):"
echo "   - Go to https://vercel.com"
echo "   - Sign up/Login with GitHub"
echo "   - Click 'New Project'"
echo "   - Import your GitHub repository"
echo "   - Set root directory to 'client'"
echo "   - Deploy"
echo ""
echo "2. 🔧 BACKEND DEPLOYMENT (Railway):"
echo "   - Go to https://railway.app"
echo "   - Sign up/Login with GitHub"
echo "   - Click 'New Project' → 'Deploy from GitHub repo'"
echo "   - Select your repository"
echo "   - Set root directory to 'server'"
echo "   - Deploy"
echo ""
echo "3. 🔗 UPDATE API URL:"
echo "   - After backend deployment, copy the URL"
echo "   - Go to Vercel project settings"
echo "   - Add environment variable: VITE_API_URL=<backend-url>"
echo "   - Redeploy frontend"
echo ""
echo "4. 🎉 TEST YOUR APP:"
echo "   - Visit your Vercel frontend URL"
echo "   - Test all features"
echo ""
echo "📚 For detailed instructions, see README.md"
echo ""
echo "Good luck with your deployment! 🚀" 