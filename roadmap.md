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
