# Ideas

## Pets

Have some sort of a pet that you build relationships with somehow.

## Gameplay

### PC

The playable character (PC) is represented by a disembodied force.
The PC can create avatars from existing living beings or from scratch.

# Concepts

## Death and injury

HP hitting zero should not be the most common way to die, death should be
caused by more specific triggers related to damage sustained, and HP should be
used as a complimentary system.

# Game world

## Map

### x axis
Status: Implemented
Description: Cartesian abscissa axis for lateral tracking.

### y axis
Status: Implemented
Description: Cartesian ordinate axis for longitudinal tracking.

### z axis
Status: Todo
Description: Cartesian applicate axis for vertical tracing.

### w axis
Status: Idea
Description: Custom Cartesian axis for tracking entities that move outside of normally accessible spatial axis. Used as an alternative to "ephemeral" state tagging, entities that phase in and out will still occupy x, y and z coordinate values but will be offset by a w coordinate, indicating their disassociation from conventional tangibility.

## Generation

Generate a chunk of land for each player that is theirs. The player can buy more land where none has been generated, on the "frontier", or from other players. Can take from players by force?

Allow players supernatural sorts of influence over their realms?

## Systems

### Energy

Use energy to do actions, refill with food?

## Objects

### Trees

---

# attributes

- vitality
- intelligence

# skills

- fishing
- agriculture
- charisma
- lockpicking
- mercantilism
- bartering

# statistics

## Maximum Health
### Formula
vitality * 10

## Maximum Stamina
### Formula
vitality * 10

## Maximum Mana
### Formula
intelligence * 10

## Maximum Hunger
### Formula
vitality

## Charm
### Description
Represents how persuasive a character is.
### Formula
5 parts charisma, 1 part intelligence

## Effective Bartering
### Description
Represents how effective someone actually is at bartering. Lower prices.
### Formula
5 parts bartering, 3 parts mercantalism, 1 part charm

---

# Object structure

## Client Side

### Classes

#### Thing
##### Description
Base class that most objects should extend.
##### Status
Implemented

### Mixins

#### Tangible 
##### Description
Objects that can be interacted with.
Maybe not needed, could represent ephemeral objects with a hidden axis?
##### Status
Archived

#### Spatial 
##### Description
Extends objects to occupy locations in space.
##### Status
Implemented

#### CanWinstonLog 
##### Description
Extends objects with an interface for logging to a Winston logger instance.

#### CanConsoleLog 
##### Description
Extends objects with an interface to log to the console.
##### Status
Implemented

#### ServerManaged 
##### Description
Extends objects with an update function for server overwritability.
##### Status
Implemented
##### Notes
Considering reducing this, since this really just provides an update method
for properties to be overriden, it is just managed and has nothing to do with
a server in theory.

#### Vagile 
##### Description
Extends objects so that they can move on their own.
##### Status
Implemented

#### Drawable 
##### Description
Extends objects so they can be drawn by map objects.
##### Dependencies
- Spatial Mixin
##### Status
Implemented

#### KeyboardControllable
##### Description
##### Dependencies
- Movable
##### Status
Implemented


---

- Follow functional paradigm where possible within the OOP structure
  https://medium.com/front-end-weekly/8-steps-to-turn-imperative-javascript-class-to-a-functional-declarative-code-862964faf46c

---

- customize console log []
    - enable/disable log statements with switch []
    - extensible wrapper  []

- adopt class composition over inheritance []

- debug view  []

- component mirroring (render elements twice) [X]

- c++ module support  []
  https://medium.com/@atulanand94/beginners-guide-to-writing-nodejs-addons-using-c-and-n-api-node-addon-api-9b3b718a9a7f

- python module support []
  https://stackoverflow.com/questions/15055630/using-python-modules-in-node-js

---

for v 0.01: Want working player registration and loading

- grab username at login and use it to load a player.
- io.on('connection) should be handled outside of the game object.
- mysql curry functions have try catch pattern, use monad
- log filename and line number in winston


---


- Add classgroups, to avoid redundant imports. For example, instead of import ActorStatistic, ActorSkill, and ActorCharacteristics, roll them up somehow into one object because they inter-import each other already.

- Add a decorator to time functions for performance metrics.
  - wrote the decorator, but looks like es7 does not currently support them.

- Add tick per second graphic

- Adopt MVC model
  - code switch for model which will allow it to run locally

----



primary attributes:
  vitality
    - increases in health statistic
    - increases in disease resistance
  vigor:
    - increases in health statistic
    - increases in stamina statistic
    - increases in disease resistance
  resilience:
    - increases in health statistic
    - increases in stamina statistic
    - increases in disease resistance
  fortitude:
    - increases in panic resistance
    - increases in mind control resistance
  constitution:
    - increases in health statistic
    - increases in disease resistance
  resolve:
    - increases in panic resistance
    - increases in mind control resistance
    - increases in charm resistance
    - increases in lunacy resistance
  luck:
    - increases rate of wandering populants
  dexterity:
    - increases attack speed
    - increases attack accuracy
    - increases parry speed
    - increases parry accuracy
  precision:
  fitness:
    - tends to provide better benefits than all other skills until it's first soft caps
    - increases health statistic
    - increases disease resistance
    - increases poison resistance
    - increases stamina
    - increases toxin resistance
  age:
    - different effects based on species
  sex:
    - different effects based on species
  speed:
    - increases movement speed
    - increases attack speed
    - increases parry speed
  memory:
    - increases skill gain
    - decreases skill decay
    - increases skill limits
    - remember item effects for longer

  wisdom:
    - increases skill gain
  insight:
  lunacy:
  
---

skills:
  parry:
    - increases parry speed
    - increases parry accuracy


---

derived statistics:
  health:
    - how much health the actor has
  stamina:
    - how much stamina the actor has
  disease resistance:
    - how much the actor resists disease
  panic resistance:
    - how much the actor resists panic
  mind control resistance:
    - how much the actor resists mind control
  charm resistance:
  lunacy resistance:
  poison resistance:
  toxin resistance:
  movement speed:
  attack speed:
  parry speed:
  success rate:

---


stats:

  vitality:
    determines how much health the actor will have.

  insight:
    "see the world as it really is", shows hidden things. Generally positive although can have some negative consequences. In general, will make the learner more vulnerable to effects like lunacy.

  lunacy:
    A specific type of madness caused by the moon. Can have some beneficial effects but is largely detrimental, particularly at higher amounts.
    

---

Number text span class, which will format numbers with k for thousand to keep them small, and will have a tooltip showing the exact amount.

Fix css for populant details pane

Activity: observe the moon
  leads to discovering lunar cycles
  builds insight (to a cap)
  builds lunacy (to a cap)

lore:

  - moon presence: odd things occurring surrounding the lunar cycles. Multiple moons?
