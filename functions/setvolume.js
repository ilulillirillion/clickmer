export default function setVolume(val) {
  console.log('setVolume triggered.');
  let audio = background_music;
  console.log('Before: ' + audio.volume);
  console.log(`debug - val: <${val}>.`);
  volume = val / 100;
  console.log(`debug - volume: <${volume}>.`);
  audio.volume = volume;
  console.log('After: ' + audio.volume);
}
