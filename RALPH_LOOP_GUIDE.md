# Ralph Loop Setup Guide
## Advanced Cocktail Mixologist Project

This guide explains how to use the Ralph Wiggum autonomous development loop for this project.

---

## What is Ralph Loop?

Ralph Wiggum is a method for running Claude Code in continuous autonomous loops to complete long-running tasks without manual intervention. Each iteration runs in a **fresh context window**, preventing context bloat and hallucinations.

**Key Benefits:**
- ✅ Fresh context every iteration (no degradation)
- ✅ Autonomous task completion
- ✅ Self-verification via Playwright screenshots
- ✅ Git commits for each completed task
- ✅ Detailed activity logging

---

## Project Structure

```
/home/user/CodeExamples/
├── PRD.md                  # Product Requirements Document
├── plan.md                 # Task list with JSON format
├── activity.md             # Progress log (auto-updated)
├── PROMPT.md               # Agent instructions
├── ralph.sh                # Bash loop script
├── screenshots/            # Verification screenshots (auto-created)
└── docs/                   # Application files
    ├── index.html
    ├── app.js
    ├── styles.css
    └── ...
```

---

## Setup Steps

### 1. Enable Sandboxing (Important!)

Create or update `.claude/settings.json` with proper permissions:

```json
{
  "sandbox": {
    "enabled": true,
    "allowedCommands": [
      "git",
      "python3",
      "node",
      "npm",
      "playwright",
      "chmod",
      "mkdir",
      "ls",
      "cat",
      "grep"
    ],
    "denyRules": [
      "rm -rf /*",
      "sudo",
      "shutdown"
    ],
    "autoApprove": true
  }
}
```

This prevents permission prompts from interrupting autonomous work.

### 2. Install Playwright MCP (if not already installed)

Playwright is used for browser verification and screenshots.

```bash
# Check if playwright is available
which playwright

# If not installed, follow Playwright MCP setup:
# https://github.com/anthropics/mcp-playwright
```

### 3. Verify Files Exist

All necessary files have been created:

- ✅ `PRD.md` - Complete product requirements
- ✅ `plan.md` - 17 tasks in JSON format
- ✅ `activity.md` - Activity log template
- ✅ `PROMPT.md` - Agent instructions
- ✅ `ralph.sh` - Bash loop script (executable)

### 4. Create Screenshots Directory

```bash
mkdir -p screenshots
```

---

## Running the Ralph Loop

### Basic Usage

```bash
# From /home/user/CodeExamples directory
./ralph.sh 20
```

**Arguments:**
- `20` = Maximum number of iterations (default: 20)

### What Happens

For each iteration, the agent will:

1. **Read** `activity.md` to understand current state
2. **Find** next failing task in `plan.md` (where `passes: false`)
3. **Implement** the task (write code, modify files)
4. **Verify** using Playwright (take screenshots)
5. **Log** progress in `activity.md`
6. **Update** `plan.md` (mark task as `passes: true`)
7. **Commit** to git with descriptive message
8. **Repeat** until all tasks complete or max iterations reached

### Termination Conditions

**Success:**
- Agent outputs `<promise>COMPLETE</promise>`
- All tasks in `plan.md` have `passes: true`

**Blocked:**
- Agent outputs `<promise>BLOCKED</promise>`
- Issue logged in `activity.md`
- Manual intervention required

**Max Iterations:**
- Reached iteration limit
- Check `plan.md` for remaining tasks
- Run again or increase limit

---

## Current Task List

From `plan.md`:

### ✅ Phase 1: Core Functionality (5/5 complete)
- Cocktail search and discovery
- Flavor pairing engine
- D3.js node visualizations
- Cocktail Codex taxonomy
- Device-responsive interactions

### ✅ Phase 2: Polish & Refinement (4/4 complete)
- Text readability fixes
- Button text centering
- Back button navigation
- Desktop action buttons

### ✅ Phase 3: Documentation (3/3 complete)
- NODE_VISUALIZATION_SKILL.md
- Claude.md project hub
- Comprehensive PRD

### 🔲 Phase 4: Future Enhancements (0/7 complete)
- Keyboard navigation
- ARIA labels and semantic HTML
- Cocktail comparison view
- Ingredient inventory tracker
- PWA features
- Seasonal recommendations
- Performance optimization

**Total Progress:** 12/17 tasks (70.6% complete)

---

## Monitoring Progress

### Check Activity Log

```bash
tail -50 activity.md
```

Shows recent agent activity with timestamps.

### Check Plan Status

```bash
grep '"passes"' plan.md
```

Shows which tasks are complete (`true`) vs pending (`false`).

### View Screenshots

```bash
ls -lh screenshots/
```

Browse verification screenshots taken by agent.

### Check Git Commits

```bash
git log --oneline -10
```

See commits made by the agent.

---

## Customizing the Loop

