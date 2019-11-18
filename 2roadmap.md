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
