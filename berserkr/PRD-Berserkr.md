# Product Requirements Document
# Berserkr - 3D Action RPG

**Version:** 1.0
**Last Updated:** 2026-02-17
**Status:** Active Development - Playable Prototype
**Project Lead:** Scherm
**Platform:** PC (Steam, itch.io)
**Technical Stack:** Godot Engine 4.x, GDScript
**Genre:** 3D Action RPG

---

## Executive Summary

Berserkr is a Norse-themed 3D action RPG built in Godot Engine. The game features visceral melee combat, RPG progression systems, and exploration. Currently in playable prototype stage with working combat, inventory, and dialogue systems. The goal is to polish and expand these systems for commercial release on Steam and itch.io.

**Repository:** https://github.com/dscherm/berserkr-godot
**Target Release:** Q3-Q4 2026

---

## Project Vision

### Core Pillars

1. **Visceral Combat:** Satisfying melee combat with weight and impact
2. **Character Progression:** RPG stats, skills, and equipment customization
3. **Exploration:** Interconnected world with secrets and lore
4. **Norse Atmosphere:** Gritty, authentic Norse mythology aesthetic

### Unique Selling Points

- **Physics-based combat** with ragdoll enemies and environmental destruction
- **Skill tree system** inspired by Norse runes and mythology
- **Dynamic weather** affecting gameplay (fog limits vision, rain affects fire)
- **Boss battles** with unique mechanics and patterns
- **Lore-rich world** with environmental storytelling

---

## Current State (Prototype Analysis)

### ✅ Working Features

**Combat System:**
- Melee attacks (light, heavy, combo)
- Dodge/roll mechanics
- Enemy AI (basic patrol, chase, attack)
- Damage calculation
- Hit reactions and knockback

**Inventory System:**
- Item pickups
- Equipment slots (weapon, armor, accessories)
- Item database/definitions
- Basic UI for inventory management

**Dialogue System:**
- NPC interactions
- Conversation trees
- Quest dialogue triggers
- Text display and progression

### 🔲 Needs Development

- **Level design** beyond prototype areas
- **Enemy variety** (currently limited enemy types)
- **Boss encounters** (none implemented yet)
- **Save/load system**
- **Audio** (music, sound effects, voice acting)
- **Visual polish** (VFX, shaders, post-processing)
- **UI/UX refinement** for release quality
- **Performance optimization**
- **Steam integration** (achievements, cloud saves)
- **Controller support** (full gamepad mapping)
- **Settings menu** (graphics, audio, controls)
- **Tutorial/onboarding** for new players

---

## Target Audience

### Primary Persona: Core Gamer Colin
**Demographics:** 25-40, experienced with action RPGs
**Favorites:** Dark Souls, God of War, Elden Ring, Hades
**Motivation:** Challenging combat, satisfying progression
**Pain Point:** Tired of clunky indie combat systems
**Use Case:** "I want a challenging action RPG with tight controls and meaningful upgrades"

### Secondary Persona: Norse Enthusiast Freya
**Demographics:** 22-35, interested in mythology and history
**Favorites:** Hellblade, Assassin's Creed Valhalla, God of War
**Motivation:** Authentic Norse atmosphere, lore discovery
**Pain Point:** Most Norse games are historically inaccurate or tropey
**Use Case:** "I want to immerse myself in a well-researched Norse world"

### Tertiary Persona: Indie Supporter Indie
**Demographics:** 20-45, follows indie game releases
**Favorites:** Hades, Tunic, Death's Door, Hollow Knight
**Motivation:** Supporting small developers, unique experiences
**Pain Point:** Too many unfinished early access games
**Use Case:** "I want a polished, complete indie game worth my money"

---

## Core Features (Detailed)

### Feature 1: Enhanced Combat System
**Priority:** P0 (Critical)
**Status:** 🔄 Prototype → Production

**Current State:**
- ✅ Basic melee attacks working
- ✅ Dodge/roll implemented
- ✅ Simple enemy AI

**Enhancements Needed:**

