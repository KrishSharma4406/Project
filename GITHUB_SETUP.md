# GitHub Setup Guide

Follow these steps to push your sales-dashboard project to GitHub.

## Prerequisites
- Git installed on your system
- A GitHub account

## Steps to Push to GitHub

### 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `sales-dashboard`
   - **Description**: "Advanced Sales Dashboard with Next.js 15, TypeScript, Tailwind CSS, and Recharts"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### 2. Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd "c:\Users\Krish Kumar\OneDrive\Desktop\work\sales-dashboard"
git remote add origin https://github.com/KrishSharma4406/sales-dashboard.git
git branch -M main
git push -u origin main
```

**OR** if you prefer SSH:

```bash
cd "c:\Users\Krish Kumar\OneDrive\Desktop\work\sales-dashboard"
git remote add origin git@github.com:KrishSharma4406/sales-dashboard.git
git branch -M main
git push -u origin main
```

### 3. Verify the Push

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md will be displayed automatically

## Quick Command Reference

```bash
# Check current branch
git branch

# Check remote connections
git remote -v

# View commit history
git log --oneline

# Check status
git status

# Push future changes
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

### Authentication Issues

If you encounter authentication problems:

1. **Using HTTPS**: You may need a Personal Access Token (PAT)
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate a new token with `repo` permissions
   - Use the token as your password when pushing

2. **Using SSH**: Set up SSH keys
   - Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
   - Add to SSH agent: `ssh-add ~/.ssh/id_ed25519`
   - Add public key to GitHub: Settings → SSH and GPG keys

### Remote Already Exists

If you see "remote origin already exists":
```bash
git remote remove origin
git remote add origin YOUR_GITHUB_URL
```

## Next Steps

After pushing to GitHub:

1. ✅ Add topics/tags to your repository (nextjs, typescript, tailwindcss, recharts)
2. ✅ Consider adding a LICENSE file
3. ✅ Enable GitHub Pages for live demo (optional)
4. ✅ Add screenshots to README
5. ✅ Set up GitHub Actions for CI/CD (optional)

## Deployment Options

### Vercel (Recommended for Next.js)
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Get automatic deployments on every push

### Netlify
1. Go to [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### GitHub Pages
- Not recommended for Next.js apps (requires static export)

---

**Your project is now ready to be shared with the world! 🚀**
