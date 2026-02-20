# Ralph Loop Instructions - Berserkr Godot Development

You are an autonomous development agent working on Berserkr, a 3D action RPG built in Godot Engine.

## Context Files
@plan-berserkr.md - Development tasks with steps and pass/fail status
@activity-berserkr.md - Log of your recent development activity
@PRD-Berserkr.md - Complete product requirements document

## IMPORTANT: Development Environment

**Required:**
- Godot Engine 4.x (4.2+ recommended)
- Git
- Access to the berserkr-godot repository
- 3D modeling software (Blender) for asset creation (optional)
- Image editor for textures (GIMP, Photoshop, Krita)

**Project location:**
- Repository: https://github.com/dscherm/berserkr-godot
- Clone locally before starting

## Your Mission

Build Berserkr from playable prototype to commercial-ready game, one feature at a time.

## Operating Rules

### 1. One Task Per Iteration
- Read `activity-berserkr.md` to understand current state
- Find the next task in `plan-berserkr.md` where `passes: false`
- Complete ONLY that task in this iteration
- Do not work on multiple tasks simultaneously

### 2. Verification Requirements

**For code/feature changes:**
```bash
# Run Godot project
cd berserkr-godot
godot --path . --editor  # Open in editor
# Or run directly: godot --path .

# Test the feature in-game
# Use Godot's built-in debugger and profiler

# Take screenshot
# In Godot: use built-in screenshot tool (F12)
# Or external tool

# Verify performance
# Check FPS counter in Godot editor (Monitor tab)
# Should maintain 60fps during testing
```

**For GDScript changes:**
```bash
# Check for script errors
# Godot will show errors in Output tab

# Run scene to test
# Click Play Scene (F6) or Play (F5)

# Use print() statements for debugging
print("Player health: ", player.health)
```

**For 3D scenes:**
```bash
# Open scene in Godot editor
# Verify models load correctly
# Check collisions (enable Show Collision Shapes)
# Test lighting and materials
# Verify animations play correctly
```

### 3. Activity Logging
Update `activity-berserkr.md` with dated entry:

```markdown
## 2026-02-17 - Task: [Task Name]

**Goal:** [Brief description]

**Changes Made:**
- Created WeaponAxe.gd script
- Added axe attack animation
- Implemented damage multiplier (1.5x for axe)
- Added axe 3D model to player hand

**Verification:**
- Ran game in Godot editor
- Equipped axe, tested attack animation
- Verified damage calculation in console logs
- Screenshot: `screenshots/axe-equipped.png`

**Status:** ✅ Complete
```

### 4. Mark Task as Passing
Update `plan-berserkr.md`:
- Change `"passes": false` to `"passes": true`
- Maintain JSON formatting

### 5. Git Commit
```bash
cd berserkr-godot
git add .
git commit -m "feat: [brief description]

- Detailed change 1
- Detailed change 2

Tested in Godot 4.2, runs at 60fps"
```

### 6. Completion Signal
When ALL tasks have `passes: true`:
```
<promise>COMPLETE</promise>
```

## Godot-Specific Workflow

### Project Setup (If Starting Fresh)
```bash
# Clone repository
git clone https://github.com/dscherm/berserkr-godot.git
cd berserkr-godot

# Open in Godot
godot --path . --editor

# Or double-click project.godot file
```

### Common Godot Tasks

**Creating a new scene:**
```bash
# In Godot editor:
# Scene → New Scene
# Add nodes (e.g., CharacterBody3D for player)
# Attach script: Right-click node → Attach Script
# Save scene: Ctrl+S
```

**Creating a GDScript:**
```gdscript
extends CharacterBody3D

@export var speed: float = 5.0
@export var health: int = 100

func _ready():
    print("Player initialized")

func _physics_process(delta):
    handle_movement(delta)

func handle_movement(delta):
    var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_back")
    var direction = transform.basis * Vector3(input_dir.x, 0, input_dir.y)
    velocity = direction * speed
    move_and_slide()
```

**Testing gameplay:**
```bash
# Play current scene: F6
# Play main scene: F5
# Pause: F7
# Stop: F8

# Debug with print statements
print("Health: ", health)
print("Position: ", global_position)
```

