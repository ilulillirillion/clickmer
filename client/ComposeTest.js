import ObjectComposer from './ObjectComposer.js';

console.log(ObjectComposer);

// First, build a mixin by currying half of the objecting composer.
const examplePrivateMethod = Symbol('examplePrivateMethod');
const ExampleMixin = ObjectComposer('example_imported_property')({
  examplePublicMethod() {
    // Any normal class method, will be public.
    console.log('testthis', this);
    console.log(this.example_imported_property);
  },
  examplePublicMethodToOverride() {
    console.log('This should have been overridden.');
  },
  examplePublicMethodForExoticOverride() {
    console.log('This should print in-between before and after messages.');
  },
  [examplePrivateMethod](example_parameter) {
    console.log('I should not be accessible.');
    // Any normal class method, will be private due to being bound to a
    // symbol.
    // Symbols are ignored on enumeration so bypass the object composer.
  }
});

// Should override a method from the first mixin.
const ExampleMixinTwo = ObjectComposer()({
  examplePublicMethodToOverride() {
    console.log('Override success.');
  }
});

const ExampleMixinThree = ObjectComposer()({
  examplePublicMethodForExoticOverride() {
    console.log('This is the "before" message.');
  }
});

// Secondly, call the mixin, passing simple and then exotic parameters.
//const ExampleClass = ExampleMixin('examplePublicMethod', 'examplePrivateMethod')()(class {

const ExampleClass = ExampleMixinThree()({ property_name: 'examplePublicMethodForExoticOverride', export_type: 'before' })(ExampleMixinTwo('examplePublicMethodToOverride')()(ExampleMixin('examplePublicMethod', 'examplePublicMethodToOverride', 'examplePublicMethodForExoticOverride')()(class {

//const ExampleClass = ExampleMixinTwo('examplePublicMethodToOverride')()(ExampleMixin('examplePublicMethod', 'examplePublicMethodToOverride', 'examplePublicMethodForExoticOverride')()(class {

//const ExampleClass = ExampleMixin()()(class {
  constructor(example_imported_property) {
    console.log('Running example class constructor:', example_imported_property);
    //this.example_imported_property = example_imported_property;
    this.example_imported_property = 'test';
  }
})));

export default ExampleClass;
