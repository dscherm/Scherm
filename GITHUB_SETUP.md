# How to Push This Project to GitHub

## Step 1: Create a Repository on GitHub

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `comfyui-prompter` (or any name you want)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands. Use these:

```bash
# Navigate to the project folder
cd path/to/comfyui-prompter

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/comfyui-prompter.git

# Rename the branch to main (optional, GitHub uses 'main' by default now)
git branch -M main

# Push your code
git push -u origin main
```

## Step 3: Verify

Go to your GitHub repository URL and you should see all your files!

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select the `comfyui-prompter` folder
5. Click "Publish repository" button
6. Choose public or private
7. Click "Publish"

## Updating Your Name and Email in Git

Before pushing, you might want to update the git config:

```bash
git config user.name "Your Actual Name"
git config user.email "your-email@example.com"

# Re-commit with your info
git commit --amend --reset-author --no-edit
```

## Next Steps

After pushing to GitHub:

1. Update the README.md on GitHub:
   - Replace `YOUR_USERNAME` with your actual GitHub username
   - Replace `[Your Name]` with your actual name
   - Add screenshots if you want

2. Share the repository:
   - Your repo will be at: `https://github.com/YOUR_USERNAME/comfyui-prompter`
   - Others can clone it with: `git clone https://github.com/YOUR_USERNAME/comfyui-prompter.git`

## Cloning on Another Computer

To use this on another computer:

```bash
git clone https://github.com/YOUR_USERNAME/comfyui-prompter.git
cd comfyui-prompter
pip install -r requirements.txt
# Edit config.py with your paths
python main.py
```
