# High Level Overview
MMO Idle game / RPG hybrid.

Home base is a pure idle game, when you venture out you can use the power of your base to help your character survive in the RPG.

Develop idle game first while making considerations for RPG to come.

# Technicial
- Read most object definitions from YAML
- Use a template system to handle meta blocks

# Ideas
- Each job itself should be able to be leveled up (as opposed to just the workers)
- Hold a modifier key to see more details, should work almost anywhere.
- Ability to ressurruct dead worshippers (or perform necromancy?)

- first available action "pipeline" should be similar to a traditional clicker tree

# PC
## Properties
### Power
- Multiplies most other abilities.
- Starts at 1.
### Influence
- Measures how influential the PC is on remote objects.
- Starts at 1.

## Abilities
### Gain power
Infinite-clicker which gains +1 to PC "power" on click.
### Focus Influence
Increases effects of influence while held down by a multiplier.

# Controls
## Structure Building
- Emulate Kittens Game layout.
- Add ability to queue constructions for when resource become available.

# Seasons
- Crops grow more slowly in Winter.
- Symbol/emblem for each seasons
Seasons:
```
- Spring
- Summer
- Fall
- Winter
```

# Resources
## Wood
## Lumber
## Karma
Earned for doing morally "good" things.


# Day/Night cycle

# Weather

# Premium Currency

# Population
## Properties
### Culture
### Faith
### Production

# World
## Ticks Epoch

# Skills
## Polearms
## Halberds
### Requisites
Polearms: 10

# UI
## Message Log

# Research
## Survivalism (I)
### Unlocks
#### Jobs
##### Forage
###### Description
###### Effects
+1 Timber
+1 Leaves
+1 Berries

# Prestige System
- Implement a dynamic list that will remind the player of things they should probably do in the current run before prestiging.
## Factors
- Time since last prestige (positive)
- PC Power rating

# Backwards Progress
- Should any form of backwards, or negative, progress be allowed?

# Resources
- Currency

# Currencies
## Seashells
Unlocked early on and used as the first currency system.
### Requirements
#### Research
- Hard currencies

## Prize/Chance System
Start with 2 prizes, with a greater chance of the "lower" prize. Add a new prize
to the pool, increasing odds of getting better prizes, when certain conditions
are met.

## Challenges
Lock some functionality and upgrades behind completing these?

## Achievements

## Audio

## Visuals

## Territory
- Determines how many structures you can build?
- Determines max population caps?
- use territory idle as inspiration
- ability to zoom in and out
- each territory has it's own "locale"
- territories can have local officers

## Locales
- Used to represent nearby things at a location
- contains items and entitites in the location

## Structures
- Use a tile system similar to territory idle to represent built structures?
  NO, moved this idea to territories system.
- If you lose your last tile, you are "driven from the lands" and start with a new tile.
## Cookie Shop
Unlocks a cookie-clicker like sub-game

## Vampirism
Random spawns have a very small chance of having vampiric, which is how it is
contracted.

## Officers
### Phase 1
#### Territorial
Leader
Follower
#### Kingdom-wide
### Phase 2
#### Territorial
Chief
Warlord
Follower
#### Kingdom-wide
### Phase 
#### Territorial
#### Kingdom-wide
King
(Prince)x


## Worshipper States
### Vampiric
Turned into a vampire.
### Zombified
Turned into a zombie.

## Items
- Sword
- Slingshot
- Bow
- Tower Shield
- Shield
- Mace
- Staff
- Dagger
- Dagger (off-hand)
- Kris
- Vanhati style blades



```
player_traits:
  identified_<item>: >-
    Player has possessed some amount of said <item> at some time.

religious_cave_painting:
  glossary:
    initial_color: >-
      This structure can be initially built with several different colors. This
      term represents the color that was initially used to build it.
  description: >-
    A crude symbol drawn on a the side of a stone done in hematite paint.
  inherent_upgrades: "crude_{{ initial_color }}_coloring"
  base values:
  formulae:
    efficiency: base * historicality
  upgrades:
    crude_red_coloring:
      unlock_requirements:
        - identified red ochre
      requirements:
        material:
          - item: red ochre
            quantity: 1
        build_time: 1 hour
      effects:
        characteristic_flags:
          - crude_red_coloring
    crude_yellow_coloring:
      unlock_requirements:
        - identified yellow ochre
      requirements:
        material:
          - item: yellow ochre
            quantity: 1
        build_time: 1 hour
      effects:
        characteristic_flags:
          - crude_yellow_coloring
    crude_purple_coloring:
      unlock_requirements:
        - identified purple ochre
      requirements:
        material:
          - item: purple ochre
            quantity: 1
        build_time: 1 hour
      effects:
        characteristic_flags:
          - crude_purple_coloring
    crude_brown_coloring:
      unlock_requirements:
        - identified brown ochre
      requirements:
        material:
          - item: brown ochre
            quantity: 1
        build_time: 1 hour
      effects:
        characteristic_flags:
          - crude_brown_coloring
  characteristics:
    crude_red_coloring:
      unlock_flags:
        - crude_red_coloring
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate
    crude_yellow_coloring:
      unlock_flags:
        - crude_yellow_coloring
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate
    crude_purple_coloring:
      unlock_flags:
        - crude_purple_coloring
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate
    crude_brown_coloring:
      unlock_flags:
        - crude_brown_coloring
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate
    multicolored_1:
      # Any two colors
      unlock_flags:
        - <any>_<any>_coloring
        - <any>_<any>_coloring
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate

primitive_religious_icon:
  base values:
  formulae:
    efficiency: base * historicality
  upgrades:
    crude_log_design:
      can_instantiate: true
      unlock_requirements:
      requirements:
        material:
          - item: wood logs
            quantity: 2
        expertise:
        build_time: 4 hours
      effects:
        characteristic_flags:
          - crude_aesthetic
  characteristics:
    crude_aesthetic:
      unlock_flags:
        - crude_aesthetic
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate

Idea: Seperate characteristic and components? Upright log is more of a component than a characteristic


totem_pole:
  upgrades:
    upright_wooden_log:
      instantiates: true
      requirements:
        material:
          - item: wood logs
            quantity: 1
        build_time: 2 hours
      effects:
        characteristic_flags:
          - upright_log
  characteristics:
    upright_log:
      unlock_flags:
        - upright_log
      effects:
        + 1 PC influence base
        + 1 PC max worshippers base
        + 0.1% PC influence modifier
        - 1% PC worshipper decay rate
      unlock_requirements:
        - identified brown ochre
      requirements:
        material:
          - item: brown ochre
            quantity: 1
        build_time: 1 hour
      effects:
        characteristic_flags:
          - crude_brown_coloring
        
  characteristics:

        

```