**Attack System:**
- [ ] Weapon variety (axe, sword, spear, hammer)
- [ ] Weapon-specific movesets and combos
- [ ] Charged heavy attacks
- [ ] Aerial attacks (jump + attack)
- [ ] Backstab/critical hit system
- [ ] Parry/riposte mechanic
- [ ] Weapon durability (optional)

**Combat Feel:**
- [ ] Screen shake on impacts
- [ ] Hitstop (frame freeze) on successful hits
- [ ] Blood/impact VFX
- [ ] Sound design (weapon whoosh, impact, grunt)
- [ ] Camera zoom on critical hits
- [ ] Ragdoll physics on enemy death

**Enemy AI:**
- [ ] Different enemy archetypes (aggressive, defensive, ranged)
- [ ] Group combat tactics (flanking, surrounding)
- [ ] Attack telegraphing with visual cues
- [ ] Stagger system when taking damage
- [ ] Enemy audio (roars, death sounds)

**Acceptance Criteria:**
- [ ] 5+ weapon types with unique movesets
- [ ] Combat feels satisfying with impact feedback
- [ ] Enemies provide challenge without feeling unfair
- [ ] 60fps performance during combat
- [ ] All attacks have clear visual/audio feedback

---

### Feature 2: Character Progression & Stats
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**RPG Stats:**
- **Strength:** Melee damage, carry capacity
- **Endurance:** Health, stamina, equip load
- **Dexterity:** Attack speed, crit chance
- **Vitality:** Health regeneration, poison resistance
- **Willpower:** Magic damage (if magic added later)

**Leveling System:**
- [ ] Experience gained from kills and quests
- [ ] Level up screen with stat allocation
- [ ] Level scaling (1-50 range)
- [ ] Stat soft caps (diminishing returns after threshold)

**Skill Tree (Rune System):**
- [ ] 3 skill trees: Warrior, Hunter, Berserker
- [ ] 10-15 skills per tree
- [ ] Skill points earned per level (1-2 per level)
- [ ] Synergy bonuses for related skills
- [ ] Respec option (limited uses or cost)

**Equipment System:**
- [ ] Equipment slots: Head, Chest, Legs, Weapon, Shield, 2x Accessory
- [ ] Armor sets with set bonuses
- [ ] Equipment rarity tiers (Common, Rare, Epic, Legendary)
- [ ] Stat bonuses from equipment
- [ ] Visual changes when equipping armor

**Acceptance Criteria:**
- [ ] Player can level from 1 to 50
- [ ] Stats meaningfully affect gameplay
- [ ] Skill tree offers diverse build options
- [ ] Equipment progression feels rewarding
- [ ] UI clearly shows stat changes

---

### Feature 3: Expanded Inventory & Loot
**Priority:** P1 (High)
**Status:** 🔄 Prototype → Production

**Current State:**
- ✅ Basic item pickup
- ✅ Equipment slots

**Enhancements:**

**Inventory UI:**
- [ ] Grid-based inventory (Diablo-style) or list-based
- [ ] Item sorting (type, rarity, value)
- [ ] Item filtering and search
- [ ] Quick-use consumables (hotbar)
- [ ] Weight/capacity system (optional)
- [ ] Trash/sell functionality

**Loot System:**
- [ ] Randomized loot drops from enemies
- [ ] Chest and treasure placements
- [ ] Loot tables per enemy type
- [ ] Boss-specific unique loot
- [ ] Crafting materials (optional)

**Item Types:**
- [ ] Weapons (10+ varieties)
- [ ] Armor pieces (multiple sets)
- [ ] Consumables (health potions, buffs)
- [ ] Quest items
- [ ] Crafting materials (if crafting added)
- [ ] Currency (gold/silver)

**Item Tooltips:**
- [ ] Stat comparisons (equipped vs new item)
- [ ] Damage/armor ratings
- [ ] Special effects/bonuses
- [ ] Lore text (flavor text)

