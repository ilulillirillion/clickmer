export default class SequenceStage {
  static tick({ sequence_progress, actor } = {}) {
    console.debug(`Ticking SequenceStage with sequence progress <${sequence_progress}> and actor <${actor}>.`);
  };
};
