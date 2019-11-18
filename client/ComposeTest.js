import ObjectComposer from './ObjectComposer.js';

console.log(ObjectComposer);

// First, build a mixin by currying half of the objecting composer.
const examplePrivateMethod = Symbol('examplePrivateMethod');
const ExampleMixin = ObjectComposer('ExampleMixin')('example_imported_property')({
  // Any normal class method, will be public.
  examplePublicMethod() {
    return(this.example_imported_property);
  },
  examplePublicMethodToOverride() {
    // FIXME: return
    console.log('This should have been overridden.');
  },
  examplePublicMethodForExoticOverride() {
    // FIXME: return
    console.log('This should print between before and after messages.');
  },
  /**
   *  Represents any normal private class method, made private by being bound 
   *  to a symbol.
   *  Symbols are ignored on enumeration and so bypass the object composer.
   *  This property can't be exported even if explictly asked for.
   */
  [examplePrivateMethod](example_parameter) {
    // FIXME: return this instead
    console.log('I should not be accessible.');
  }
});

// Should override a method from the first mixin.
const ExampleMixinOverride = ObjectComposer('ExampleMixinOverride')('example_mixin_override_property')({
  examplePublicMethodToOverride() {
    console.log('Override success.');
  },
  // This is exported to demonstrate non-method exporting from a mixin.
  example_mixin_override_property: 'example_mixin_override_property'
});

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


/**
 *  Secondly, call the mixin, passing the name first, then simple parameters,
 *  exotic parameters, and, finally, the target base to apply the mixin to.
 */
const ExampleClass = 
    // Wrap everything in an after override mixin
    ExampleMixinAfterOverride
      // Export properties.
      (
        {
          property_name: 'examplePublicMethodForExoticOverride',
          export_type: 'after'
        }
      )
      //()
      // Exotic export properties.
      //()
      /*
      (
        {
          property_name: 'examplePublicMethodForExoticOverride',
          export_type: 'after'
        }
      )
      */
      // Wrap everything in a before override mixin
      ( ExampleMixinBeforeOverride
        // Export properties.
        (
          { 
            property_name: 'examplePublicMethodForExoticOverride',
            export_type: 'before'
          }
        )
        //()
        // Exotic export properties.
        //()
        /*
        (
          { 
            property_name: 'examplePublicMethodForExoticOverride',
            export_type: 'before'
          }
        )
        */
        // Wrap everything around an example override mixin
        ( ExampleMixinOverride
          // Export properties.
          ( 'examplePublicMethodToOverride' )
          // Exotic export properties.
          //()
          // Wrap everything around the example mixin.
          ( ExampleMixin
            // Export properties.
            ( 'examplePublicMethod', 
              'examplePublicMethodToOverride', 
              'examplePublicMethodForExoticOverride'
            )
            // Exotic export properties.
            //()
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