**Acceptance Criteria:**
- [ ] Inventory holds 50+ items
- [ ] Looting feels rewarding
- [ ] UI is clear and navigable with controller
- [ ] Item tooltips show all necessary info
- [ ] No inventory bugs or item loss

---

### Feature 4: Quest & Dialogue System Enhancement
**Priority:** P1 (High)
**Status:** 🔄 Prototype → Production

**Current State:**
- ✅ Basic NPC dialogue
- ✅ Conversation trees

**Enhancements:**

**Quest System:**
- [ ] Quest log UI (active, completed, failed)
- [ ] Quest tracking (objectives, progress)
- [ ] Quest markers on map/compass
- [ ] Main questline (10-15 quests)
- [ ] Side quests (20-30 optional quests)
- [ ] Quest rewards (XP, gold, items)
- [ ] Branching quest outcomes
- [ ] Quest givers and turn-in NPCs

**Dialogue Improvements:**
- [ ] Portrait art for NPCs
- [ ] Dialogue choices affecting outcomes
- [ ] Reputation system (optional)
- [ ] Voice acting (optional, post-launch)
- [ ] Subtitle support
- [ ] Dialogue history log

**Acceptance Criteria:**
- [ ] 10+ main quests with storyline
- [ ] 20+ side quests for exploration
- [ ] Quest log is clear and organized
- [ ] Dialogue is well-written and lore-rich
- [ ] Choices have visible consequences

---

### Feature 5: World & Level Design
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**Hub Area (Starting Village):**
- [ ] Safe zone with NPCs
- [ ] Shops (blacksmith, merchant, alchemist)
- [ ] Quest givers
- [ ] Training area
- [ ] Fast travel point

**Exploration Zones (5-7 Areas):**
- [ ] Forest (starting area, low-level enemies)
- [ ] Mountain Pass (medium difficulty, verticality)
- [ ] Frozen Tundra (harsh environment, ice hazards)
- [ ] Ancient Ruins (dungeon-crawling, puzzles)
- [ ] Boss Arena (final confrontation)
- [ ] Optional: Caves, Beaches, Villages

**Level Design Principles:**
- [ ] Interconnected world (shortcuts unlock as progress)
- [ ] Environmental storytelling (visual lore)
- [ ] Hidden secrets and collectibles
- [ ] Verticality and 3D exploration
- [ ] Clear landmarks for navigation

**Environmental Hazards:**
- [ ] Pitfalls and cliffs
- [ ] Fire (campfires, braziers)
- [ ] Ice patches (slippery movement)
- [ ] Poison gas/swamps
- [ ] Collapsing floors

**Acceptance Criteria:**
- [ ] 5+ distinct areas with unique aesthetics
- [ ] World feels cohesive and interconnected
- [ ] Exploration is rewarding with secrets
- [ ] Performance: 60fps in all areas
- [ ] No invisible walls or stuck points

---

### Feature 6: Boss Battles
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**Boss Design Philosophy:**
- Unique mechanics per boss
- Multi-phase battles
- Telegraphed attacks players can learn
- Environmental interaction opportunities
- Epic music and presentation

**Planned Bosses (5 minimum):**

1. **Draugr Chieftain** (Tutorial boss)
   - Phase 1: Basic sword attacks
   - Phase 2: Summons skeletons
   - Teaches: Dodging, pattern recognition

2. **Forest Guardian** (Mid-game)
   - Phase 1: Melee strikes
   - Phase 2: Root attacks from ground
   - Teaches: Positioning, environmental awareness

3. **Frost Jotunn** (Late-game)
   - Phase 1: Ice projectiles and slams
   - Phase 2: Freezing aura, faster attacks
   - Teaches: Resource management (stamina)

4. **Corrupted Valkyrie** (Optional)
   - Phase 1: Aerial attacks
   - Phase 2: Ground combos
   - Teaches: Timing, aggression vs patience

5. **[Final Boss - Spoiler]** (End-game)
   - Phase 1: Weapon attacks
   - Phase 2: Enhanced abilities
   - Phase 3: Desperation mode
   - Teaches: Everything learned