### Asset Import

**3D Models:**
1. Export from Blender as .glb or .fbx
2. Place in `assets/models/` folder
3. Godot auto-imports on save
4. Drag into scene, adjust materials

**Textures:**
1. Create or source PBR textures (albedo, normal, roughness, metallic)
2. Place in `assets/textures/`
3. Apply to materials in Godot

**Audio:**
1. Place .wav or .ogg files in `assets/audio/`
2. Create AudioStreamPlayer node
3. Assign audio file to Stream property

## Verification Patterns

### Combat System Verification
```gdscript
# Test damage calculation
func test_weapon_damage():
    var axe_damage = calculate_damage("axe", player.strength)
    print("Axe damage: ", axe_damage)  # Should be base * 1.5
    assert(axe_damage > 0, "Damage should be positive")
```

**Manual testing:**
1. Run game (F5)
2. Equip weapon
3. Attack enemy
4. Check health bar decreases
5. Verify visual/audio feedback
6. Screenshot of successful hit

### Level Design Verification
```gdscript
# Check nav mesh
func test_navigation():
    var nav_region = get_node("NavigationRegion3D")
    print("Nav mesh valid: ", nav_region.navigation_mesh != null)
```

**Manual testing:**
1. Run game (F5)
2. Walk through entire level
3. Check for invisible walls
4. Verify no stuck points
5. Confirm enemies pathfind correctly
6. Screenshot of level layout

### Boss Battle Verification
```gdscript
# Test boss phases
func test_boss_phases():
    boss.health = boss.max_health * 0.6  # Trigger phase 2
    boss._on_health_changed()
    print("Boss phase: ", boss.current_phase)  # Should be 2
```

**Manual testing:**
1. Load boss scene (F6)
2. Damage boss to phase thresholds
3. Verify phase transitions
4. Check attack telegraphs
5. Test all attack patterns
6. Screenshot of boss in each phase

### Save/Load Verification
```gdscript
# Test save data integrity
func test_save_load():
    var test_data = {
        "player": {"health": 80, "level": 5},
        "inventory": ["Sword", "Potion"]
    }

    # Save
    var file = FileAccess.open("user://test.save", FileAccess.WRITE)
    file.store_var(test_data)
    file.close()

    # Load
    file = FileAccess.open("user://test.save", FileAccess.READ)
    var loaded = file.get_var()
    file.close()

    # Verify
    assert(loaded.player.health == 80, "Health should match")
    print("Save/Load test passed!")
```

**Manual testing:**
1. Play game, make progress
2. Save at campfire
3. Note position, stats, inventory
4. Quit and reload
5. Verify all data restored correctly
6. Test across different save slots

## Performance Testing

### FPS Monitoring
```gdscript
# Add to player or game manager
func _process(delta):
    var fps = Engine.get_frames_per_second()
    if fps < 55:
        push_warning("FPS dropped to %d" % fps)
```

**Using Godot Profiler:**
1. Run game in editor (F5)
2. Open Debugger → Profiler tab
3. Monitor frame time (should be <16.6ms for 60fps)
4. Identify bottlenecks (rendering, physics, scripts)
5. Screenshot profiler results

### Memory Monitoring
```gdscript
# Check memory usage
func log_memory():
    var mem = OS.get_static_memory_usage()
    print("Memory: ", mem / 1024 / 1024, " MB")
```

**Target:** <2GB RAM usage

## Common Godot Patterns

### Singleton/Autoload (GameManager)
```gdscript
# GameManager.gd (set as Autoload in Project Settings)
extends Node

var player_health: int = 100
var player_level: int = 1

signal health_changed(new_health)

func damage_player(amount: int):
    player_health -= amount
    emit_signal("health_changed", player_health)

# Access from anywhere:
# GameManager.damage_player(10)
```

### State Machine (Enemy AI)
```gdscript
enum State {IDLE, PATROL, CHASE, ATTACK}
var current_state = State.IDLE

func _physics_process(delta):
    match current_state:
        State.IDLE:
            handle_idle()
        State.PATROL:
            handle_patrol()
        State.CHASE:
            handle_chase()
        State.ATTACK:
            handle_attack()

func handle_chase():
    if player_distance < attack_range:
        current_state = State.ATTACK
    elif player_distance > detection_range:
        current_state = State.PATROL
```

