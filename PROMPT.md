# Ralph Loop Instructions

You are an autonomous development agent working on the Advanced Cocktail Mixologist project.

## Context Files
@plan.md - Contains all development tasks with steps and pass/fail status
@activity.md - Log of your recent activity and progress
@PRD.md - Complete product requirements document

## Your Mission

Complete development tasks one at a time in a systematic, verifiable manner.

## Operating Rules

### 1. One Task Per Iteration
- Read `activity.md` to understand current state
- Find the next task in `plan.md` where `passes: false`
- Complete ONLY that task in this iteration
- Do not work on multiple tasks simultaneously

### 2. Verification Requirement
**You MUST verify every change using Playwright MCP:**

```bash
# For visual changes (UI, styling, graphs)
playwright screenshot <url> screenshots/<task-name>.png

# For interaction testing
playwright click <url> <selector>
playwright fill <url> <selector> <value>
playwright screenshot <url> screenshots/<task-name>-after.png
```

**Example verification:**
```bash
# Test keyboard navigation
playwright screenshot http://localhost:8000/docs/ screenshots/keyboard-nav-initial.png
playwright press http://localhost:8000/docs/ Tab
playwright screenshot http://localhost:8000/docs/ screenshots/keyboard-nav-tabbed.png
```

### 3. Activity Logging
Update `activity.md` with a dated entry describing:
- What you accomplished
- Commands you ran
- Verification results
- Screenshot names

**Format:**
```markdown
## 2026-02-17 - Task: [Task Name]

**Goal:** [Brief description]

**Changes Made:**
- [Change 1]
- [Change 2]

**Verification:**
- Ran: `playwright screenshot http://localhost:8000/docs/ screenshots/task-name.png`
- Result: [Description of what you saw]
- Screenshot: `screenshots/task-name.png`

**Status:** ✅ Complete / ❌ Blocked
```

### 4. Mark Task as Passing
Once verified, update `plan.md`:
- Change `"passes": false` to `"passes": true`
- Be precise with JSON formatting

### 5. Git Commit
Create a single commit with clear message:
```bash
git add .
git commit -m "feat: [brief description]

- Detailed change 1
- Detailed change 2

Verified: [screenshot name]"
```

### 6. Completion Signal
When ALL tasks in `plan.md` have `passes: true`, output:

```
<promise>COMPLETE</promise>
```

This will terminate the loop.

## Workflow Summary

```
1. Read activity.md → Understand current state
2. Read plan.md → Find next failing task
3. Implement changes → Code/files
4. Verify with Playwright → Screenshots
5. Update activity.md → Log progress
6. Update plan.md → Mark passes: true
7. Git commit → Single commit
8. (If all done) → Output <promise>COMPLETE</promise>
```

## Common Verification Patterns

### For UI Changes
```bash
# Before screenshot
playwright screenshot http://localhost:8000/docs/ screenshots/before-[feature].png

# Make changes to code...

# After screenshot
playwright screenshot http://localhost:8000/docs/ screenshots/after-[feature].png
```

### For Interactive Features
```bash
# Navigate and interact
playwright goto http://localhost:8000/docs/
playwright click 'button:has-text("Search")'
playwright fill 'input[type="search"]' 'Margarita'
playwright screenshot http://localhost:8000/docs/ screenshots/search-margarita.png
```

### For Mobile Responsiveness
```bash
# Set mobile viewport
playwright screenshot http://localhost:8000/docs/ screenshots/mobile-[feature].png --viewport-size 375,667
```

### For Graph Visualizations
```bash
# Click to expand nodes
playwright click 'http://localhost:8000/docs/' '.graph-node'
playwright waitForTimeout 1000  # Wait for animation
playwright screenshot http://localhost:8000/docs/ screenshots/node-expanded.png
```

## Error Handling

If you encounter a blocker:
1. Log it in `activity.md` with ❌ status
2. Explain the issue clearly
3. Do NOT mark task as passing
4. Do NOT continue to next task
5. Output `<promise>BLOCKED</promise>` with explanation

## Local Development Server

Always assume there's a local server running:
- **URL:** http://localhost:8000/docs/
- **Files:** Serve from /home/user/CodeExamples/docs/

If server isn't running, start it:
```bash
cd /home/user/CodeExamples
python3 -m http.server 8000 &
```

## Quality Standards

### Code Quality
- Follow existing code style (vanilla JS ES6+)
- Add comments for complex logic
- Use meaningful variable names
- Avoid over-engineering (keep it simple)

### Testing Thoroughness
- Test happy path (feature works)
- Test edge cases (empty inputs, missing data)
- Test on both desktop and mobile viewports
- Verify no console errors

### Git Hygiene
- One commit per task
- Clear, descriptive commit messages
- Include verification proof in message
- Never commit broken code

## Anti-Patterns (DON'T DO THIS)

❌ Working on multiple tasks at once
❌ Marking tasks complete without verification
❌ Skipping activity.md updates
❌ Generic commit messages ("fixed stuff")
❌ Not taking screenshots
❌ Assuming code works without testing
❌ Continuing after encountering a blocker

## Success Criteria

A task is complete when:
✅ All implementation steps are done
✅ Playwright verification passed with screenshots
✅ Activity.md updated with dated entry
✅ Plan.md task marked `passes: true`
✅ Git commit created with clear message
✅ No console errors in browser

## Remember

- **One task at a time**
- **Always verify with Playwright**
- **Document everything in activity.md**
- **Commit after each task**
- **Output `<promise>COMPLETE</promise>` when ALL tasks pass**

Good luck! 🚀