### Adjust Iteration Limit

```bash
# Run with more iterations
./ralph.sh 50

# Run with fewer iterations (testing)
./ralph.sh 5
```

### Add New Tasks

Edit `plan.md` and add tasks in JSON format:

```json
{
  "category": "feature",
  "description": "Add dark mode toggle",
  "steps": [
    "Create toggle button in header",
    "Add CSS for dark theme",
    "Store preference in LocalStorage",
    "Apply theme on load"
  ],
  "verification": "Toggle dark mode - should switch colors and persist on reload",
  "passes": false
}
```

### Modify Agent Instructions

Edit `PROMPT.md` to change agent behavior:
- Add new verification patterns
- Adjust quality standards
- Change commit message format
- Add new anti-patterns

---

## Verification Examples

The agent will take screenshots like these:

```bash
# Before/after UI changes
screenshots/before-keyboard-nav.png
screenshots/after-keyboard-nav.png

# Feature in action
screenshots/comparison-view-active.png
screenshots/inventory-filter-applied.png

# Mobile testing
screenshots/mobile-action-buttons.png
screenshots/mobile-codex-view.png
```

View screenshots to verify agent's work visually.

---

## Troubleshooting

### Agent Gets Stuck

**Symptoms:** Same iteration repeating, no progress

**Solutions:**
1. Check `activity.md` for error messages
2. Review last git commit
3. Manually fix blocking issue
4. Update `plan.md` to mark task as complete
5. Run loop again

### Server Not Running

**Symptoms:** Playwright can't connect to localhost:8000

**Solution:**
```bash
cd /home/user/CodeExamples
python3 -m http.server 8000 &
```

The script should auto-start the server, but you can start it manually if needed.

### Playwright Errors

**Symptoms:** Screenshot commands fail

**Solutions:**
1. Verify Playwright MCP is installed
2. Check browser is accessible (headless)
3. Ensure URL is correct (http://localhost:8000/docs/)

### Too Many Iterations

**Symptoms:** Loop runs out before completing

**Solutions:**
1. Increase iteration limit: `./ralph.sh 50`
2. Check if tasks are too complex (break into smaller tasks)
3. Review agent logs for inefficiency

---

## Cost Management

### Estimating Costs

Each iteration = 1 Claude API call
- **Model:** Claude Sonnet 4.5
- **Approximate cost:** $0.02-0.10 per iteration
- **20 iterations:** ~$0.40-$2.00

### Reducing Costs

1. **Start small:** Test with 5-10 iterations first
2. **Break down tasks:** Smaller tasks = fewer iterations per task
3. **Monitor progress:** Stop if agent is stuck
4. **Use Haiku for simple tasks:** Switch model in PROMPT.md if tasks are straightforward

---

## Best Practices

### ✅ Do This

- Start with 10-15 iterations for initial testing
- Monitor `activity.md` during first run
- Review screenshots to verify quality
- Keep tasks focused and specific
- Let agent run uninterrupted once confident

### ❌ Avoid This

- Don't run 100+ iterations without testing first
- Don't interrupt the loop mid-iteration
- Don't skip reviewing initial results
- Don't make tasks too vague or broad
- Don't forget to check git commits

---

## Success Metrics

**You'll know it's working when:**

1. ✅ `activity.md` shows dated entries with clear progress
2. ✅ `plan.md` tasks change from `false` to `true`
3. ✅ `screenshots/` fills with verification images
4. ✅ Git log shows meaningful commits
5. ✅ Features actually work when you test manually
6. ✅ No console errors in browser

---

## Next Steps

### To Start Development

```bash
cd /home/user/CodeExamples
./ralph.sh 20
```

### To Continue After Completion

1. Review completed work in git log
2. Test features manually
3. Add new tasks to `plan.md`
4. Run again: `./ralph.sh 20`

### To Deploy Changes

```bash
# After loop completes
git checkout gh-pages
git merge claude/cocktail-suggestion-app-w8wB6
git push origin gh-pages
```

Wait 2-3 minutes for GitHub Pages to rebuild.

---

## Resources

- **Ralph Wiggum Guide:** https://github.com/JeredBlu/guides/blob/main/Ralph_Wiggum_Guide.md
- **Playwright MCP:** https://github.com/anthropics/mcp-playwright
- **Claude CLI Docs:** https://docs.anthropic.com/claude/docs/claude-cli
- **Project PRD:** `PRD.md`
- **Node Viz Guide:** `docs/NODE_VISUALIZATION_SKILL.md`

---

## Support

If you encounter issues:

1. Check `activity.md` for agent's last action
2. Review `plan.md` for task details
3. Inspect screenshots in `screenshots/`
4. Test manually in browser
5. Check git log for recent changes

**Manual Override:**
You can always manually complete a task and mark it `passes: true` in `plan.md`.

---

**Happy Autonomous Development! 🤖🚀**