**Boss Rewards:**
- [ ] Unique weapon or armor
- [ ] Large XP boost
- [ ] Currency/materials
- [ ] Story progression

**Acceptance Criteria:**
- [ ] 5 unique boss fights
- [ ] Each boss takes 2-5 minutes on first attempt
- [ ] Clear visual/audio telegraphs
- [ ] Bosses feel epic and challenging
- [ ] No unfair instant-kill moves

---

### Feature 7: Save/Load System
**Priority:** P0 (Critical)
**Status:** 🔲 Not Started

**Save Data:**
- [ ] Player position and stats
- [ ] Inventory and equipment
- [ ] Quest progress
- [ ] World state (killed enemies, opened chests)
- [ ] Settings/preferences
- [ ] Playtime tracking

**Save Mechanics:**
- [ ] Manual save at campfires/checkpoints
- [ ] Autosave on area transitions
- [ ] Multiple save slots (3-5 slots)
- [ ] Save file metadata (character name, level, playtime, location)

**Load System:**
- [ ] Load from main menu
- [ ] Continue (last save)
- [ ] Delete save option
- [ ] Corrupted save detection

**Cloud Saves (Steam):**
- [ ] Steamworks integration
- [ ] Auto-upload on save
- [ ] Conflict resolution (local vs cloud)

**Acceptance Criteria:**
- [ ] Saves work 100% reliably
- [ ] No data loss or corruption
- [ ] Fast save/load times (< 2 seconds)
- [ ] Steam Cloud Saves functional
- [ ] Manual and auto-save options

---

### Feature 8: Audio & Music
**Priority:** P1 (High)
**Status:** 🔲 Not Started

**Music:**
- [ ] Main theme (menu music)
- [ ] Exploration music (ambient, 2-3 tracks)
- [ ] Combat music (intense, dynamic)
- [ ] Boss music (unique per boss)
- [ ] Victory/defeat stings
- [ ] Total: 10-15 music tracks

**Sound Effects:**
- [ ] Weapon sounds (swing, impact, sheath)
- [ ] Footsteps (different surfaces)
- [ ] Enemy sounds (roar, attack, death)
- [ ] UI sounds (menu navigation, item pickup)
- [ ] Environmental ambience (wind, fire, water)
- [ ] Magic/special ability sounds

**Voice Acting (Optional):**
- [ ] Key NPCs (shop keepers, quest givers)
- [ ] Player grunts and shouts
- [ ] Boss taunts

**Audio Settings:**
- [ ] Master volume
- [ ] Music volume
- [ ] SFX volume
- [ ] Voice volume (if voice acting)
- [ ] Mute option

**Acceptance Criteria:**
- [ ] All music tracks are original or licensed
- [ ] Sound effects feel punchy and satisfying
- [ ] Audio ducking during dialogue
- [ ] No audio clipping or distortion
- [ ] Audio settings work correctly

---

### Feature 9: Visual Polish & VFX
**Priority:** P1 (High)
**Status:** 🔲 Not Started

**Particle Effects:**
- [ ] Blood splatter on hits
- [ ] Weapon trails
- [ ] Magic effects (if magic added)
- [ ] Environmental effects (fire, smoke, rain)
- [ ] Dust clouds on impacts
- [ ] Level-up effect

**Shaders & Materials:**
- [ ] PBR materials for realistic look
- [ ] Rim lighting on characters
- [ ] Glow effects on magical items
- [ ] Water shader (lakes, rivers)
- [ ] Ice shader (frozen areas)

**Post-Processing:**
- [ ] Color grading (moody, desaturated for Norse feel)
- [ ] Depth of field (optional)
- [ ] Motion blur (subtle, optional in settings)
- [ ] Bloom (for magical effects)
- [ ] Vignette

**UI Polish:**
- [ ] Animated transitions
- [ ] Hover effects
- [ ] Icon design
- [ ] Custom fonts
- [ ] Health/stamina bar designs

