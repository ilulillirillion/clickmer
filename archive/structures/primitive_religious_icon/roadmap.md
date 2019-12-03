```
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
```