### Resource-Based Data (Items)
```gdscript
# Item.gd (Resource script)
extends Resource
class_name Item

@export var item_name: String
@export var description: String
@export var icon: Texture2D
@export var value: int
@export var rarity: String  # "Common", "Rare", etc.

# Create items as .tres files in Godot editor
# Load: var sword = load("res://data/items/iron_sword.tres")
```

## Error Handling

### Script Errors
If script errors occur:
```bash
# Check Output tab in Godot
# Common errors:
# - "Invalid call. Nonexistent function" → Check function name spelling
# - "Invalid get index 'health' (on base: 'null')" → Node not found
# - "Parser Error: Expected ')'" → Syntax error

# Fix errors, save script (Ctrl+S)
# Godot auto-reloads
```

### Scene Issues
If scenes won't load:
```bash
# Check .tscn file in text editor
# Look for missing references
# Fix paths or re-create scene if corrupted
```

### Build Issues
If export fails:
```bash
# Project → Export
# Ensure export template installed (Download Templates button)
# Check export presets (Windows, Linux, etc.)
# Verify all resources included
```

## Steam Integration (Phase 13)

### Using GodotSteam
```bash
# Install GodotSteam addon
# Download from: https://github.com/Gramps/GodotSteam

# Place in addons/godotsteam/
# Enable in Project → Project Settings → Plugins

# Initialize Steam
Steam.steamInit()
if Steam.isSteamRunning():
    print("Steam initialized successfully")
```

**Achievement unlock:**
```gdscript
func unlock_achievement(achievement_name: String):
    if Steam.getAchievement(achievement_name)["achieved"] == false:
        Steam.setAchievement(achievement_name)
        Steam.storeStats()
        print("Achievement unlocked: ", achievement_name)
```

## Quality Standards

### Code Quality
- Follow GDScript style guide (PascalCase for classes, snake_case for functions)
- Use type hints: `var health: int = 100`
- Comment complex logic
- Extract magic numbers to constants
- Keep functions under 50 lines

### Performance
- Maintain 60fps on medium-end hardware (GTX 1060 equivalent)
- No memory leaks (use queue_free() instead of free())
- Use object pooling for frequently spawned objects
- Limit draw calls (batch meshes, merge materials)

### Game Feel
- All actions have visual feedback (particles, screen shake)
- All actions have audio feedback (sounds)
- Hitstop on impacts (0.1s frame freeze)
- Smooth camera movement (lerp positions)
- Responsive controls (< 100ms input lag)

## Testing Checklist (Per Task)

- [ ] Code runs without errors
- [ ] Feature works as intended
- [ ] No performance regression (still 60fps)
- [ ] Visual/audio feedback present
- [ ] No obvious bugs or edge cases
- [ ] Screenshot taken showing working feature
- [ ] Activity log updated
- [ ] Plan task marked complete
- [ ] Git commit with clear message

## Anti-Patterns (DON'T DO THIS)

❌ Working on multiple tasks at once
❌ Not testing in Godot before marking complete
❌ Hardcoding values (use @export for tweakable variables)
❌ Ignoring console warnings/errors
❌ Creating memory leaks (not freeing nodes)
❌ Using global variables instead of signals
❌ Not using version control (commit regularly!)
❌ Skipping performance checks

## Success Criteria

A task is complete when:
✅ All implementation steps done
✅ Feature tested in Godot (runs without errors)
✅ Performance acceptable (60fps maintained)
✅ Screenshot taken showing working feature
✅ Activity-berserkr.md updated with dated entry
✅ Plan-berserkr.md task marked `passes: true`
✅ Git commit created with clear message
✅ No console errors or warnings

## Remember

- **One task at a time**
- **Always test in Godot before marking complete**
- **Performance matters** (60fps minimum)
- **Visual and audio feedback for all actions**
- **Document in activity-berserkr.md**
- **Commit after each task**
- **Output `<promise>COMPLETE</promise>` when all tasks pass**

Good luck building Berserkr! ⚔️🎮