**Acceptance Criteria:**
- [ ] Game looks visually cohesive
- [ ] VFX enhance gameplay without obscuring vision
- [ ] Post-processing can be toggled in settings
- [ ] 60fps maintained with all effects
- [ ] No flickering or visual glitches

---

### Feature 10: Settings & Accessibility
**Priority:** P1 (High)
**Status:** 🔲 Not Started

**Graphics Settings:**
- [ ] Resolution (fullscreen, windowed, borderless)
- [ ] Quality presets (Low, Medium, High, Ultra)
- [ ] VSync toggle
- [ ] FPS cap (30, 60, 120, unlimited)
- [ ] Shadow quality
- [ ] Texture quality
- [ ] Anti-aliasing
- [ ] Post-processing toggle

**Audio Settings:**
- [ ] Volume sliders (master, music, SFX, voice)
- [ ] Mute option
- [ ] Audio device selection

**Controls:**
- [ ] Keyboard/mouse remapping
- [ ] Controller remapping (Xbox, PlayStation, generic)
- [ ] Sensitivity sliders (camera, aim)
- [ ] Invert Y-axis option
- [ ] Controller vibration toggle

**Accessibility:**
- [ ] Subtitles (size, background opacity)
- [ ] Colorblind modes
- [ ] Camera shake toggle
- [ ] Motion blur toggle
- [ ] HUD scaling
- [ ] Difficulty options (optional)

**Acceptance Criteria:**
- [ ] All settings save and persist
- [ ] Presets work correctly
- [ ] Controller fully supported
- [ ] Remapping works for all actions
- [ ] Accessibility options functional

---

## Technical Architecture

### Godot Project Structure

```
berserkr-godot/
├── project.godot                # Godot project file
├── export_presets.cfg          # Export settings for Steam/itch.io
├── addons/                     # Third-party plugins
│   └── steamworks/             # Steamworks SDK (optional)
├── assets/                     # All game assets
│   ├── models/                 # 3D models (.glb, .fbx)
│   │   ├── characters/
│   │   ├── weapons/
│   │   ├── environment/
│   │   └── props/
│   ├── textures/               # PBR textures
│   ├── audio/
│   │   ├── music/
│   │   ├── sfx/
│   │   └── voice/
│   ├── ui/                     # UI sprites and fonts
│   └── vfx/                    # Particle textures
├── scenes/                     # Godot scenes
│   ├── player/
│   │   ├── Player.tscn
│   │   └── PlayerController.gd
│   ├── enemies/
│   │   ├── Draugr.tscn
│   │   ├── Wolf.tscn
│   │   └── AI/
│   │       └── EnemyAI.gd
│   ├── bosses/
│   │   └── DraugrChieftain.tscn
│   ├── levels/
│   │   ├── Forest.tscn
│   │   ├── Village.tscn
│   │   └── Mountains.tscn
│   ├── ui/
│   │   ├── MainMenu.tscn
│   │   ├── HUD.tscn
│   │   ├── InventoryUI.tscn
│   │   └── DialogueBox.tscn
│   └── world/
│       └── World.tscn           # Main game scene
├── scripts/                    # Autoload singletons
│   ├── GameManager.gd          # Game state, save/load
│   ├── InventoryManager.gd     # Inventory system
│   ├── QuestManager.gd         # Quest tracking
│   ├── DialogueManager.gd      # Dialogue system
│   ├── AudioManager.gd         # Audio playback
│   └── InputManager.gd         # Input handling
├── data/                       # JSON/Resource files
│   ├── items.json              # Item database
│   ├── weapons.json            # Weapon stats
│   ├── enemies.json            # Enemy definitions
│   ├── quests.json             # Quest data
│   └── dialogue.json           # Dialogue trees
└── saves/                      # Save game files
    ├── slot1.save
    ├── slot2.save
    └── slot3.save
```

### Key Systems (GDScript)

