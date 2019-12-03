```
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
```
