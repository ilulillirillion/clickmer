import Tab from './Tab.js';

export default class ResearchTab extends Tab {
  constructor() {
    super('research');
    console.log('Creating research tab.');

    this.header_span_contents = 'Research Tab';
  };
};