**Player Controller:**
```gdscript
extends CharacterBody3D

@export var speed: float = 5.0
@export var jump_velocity: float = 4.5
@export var dodge_speed: float = 10.0

var health: int = 100
var stamina: int = 100
var is_dodging: bool = false
var combo_count: int = 0

func _physics_process(delta):
    handle_movement(delta)
    handle_combat(delta)
    handle_stamina(delta)

func handle_movement(delta):
    # WASD movement with camera-relative direction
    # Jump, dodge roll
    pass

func handle_combat(delta):
    # Light attack, heavy attack
    # Combo system
    # Parry/block
    pass
```

**Combat System:**
```gdscript
# CombatManager.gd (Autoload)
extends Node

signal damage_dealt(target, amount, type)
signal enemy_killed(enemy)

func deal_damage(attacker, target, base_damage, damage_type):
    var final_damage = calculate_damage(attacker, target, base_damage)
    target.take_damage(final_damage)
    emit_signal("damage_dealt", target, final_damage, damage_type)

func calculate_damage(attacker, target, base_damage):
    # Factor in stats, resistances, critical hits
    var damage = base_damage
    damage *= attacker.strength / 10.0
    damage -= target.armor / 5.0
    return max(1, damage)  # Minimum 1 damage
```

**Save System:**
```gdscript
# GameManager.gd (Autoload)
extends Node

const SAVE_PATH = "user://saves/"

func save_game(slot: int):
    var save_data = {
        "player": {
            "position": player.global_position,
            "stats": player.stats,
            "inventory": InventoryManager.get_save_data(),
            "equipment": player.equipment
        },
        "world": {
            "quests": QuestManager.get_save_data(),
            "killed_enemies": world_state.killed_enemies,
            "opened_chests": world_state.opened_chests
        },
        "meta": {
            "timestamp": Time.get_unix_time_from_system(),
            "playtime": playtime_seconds,
            "level": player.level
        }
    }

    var file = FileAccess.open(SAVE_PATH + "slot%d.save" % slot, FileAccess.WRITE)
    file.store_var(save_data)
    file.close()

func load_game(slot: int):
    var file = FileAccess.open(SAVE_PATH + "slot%d.save" % slot, FileAccess.READ)
    if not file:
        return false

    var save_data = file.get_var()
    file.close()

    # Restore player state
    player.global_position = save_data.player.position
    player.stats = save_data.player.stats
    # ... restore other data

    return true
```

---

## Release Requirements

### Steam Release Checklist

**Steamworks Integration:**
- [ ] Steam SDK integrated (achievements, cloud saves, stats)
- [ ] App ID assigned from Steam Partner
- [ ] Store page assets (capsule images, screenshots, trailer)
- [ ] Pricing set ($14.99-$24.99 recommended)
- [ ] Release date set

**Store Page Requirements:**
- [ ] 10 screenshots (gameplay, UI, bosses)
- [ ] Trailer video (1-2 minutes)
- [ ] Game description (short and long)
- [ ] Feature list
- [ ] System requirements (min and recommended)
- [ ] Tags (Action RPG, Dark Fantasy, Souls-like, etc.)

**Achievements:**
- [ ] 20-30 Steam achievements
- [ ] Achievement icons (64x64)
- [ ] Progression achievements (beat bosses, reach levels)
- [ ] Challenge achievements (no damage runs, speedrun)
- [ ] Collectible achievements (find all secrets)

**Steam Cloud:**
- [ ] Save files sync to Steam Cloud
- [ ] Settings sync

---

### itch.io Release Checklist

**Page Setup:**
- [ ] Game title and subtitle
- [ ] Cover image (630x500)
- [ ] Screenshots (5-10)
- [ ] Gameplay GIF/video
- [ ] Description with formatting
- [ ] Tags and genre

**Pricing:**
- [ ] Free or paid ($9.99-$14.99 recommended)
- [ ] Optional: Pay-what-you-want model
- [ ] Optional: Bundles or sales

**Downloads:**
- [ ] Windows build (.zip with .exe)
- [ ] Linux build (.zip with executable)
- [ ] Mac build (if possible, .dmg)

**Community:**
- [ ] Devlog posts during development
- [ ] Update announcements
- [ ] Community forum enabled

