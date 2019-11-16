import ObjectComposer from './ObjectComposer.js';

console.log(ObjectComposer);

// First, build a mixin by currying half of the objecting composer.
const examplePrivateMethod = Symbol('examplePrivateMethod');
const ExampleMixin = ObjectComposer('example_imported_property')({
  // Any normal class method, will be public.
  examplePublicMethod() {
    console.log(this.example_imported_property);
  },
  examplePublicMethodToOverride() {
    console.log('This should have been overridden.');
  },
  examplePublicMethodForExoticOverride() {
    console.log('This should print between before and after messages.');
  },
  // Any normal class method, will be private due to being bound to a
  // symbol.
  // Symbols are ignored on enumeration so bypass the object composer.
  // This property can't be exported even if explictly asked for.
  [examplePrivateMethod](example_parameter) {
    console.log('I should not be accessible.');
  }
});

// Should override a method from the first mixin.
const ExampleMixinOverride = ObjectComposer()({
  examplePublicMethodToOverride() {
    console.log('Override success.');
  }
});

const ExampleMixinBeforeOverride = ObjectComposer()({
  examplePublicMethodForExoticOverride() {
    console.log('This is the "before" message.');
  }
});

const ExampleMixinAfterOvverride = ObjectComposer()({
  examplePublicMethodForExoticOverride() {
    console.log('This is the "after" message.');
  }
});


// Secondly, call the mixin, passing simple and then exotic parameters.
//const ExampleClass = ExampleMixin('examplePublicMethod', 'examplePrivateMethod')()(class {

//const ExampleClass = ExampleMixinThree()({ property_name: 'examplePublicMethodForExoticOverride', export_type: 'before' })(ExampleMixinTwo('examplePublicMethodToOverride')()(ExampleMixin('examplePublicMethod', 'examplePublicMethodToOverride', 'examplePublicMethodForExoticOverride')()(class {

//const ExampleClass = ExampleMixinTwo('examplePublicMethodToOverride')()(ExampleMixin('examplePublicMethod', 'examplePublicMethodToOverride', 'examplePublicMethodForExoticOverride')()(class {

const ExampleClass = 
    // Wrap everything around the example override mixin.
    ExampleMixinOverride
      // Export properties.
      ( 'examplePublicMethodToOverride' )
      // Exotic export properties.
      ()
      // Wrap everything around the example mixin.
      ( ExampleMixin
        // Export properties.
        ( 'examplePublicMethod', 
          'examplePublicMethodToOverride', 
          'examplePublicMethodForExoticOverride'
        )
        // Exotic export properties.
        ()
        // Wrap everything around a base class.
        ( class {

  constructor(example_imported_property="foo") {
    console.log('Running example class constructor:', example_imported_property);
    this.example_imported_property = example_imported_property;
  }
}));

export default ExampleClass;
