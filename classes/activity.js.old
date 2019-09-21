class Activity {

  constructor(args={}) {
    console.debug(`Creating activity with arguments: <${args}>.`);
    this.name = 'activity';
    if (args.name) {
      this.name = args.name;
    };
    this.tooltip_text = 'tooltip_text';
    if (args.tooltip_text) {
      this.tooltip_text = args.tooltip_text;
    };

    this.sequences = {};
    if (args.sequences) {
      this.sequences = args.sequences;
    };

    this.element_base_id = this.name;

    this.createElement();
  };

  createElement() {

    // Create a DOM element to represent the activity.
    let activity_element = document.createElement('div');
    let activity_element_id = `${this.element_base_id}_pane`;
    activity_element.setAttribute('id', activity_element_id);
    activity_element.classList.add('activity_pane');


    // Create and attach a span to act as inner text.
    let activity_element_text_span = document.createElement('span');
    let activity_element_text_span_id = `${activity_element_id}_text_span`;
    activity_element_text_span.setAttribute(
        'id', activity_element_text_span_id);
    activity_element_text_span.classList.add(
        `${activity_element_id}_title_text`);
    activity_element_text_span.innerHTML = `${this.name}`;
    activity_element.appendChild(activity_element_text_span);


    // Create a tooltip text span
    let activity_element_tooltip_text = document.createElement('span');
    activity_element_tooltip_text.setAttribute(
        'id', `${activity_element_id}_tooltip_text`);
    activity_element_tooltip_text.classList.add('tooltiptext');
    activity_element_tooltip_text.innerHTML = this.tooltip_text;
    activity_element.classList.add('tooltip');
    activity_element.appendChild(activity_element_tooltip_text);


    // Create a population pane to show
    //let activity_element_population_pane = Game.createPopulationPane(`_${activity_element_id}`, false, true);
    let activity_element_population_pane = Game.createActivityPopulationPane(
        `_${activity_element_id}`);
    activity_element.appendChild(activity_element_population_pane);



    activity_element.addEventListener('click', function(e) {

      if (e.target.getAttribute('id') != activity_element_id &&
          e.target.getAttribute('id') != activity_element_text_span_id) {
        return;
      }
      activity_element.classList.toggle('activity_pane_expanded');
      activity_element_text_span.classList.toggle(
          'activity_pane_title_text_expanded');
      console.log(
          `activity_element_text_span className: \
          ${activity_element_text_span.className}`);
      //Game.updateActivityElement(activity_element_id);

    });

    document.getElementById('colony_tab').appendChild(activity_element);
    //Game.updateActivityElement('hunt_prey_pane');
  };



  ///////////
  updateActivityElement() {
    let activity_element_id = `${this.element_base_id}_pane`;
    let activity_element = document.getElementById(activity_element_id);
    if (!(activity_element.classList.contains('activity_pane_expanded'))) {
      let workers_list = document.getElementById(
          `${activity_element_id}_workers_list`);
      if (typeof workers_list !== 'undefined' && workers_list != null) {
        workers_list.remove();
      }
    }

    else {

      let workers_list = document.getElementById(
        `${activity_element_id}_workers_list`);
      try {
        console.log(`workers list: ${workers_list}`);
        workers_list.remove()
        console.log('removed worker list');
      } catch(error) {
        console.log('error');
      };

      // Create a div to house the population list
      workers_list = document.createElement('div');
      workers_list.setAttribute('id',
          `${activity_element_id}_workers_list`);
      activity_element.appendChild(workers_list);

      // Create a header for the population
      let workers_list_header = document.createElement('span');
      workers_list_header.setAttribute(
          'id', `${activity_element_id}_workers_list_header`);
      workers_list_header.innerHTML = 'Workers:';
      workers_list.appendChild(workers_list_header);

      console.log(`game_data.population.length = ${game_data.population.length}`);
      for (let i = 0; i < game_data.population.length; i++) {
        console.log(
            `Adding ${game_data.population[i].name} to the workers list.`);
        let populant_element = game_data.population[i].createSimpleElement('_worker');
        let activity_element_text_span = document.getElementById(
            `${activity_element_id}_text_span`);
        console.log(`populant_element children: <${populant_element.childNodes}>.`);
        //console.log(`populant activity: <${game_data.population[i].activity.name}>.`);
        console.log(`activity name: <${activity_element_text_span.innerHTML}>.`);
        if (game_data.population[i].activity != null) {
          if (game_data.population[i].activity.name ==
              activity_element_text_span.innerHTML) {
            let populant_element_text_span_id =
                `${game_data.population[i].uuid}_worker_text_span`;
            console.log(`populant_element_text_span_id: \
                <${populant_element_text_span_id}>.`);
            let populant_element_text_span = populant_element.querySelector(
                `#${populant_element_text_span_id}`);
            console.log(populant_element_text_span);
            populant_element_text_span.style.fontWeight = 'bold';
          };
        };
        populant_element.addEventListener('click', function() {
          console.log('worker clicked!');
          if (game_data.population[i].activity == null ||
              game_data.population[i].activity.name !=
                  activity_element_text_span.innerHTML) {
            //game_data.population[i].activity = activity_element_text_span.innerHTML;
            let _activity = {
              'name': 'hunt_prey',
              //'sequence': 1,
              'step': 1
            };
            game_data.population[i].activity = _activity;
          } else {
            game_data.population[i].activity = null;
          };
        });
        workers_list.appendChild(populant_element);
      }
    }
  };
};