---

## Marketing & Launch Strategy

### Pre-Launch (3-6 months before release)

- [ ] Create social media accounts (Twitter, Discord)
- [ ] Post weekly devlog updates
- [ ] Create Steam page (wishlist farming)
- [ ] Create itch.io page
- [ ] Reach out to indie game YouTubers/streamers
- [ ] Participate in game dev communities (r/gamedev, IndieDB)

### Launch Window

- [ ] Press kit (screenshots, trailer, description, logos)
- [ ] Send keys to reviewers and streamers
- [ ] Launch trailer release
- [ ] Coordinate Steam and itch.io launch
- [ ] Post on Reddit (r/IndieGaming, r/gaming)
- [ ] Discord server for community

### Post-Launch

- [ ] Monitor reviews and feedback
- [ ] Patch bugs within first week
- [ ] Content updates (DLC, patches)
- [ ] Seasonal sales

---

## Success Metrics

### Launch Goals (First Month)

- [ ] 500+ units sold on Steam
- [ ] 100+ downloads on itch.io
- [ ] 75%+ positive reviews on Steam
- [ ] 1,000+ wishlists before launch

### 6-Month Goals

- [ ] 2,500+ units sold (break even on $5k budget)
- [ ] 80%+ positive reviews
- [ ] Featured on at least one gaming blog/site
- [ ] Active Discord community (100+ members)

### 1-Year Goals

- [ ] 10,000+ units sold
- [ ] "Very Positive" on Steam (80%+)
- [ ] DLC or sequel in development

---

## Budget & Timeline

### Estimated Budget

**Development Costs:**
- [ ] Asset packs (models, textures): $200-500
- [ ] Music (original or licensed): $300-800
- [ ] Sound effects: $100-200
- [ ] Voice acting (optional): $500-1,000
- [ ] Marketing (ads, streamer keys): $200-500
- **Total Dev Budget:** $1,300-$3,000

**Release Costs:**
- [ ] Steam Partner fee: $100 (one-time, per game)
- [ ] itch.io fee: $0 (free to publish)
- **Total Release Cost:** $100

**Grand Total:** $1,400-$3,100

### Timeline (From Prototype to Release)

**Phase 1: Core Systems (2-3 months)**
- Finalize combat system
- Character progression
- Save/load
- Basic level design

**Phase 2: Content Creation (3-4 months)**
- 5+ levels/areas
- 5 boss battles
- 30+ quests
- Enemy variety

**Phase 3: Polish (1-2 months)**
- Audio integration
- Visual effects
- UI/UX refinement
- Bug fixing

**Phase 4: Testing & QA (1 month)**
- Playtesting
- Balance adjustments
- Performance optimization
- Steam integration

**Phase 5: Release Prep (2 weeks)**
- Marketing materials
- Store pages
- Press outreach

**Total Timeline: 7-10 months** from current prototype to commercial release

---

## Risks & Mitigation

### Technical Risks

**Risk: Performance issues in large levels**
- Mitigation: Occlusion culling, LOD, texture streaming
- Likelihood: Medium
- Impact: High

**Risk: Save system corruption**
- Mitigation: Robust error handling, backup saves
- Likelihood: Low
- Impact: Critical

**Risk: Combat feels unresponsive**
- Mitigation: Extensive playtesting, iteration
- Likelihood: Medium
- Impact: High

### Business Risks

**Risk: Low sales due to competition**
- Mitigation: Unique Norse theme, quality polish, marketing
- Likelihood: High
- Impact: High

**Risk: Negative reviews on launch**
- Mitigation: Thorough QA, day-one patch readiness
- Likelihood: Medium
- Impact: High

**Risk: Scope creep delays release**
- Mitigation: Fixed feature list, strict timeline
- Likelihood: High
- Impact: Medium

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-17 | Scherm | Initial PRD for Berserkr Godot project |

---

**Approval Status:** 🔲 Pending Review
**Next Steps:** Create development plan, begin Ralph loop
**Contact:** GitHub @dscherm
