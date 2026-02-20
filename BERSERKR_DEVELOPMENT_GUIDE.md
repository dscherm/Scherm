# Berserkr Development Guide
## 3D Action RPG - Godot Engine

**Project:** Berserkr (Norse-themed action RPG)
**Engine:** Godot 4.x
**Status:** Playable Prototype → Commercial Release
**Target Platforms:** Steam, itch.io (PC: Windows, Linux)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [What You Have Now](#what-you-have-now)
3. [Development Environment Setup](#development-environment-setup)
4. [Project Structure](#project-structure)
5. [Using the Ralph Loop](#using-the-ralph-loop)
6. [Manual Development Workflow](#manual-development-workflow)
7. [Release Checklist](#release-checklist)
8. [Budget & Timeline](#budget--timeline)
9. [Resources](#resources)
10. [FAQ](#faq)

---

## Project Overview

### The Game

**Berserkr** is a 3D action RPG inspired by Dark Souls, God of War, and Norse mythology. Players embark on a challenging journey through frozen wastelands, dark forests, and ancient ruins, battling mythological creatures and powerful bosses.

**Core Gameplay:**
- ⚔️ **Visceral Melee Combat** - Satisfying weapon-based combat with impact
- 📊 **RPG Progression** - Stats, levels, skill trees, equipment
- 🗺️ **Exploration** - Interconnected world with secrets
- 👹 **Boss Battles** - Unique encounters with pattern-based mechanics
- 📜 **Lore** - Environmental storytelling and Norse mythology

### Current State

**✅ Working (Prototype):**
- Combat system (melee attacks, dodge/roll, basic combos)
- Enemy AI (patrol, chase, attack)
- Inventory system (item pickup, equipment)
- Dialogue system (NPC conversations, quest triggers)

**🔲 Needs Development:**
- Weapon variety and movesets
- RPG stats and leveling
- Quest system
- Level design (5+ areas)
- Boss battles (5 bosses)
- Save/load system
- Audio (music, sound effects)
- Visual polish (VFX, shaders, post-processing)
- Performance optimization
- Steam integration
- Marketing and release

---

## What You Have Now

### Documentation (Complete ✅)

You've been provided with comprehensive planning docs:

1. **PRD-Berserkr.md** (10,000+ words)
   - Complete product requirements
   - All features documented in detail
   - Technical architecture
   - Timeline and budget estimates
   - Marketing strategy

2. **plan-berserkr.md** (60 tasks)
   - Phase 1: Combat Enhancement (4 tasks)
   - Phase 2: RPG Systems (3 tasks)
   - Phase 3: Inventory & Loot (3 tasks)
   - Phase 4: Quests & Dialogue (2 tasks)
   - Phase 5: World & Level Design (5 tasks)
   - Phase 6: Boss Battles (5 tasks)
   - Phase 7: Save/Load (3 tasks)
   - Phase 8: Audio (3 tasks)
   - Phase 9: Visual Polish (3 tasks)
   - Phase 10: UI/UX (3 tasks)
   - Phase 11: Performance (3 tasks)
   - Phase 12: Testing (3 tasks)
   - Phase 13: Steam Integration (3 tasks)
   - Phase 14: Release Prep (3 tasks)

3. **PROMPT-berserkr.md**
   - Godot-specific Ralph loop instructions
   - Development patterns and best practices
   - Testing and verification procedures

4. **activity-berserkr.md**
   - Activity log template
   - Progress tracking format

---

## Development Environment Setup

### Prerequisites

**Required Software:**

1. **Godot Engine 4.2+**
   - Download from: https://godotengine.org/download
   - Extract and add to PATH (optional)
   - Linux: `sudo snap install godot --classic`
   - macOS: `brew install --cask godot`
   - Windows: Download .exe and run

2. **Git**
   - For version control
   - Linux: `sudo apt install git`
   - macOS: `brew install git`
   - Windows: Download from git-scm.com

3. **Text Editor (Optional but recommended)**
   - VS Code with godot-tools extension
   - Or use Godot's built-in script editor

**Optional Software:**

1. **Blender** (for 3D modeling)
   - Download from: https://www.blender.org/
   - Used for creating custom models

2. **GIMP/Krita** (for textures)
   - Free image editors
   - GIMP: https://www.gimp.org/
   - Krita: https://krita.org/

3. **Audacity** (for audio editing)
   - Download from: https://www.audacityteam.org/

### Verify Installation

```bash
# Check Godot version
godot --version
# Should output: 4.2.x or higher

# Check Git
git --version

# Clone your repository
git clone https://github.com/dscherm/berserkr-godot.git
cd berserkr-godot

# Open in Godot
godot --path . --editor
```

If everything opens without errors, you're ready to develop!

---

## Project Structure

### Godot Project Organization

```
berserkr-godot/
├── project.godot              # Main project file
├── export_presets.cfg         # Export settings
├── icon.svg                   # Project icon
│
├── assets/                    # All game assets
│   ├── models/                # 3D models (.glb, .fbx)
│   │   ├── characters/
│   │   │   ├── player.glb
│   │   │   ├── draugr.glb
│   │   │   └── wolf.glb
│   │   ├── weapons/
│   │   │   ├── sword.glb
│   │   │   ├── axe.glb
│   │   │   └── hammer.glb
│   │   ├── environment/
│   │   └── props/
│   │
│   ├── textures/              # PBR textures
│   │   ├── characters/
│   │   ├── environment/
│   │   └── ui/
│   │
│   ├── audio/
│   │   ├── music/
│   │   │   ├── main_theme.ogg
│   │   │   ├── combat.ogg
│   │   │   └── boss_01.ogg
│   │   ├── sfx/
│   │   │   ├── weapons/
│   │   │   ├── footsteps/
│   │   │   └── ui/
│   │   └── voice/             # Optional
│   │
│   └── ui/                    # UI sprites, fonts
│       ├── icons/
│       ├── fonts/
│       └── cursors/
│
├── scenes/                    # Godot scenes (.tscn)
│   ├── player/
│   │   ├── Player.tscn
│   │   └── PlayerController.gd
│   │
│   ├── enemies/
│   │   ├── Draugr.tscn
│   │   ├── DraugrAI.gd
│   │   ├── Wolf.tscn
│   │   └── WolfAI.gd
│   │
│   ├── bosses/
│   │   ├── DraugrChieftain.tscn
│   │   └── DraugrChieftainAI.gd
│   │
│   ├── levels/
│   │   ├── Village.tscn       # Hub area
│   │   ├── Forest.tscn        # Starting area
│   │   ├── Mountains.tscn
│   │   ├── Tundra.tscn
│   │   └── Ruins.tscn
│   │
│   ├── ui/
│   │   ├── MainMenu.tscn
│   │   ├── HUD.tscn
│   │   ├── InventoryUI.tscn
│   │   ├── DialogueBox.tscn
│   │   ├── QuestLog.tscn
│   │   └── Settings.tscn
│   │
│   └── world/
│       └── World.tscn          # Main game scene
│
├── scripts/                   # Autoload singletons (global scripts)
│   ├── GameManager.gd         # Game state, save/load
│   ├── InventoryManager.gd    # Inventory system
│   ├── QuestManager.gd        # Quest tracking
│   ├── DialogueManager.gd     # Dialogue system
│   ├── AudioManager.gd        # Audio playback
│   └── InputManager.gd        # Input handling
│
├── data/                      # Game data (JSON or .tres resources)
│   ├── items.json             # Item database
│   ├── weapons.json           # Weapon stats
│   ├── enemies.json           # Enemy definitions
│   ├── quests.json            # Quest data
│   ├── dialogue.json          # Dialogue trees
│   └── skills.json            # Skill tree data
│
└── addons/                    # Third-party plugins
    └── godotsteam/            # Steam SDK (if using)
```

### Key Files

**project.godot:**
- Main Godot project configuration
- Autoload scripts defined here
- Input mappings defined here

**export_presets.cfg:**
- Export settings for Windows, Linux, Mac
- Icon, splash screen, executable name

---

## Using the Ralph Loop

### What is Ralph Loop?

Ralph Wiggum is an autonomous development method where Claude Code iterates through tasks automatically, implementing features, testing them, and committing changes.

**Benefits:**
- ✅ Autonomous task completion
- ✅ Fresh context each iteration (no degradation)
- ✅ Systematic progress through plan
- ✅ Automatic verification and testing
- ✅ Git commits for each completed task

### Prerequisites

Before running Ralph loop:

1. **Godot installed and working**
   ```bash
   godot --version  # Verify
   ```

2. **Repository cloned**
   ```bash
   git clone https://github.com/dscherm/berserkr-godot.git
   cd berserkr-godot
   ```

3. **Prototype tested**
   ```bash
   godot --path .   # Run game, verify it works
   ```

4. **All documentation files in place**
   - PRD-Berserkr.md
   - plan-berserkr.md
   - PROMPT-berserkr.md
   - activity-berserkr.md

### Running Ralph Loop (If Available)

**Note:** Ralph loop requires a Bash script similar to the web/iOS versions. Create `ralph-berserkr.sh`:

```bash
#!/bin/bash

MAX_ITERATIONS=${1:-20}
ITERATION=0
PROMPT_FILE="PROMPT-berserkr.md"

echo "🚀 Starting Berserkr Ralph Loop"
echo "📋 Max iterations: $MAX_ITERATIONS"
echo ""

mkdir -p screenshots

while [ $ITERATION -lt $MAX_ITERATIONS ]; do
    ITERATION=$((ITERATION + 1))
    echo "🔄 Iteration $ITERATION of $MAX_ITERATIONS"

    PROMPT_CONTENT=$(<"$PROMPT_FILE")
    OUTPUT=$(claude "$PROMPT_CONTENT" 2>&1)

    echo "$OUTPUT"

    if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
        echo "✅ All tasks complete!"
        exit 0
    fi

    if echo "$OUTPUT" | grep -q "<promise>BLOCKED</promise>"; then
        echo "⚠️ Agent is blocked!"
        exit 1
    fi

    sleep 1
done

echo "⏰ Max iterations reached"
```

**Then run:**
```bash
chmod +x ralph-berserkr.sh
./ralph-berserkr.sh 20
```

### Monitoring Progress

```bash
# Watch activity log
tail -f activity-berserkr.md

# Check task status
grep '"passes"' plan-berserkr.md

# View screenshots
ls -lh screenshots/

# Check git commits
git log --oneline -10
```

---

## Manual Development Workflow

If not using Ralph loop, follow this workflow manually:

### Daily Development Routine

1. **Review plan-berserkr.md**
   - Find next task where `passes: false`

2. **Open Godot project**
   ```bash
   cd berserkr-godot
   godot --path . --editor
   ```

3. **Implement the task**
   - Follow steps in task description
   - Create/modify scenes and scripts
   - Test as you go (F5 to play)

4. **Test thoroughly**
   - Play the game (F5)
   - Verify feature works
   - Check FPS (should be 60+)
   - Take screenshot

5. **Update activity log**
   - Add entry to activity-berserkr.md
   - Document changes and testing

6. **Mark task complete**
   - Change `"passes": false` to `"passes": true` in plan-berserkr.md

7. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: implement [feature name]"
   git push
   ```

### Development Tips

**Use Godot's Built-in Tools:**
- **Debugger:** Set breakpoints, step through code
- **Profiler:** Check performance bottlenecks
- **Remote Debug:** Test on exported build

**Frequent Testing:**
- Test each small change (Ctrl+S auto-reloads scripts)
- Use print() statements liberally
- Enable collision shapes (Debug → Visible Collision Shapes)

**Version Control:**
- Commit often (after each task or small feature)
- Write clear commit messages
- Push to backup your work

---

## Release Checklist

### Pre-Release (8-10 months from now)

**Game Complete:**
- [ ] All 60 tasks in plan-berserkr.md completed
- [ ] All 5 bosses implemented and balanced
- [ ] 5+ levels designed and playable
- [ ] Quest system with 30+ quests
- [ ] Save/load working perfectly
- [ ] Audio fully integrated

**Quality Assurance:**
- [ ] No game-breaking bugs
- [ ] Performance: 60fps on GTX 1060 equivalent
- [ ] Memory usage < 2GB
- [ ] All UI screens functional
- [ ] Controller fully supported

**Content:**
- [ ] All placeholder art replaced
- [ ] All dialogue written
- [ ] All sound effects implemented
- [ ] Music tracks complete (10-15 tracks)

### Steam Release

**Steamworks Setup:**
- [ ] Steam Partner account created ($100 fee)
- [ ] App ID assigned
- [ ] Store page created
- [ ] GodotSteam plugin integrated
- [ ] Achievements implemented (20-30)
- [ ] Steam Cloud Saves working

**Store Assets:**
- [ ] App icon (512x512)
- [ ] Capsule images (all sizes)
- [ ] 10 screenshots (1920x1080)
- [ ] Trailer video (1-2 minutes)
- [ ] Store description written
- [ ] Tags selected

**Build:**
- [ ] Windows build tested
- [ ] Linux build tested
- [ ] Build uploaded to Steamworks
- [ ] Depot configured
- [ ] Release date set

### itch.io Release

**Page Setup:**
- [ ] itch.io account created
- [ ] Game page created
- [ ] Cover image uploaded
- [ ] Screenshots uploaded
- [ ] Description written

**Builds:**
- [ ] Windows .zip build
- [ ] Linux .zip build
- [ ] Builds tested on fresh PCs
- [ ] Builds uploaded

**Pricing:**
- [ ] Price set ($9.99 - $19.99 recommended)
- [ ] Or pay-what-you-want with minimum

### Marketing

**Pre-Launch (3-6 months before):**
- [ ] Twitter/X account created
- [ ] Discord server created
- [ ] Weekly devlog posts
- [ ] GIFs shared on social media
- [ ] Steam page live (wishlist farming)

**Launch:**
- [ ] Press kit created
- [ ] Keys sent to reviewers/streamers (50-100 keys)
- [ ] Launch trailer published
- [ ] Reddit posts (r/IndieGaming, r/godot)
- [ ] Announcement on Discord/Twitter

---

## Budget & Timeline

### Budget Estimate

**Development Costs:**
- Asset packs (3D models, textures): $200-500
- Music (original or licensed): $300-800
- Sound effects library: $100-200
- Voice acting (optional): $500-1,000
- Marketing (ads, streamer keys): $200-500
- **Subtotal:** $1,300-$3,000

**Release Costs:**
- Steam Partner fee: $100 (one-time)
- itch.io: $0 (free)
- **Subtotal:** $100

**Total Budget:** $1,400-$3,100

### Revenue Projections

**Conservative Estimate:**
- Steam: 500 sales @ $14.99 = $7,495
- Steam cut (30%): -$2,248
- itch.io: 100 sales @ $9.99 = $999
- itch.io cut (10%): -$100
- **Net Revenue:** ~$6,146

**Optimistic Estimate:**
- Steam: 2,500 sales @ $14.99 = $37,475
- Steam cut (30%): -$11,242
- itch.io: 500 sales @ $9.99 = $4,995
- itch.io cut (10%): -$500
- **Net Revenue:** ~$30,728

**ROI:** Break even at ~200-300 sales

### Timeline

**From Prototype to Release:**

| Phase | Duration | Tasks |
|-------|----------|-------|
| **1-3: Core Systems** | 2 months | Combat, RPG, Inventory |
| **4-5: Content** | 3 months | Quests, Levels |
| **6-7: Systems** | 1 month | Bosses, Save/Load |
| **8-9: Polish** | 1 month | Audio, VFX |
| **10-11: Optimization** | 1 month | UI, Performance |
| **12: Testing** | 2 weeks | QA, Bug fixing |
| **13-14: Release** | 2 weeks | Steam, Marketing |

**Total: 8-10 months** (part-time, 15-20 hours/week)
**Or: 4-5 months** (full-time, 40 hours/week)

---

## Resources

### Godot Learning

**Official Docs:**
- Godot Documentation: https://docs.godotengine.org/
- Your First 3D Game: https://docs.godotengine.org/en/stable/getting_started/first_3d_game/
- GDScript Reference: https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/

**Tutorials:**
- Brackeys (Godot 4): https://www.youtube.com/@Brackeys
- GDQuest: https://www.gdquest.com/
- HeartBeast: https://www.youtube.com/@uheartbeast

**Community:**
- Godot Discord: https://discord.gg/4JBkykG
- Godot Forums: https://godotengine.org/community/
- r/godot: https://reddit.com/r/godot

### Game Development

**Game Design:**
- Game Maker's Toolkit: https://www.youtube.com/@GMTK
- GDC Talks: https://www.youtube.com/@Gdconf

**Art & Assets:**
- OpenGameArt: https://opengameart.org/
- itch.io Assets: https://itch.io/game-assets
- Kenney Assets: https://kenney.nl/

**Audio:**
- Freesound: https://freesound.org/
- Incompetech (Music): https://incompetech.com/
- Purple Planet Music: https://www.purple-planet.com/

### Release Platforms

**Steam:**
- Steamworks Documentation: https://partner.steamgames.com/doc/home
- Steamworks SDK: https://partner.steamgames.com/doc/sdk
- GodotSteam: https://github.com/Gramps/GodotSteam

**itch.io:**
- itch.io Docs: https://itch.io/docs/creators/
- Butler (upload tool): https://itch.io/docs/butler/

---

## FAQ

### Q: I have a playable prototype. What's next?

**A:** Follow the development plan systematically:
1. Start with Phase 1 (Combat Enhancement) - expand weapon variety
2. Then Phase 2 (RPG Systems) - add stats and leveling
3. Continue through Phases 3-14 in order

The plan is designed to build on existing systems progressively.

### Q: Can I use Ralph loop for Godot development?

**A:** Yes! The Ralph loop can work for Godot development. However, you'll need to:
1. Have Godot installed and accessible via command line
2. Create the ralph-berserkr.sh script (template provided above)
3. Ensure the agent can run `godot --path .` to test features
4. Verify screenshots can be captured

The autonomous agent will open Godot, make changes, run the game to test, take screenshots, and commit.

### Q: How long will this take?

**A:** Timeline depends on your availability:
- **Part-time (15-20 hrs/week):** 8-10 months
- **Full-time (40 hrs/week):** 4-5 months
- **Occasional (5-10 hrs/week):** 12-18 months

The plan has 60 tasks. Some are quick (1-2 hours), others complex (10-20 hours).

### Q: How much will it cost?

**A:** Minimal if you do everything yourself:
- **Required:** $100 (Steam Partner fee)
- **Optional:** $1,300-$3,000 (assets, music, marketing)
- **Total:** $1,400-$3,100

You can reduce costs by:
- Using free asset packs
- Creating your own music/sfx
- Doing organic marketing (no ads)

### Q: What if I get stuck on a task?

**A:** Several options:
1. **Ask Claude Code for help** (describe the issue)
2. **Godot Discord/Forums** (very active community)
3. **YouTube tutorials** for specific features
4. **Mark task as blocked** and move to next task, return later

The plan allows flexibility - you don't have to do tasks in strict order (except dependencies).

### Q: Do I need to know GDScript?

**A:** Basic knowledge helps, but you'll learn as you go:
- GDScript is Python-like (easy to learn)
- Godot docs are excellent
- Lots of tutorials available
- Claude can help write GDScript code

If you can read code and understand basic programming (variables, functions, loops), you're ready.

### Q: What about 3D models and textures?

**A:** Several approaches:
1. **Asset packs** (cheap, $5-20 per pack)
2. **Free assets** (OpenGameArt, Kenney, itch.io)
3. **Learn Blender** (free, powerful, learning curve)
4. **Commission artists** ($50-200 per model)

Start with free/cheap assets, upgrade later if game is successful.

### Q: Should I release on Steam or itch.io first?

**A:** Release on **both simultaneously**:
- Steam has larger audience but 30% cut
- itch.io has smaller audience but 10% cut
- Cross-promote between platforms
- Use itch.io for beta testing before Steam launch

### Q: How do I know when the game is "done"?

**A:** Game is done when:
- All 60 tasks completed
- 5+ playable levels
- 5 boss battles
- Combat feels satisfying
- No game-breaking bugs
- 60fps performance
- 2-3 hour playtime minimum
- Steam reviewers/playtesters approve

Don't wait for perfection. Ship when it's "good enough" and patch/update later.

---

## Summary

**You Have:**
- ✅ Complete PRD and development plan
- ✅ 60 tasks organized into 14 phases
- ✅ Godot-specific Ralph loop setup
- ✅ Working prototype to build on

**You Need:**
- Godot 4.2+ installed
- berserkr-godot repository cloned
- 8-10 months development time
- $1,400-$3,100 budget

**Next Steps:**
1. Install Godot
2. Clone repository
3. Test prototype
4. Start Phase 1 tasks
5. Use Ralph loop (optional) or develop manually
6. Follow plan systematically
7. Release on Steam + itch.io in 8-10 months

**You're ready to build Berserkr!** ⚔️

---

*Created: 2026-02-17*
*Last Updated: 2026-02-17*
*Questions? Check the FAQ above or ask Claude Code for help.*
