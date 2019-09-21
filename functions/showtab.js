export default function showTab(tab) {
  console.log(`Showing tab <${tab}>.`);
  // hide all your tabs, then show the one the user selected.
  let colony_tab = document.getElementById('colony_tab');
  if (colony_tab) {
    colony_tab.style.display = 'none';
  };
  let population_tab = document.getElementById('population_tab');
  if (population_tab) {
    population_tab.style.display = 'none';
  };
  let research_tab = document.getElementById('research_tab');
  if (research_tab) {
    research_tab.style.display = 'none';
  };
  document.getElementById(tab).style.display = 'inline-block'
  if (tab != 'colony_tab') {
    if (game_data) {
      //for (i=0; i < game_data.activities.length; i++) {
      let activities = document.getElementsByClassName('activity_pane');
      for (var i=0; i < activities.length; i++) {
        let activity_element = activities[i];
        if (activity_element.classList.contains('activity_pane_expanded')) {
          console.log(`Closing open activity pane.`);
          activity_element.classList.remove('activity_pane_expanded');
          console.log(
              `activity_element classList: \
              ${activity_element.classList}`);
          //activity.updateElement();
        };
      };
    };
  };
}
