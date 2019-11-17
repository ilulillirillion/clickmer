import ObjectComposer from './ObjectComposer.js';

console.log(ObjectComposer);

// First, build a mixin by currying half of the objecting composer.
const examplePrivateMethod = Symbol('examplePrivateMethod');
const ExampleMixin = ObjectComposer('ExampleMixin')('example_imported_property')({
//const ExampleMixin = ObjectComposer('ExampleMixin')('example_imported_property', 'examplePublicMethodForExoticOverride')({
  // Any normal class method, will be public.
  examplePublicMethod() {
    //console.log(this.example_imported_property);
    return(this.example_imported_property);
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
//const ExampleMixinOverride = ObjectComposer('ExampleMixinOverride')()({
const ExampleMixinOverride = ObjectComposer('ExampleMixinOverride')('example_mixin_override_property')({
  examplePublicMethodToOverride() {
    console.log('Override success.');
  },
  example_mixin_override_property: 'example_mixin_override_property'
});

//const ExampleMixinBeforeOverride = ObjectComposer('ExampleMixinBeforeOverride')('examplePublicMethodForExoticOverride')({
const ExampleMixinBeforeOverride = ObjectComposer('ExampleMixinBeforeOverride')()({
  exampleMixinBeforeOverrideMethod() {
    return('example mixin before override method message');
  },
  examplePublicMethodForExoticOverride() {
    console.log('This is the "before" message.');
  }
});

const ExampleMixinAfterOverride = ObjectComposer('ExampleMixinAfterOverride')()({
  exampleMixinAfterOverrideMethod() {
    return('example mixin before after method message');
  },
  examplePublicMethodForExoticOverride() {
    console.log('This is the "after" message.');
  }
});


// Secondly, call the mixin, passing simple and then exotic parameters.
//const ExampleClass = ExampleMixin('examplePublicMethod', 'examplePrivateMethod')()(class {

//const ExampleClass = ExampleMixinThree()({ property_name: 'examplePublicMethodForExoticOverride', export_type: 'before' })(ExampleMixinTwo('examplePublicMethodToOverride')()(ExampleMixin('examplePublicMethod', 'examplePublicMethodToOverride', 'examplePublicMethodForExoticOverride')()(class {

//const ExampleClass = ExampleMixinTwo('examplePublicMethodToOverride')()(ExampleMixin('examplePublicMethod', 'examplePublicMethodToOverride', 'examplePublicMethodForExoticOverride')()(class {

const ExampleClass = 
    // Wrap everything in an after override mixin
    ExampleMixinAfterOverride
      // Export properties.
      ()
      // Exotic export properties.
      (
        {
          property_name: 'examplePublicMethodForExoticOverride',
          export_type: 'after'
        }
      )
      // Wrap everything in a before override mixin
      ( ExampleMixinBeforeOverride
        // Export properties.
        ()
        // Exotic export properties.
        (
          { 
            property_name: 'examplePublicMethodForExoticOverride',
            export_type: 'before'
          }
        )
        // Wrap everything around an example override mixin
        ( ExampleMixinOverride
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

  constructor
      (
        { 
          example_imported_property = 'foo',
          example_unimported_property = 'alpha'
        } =
        {
          example_imported_property: 'foo',
          example_unimported_property: 'alpha'
        }
      ) {
    console.log('Running example class constructor:', example_imported_property);
    this.example_imported_property = example_imported_property;
    this.example_unimported_property = example_unimported_property;
  }

  /*
  examplePublicMethodForExoticOverride() {
    console.log('built-in exotic test.');
  }
  */
}))));

export default ExampleClass;
