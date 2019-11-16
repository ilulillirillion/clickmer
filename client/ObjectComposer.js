// vim: set ft=javascript:

/**
 *  file: clickmer/client/ObjectComposer.js
 *  author: zolvaring
 *  email: zolvaring@gmail.com
 *  reference: https://github.com/zolvaring/clickmer
 */

/**
 *  Provides the ObjectComposer function.
 *  The ObjectComposer composes objects from mixins with some capacity for
 *  managing the mixin process through parameters.
 *
 *  Custom built using the following references as strong guides:
 *    https://raganwald.com/2016/07/20/prefer-composition-to-inheritance.html
 *    http://raganwald.com/2015/12/28/mixins-subclass-factories-and-method-advice.html
 *
 *  Example Usage:
 *    // First, build a mixin by currying half of the objecting composer.
 *    const examplePrivateMethod = Symbol('examplePrivateMethod');
 *    const ExampleMixin = ObjectComposer('example_imported_property')({
 *      // Any normal class method, will be public.
 *      examplePublicMethod() {
 *        console.log(this.example_imported_property);
 *      },
 *      examplePublicMethodToOverride() {
 *        console.log('This should have been overridden.');
 *      },
 *      // Any normal class method, will be private due to being bound to a
 *      // symbol.
 *      // Symbols are ignored on enumeration so bypass the object composer.
 *      // This property can't be exported even if explictly asked for.
 *      [examplePrivateMethod](example_parameter) {
 *        console.log('I should not be accessible.');
 *      }
 *    });
 *
 *    // Should override a method from the first mixin.
 *    const ExampleMixinOverride = ObjectComposer()({
 *      examplePublicMethodToOverride() {
 *        console.log('Override success.');
 *      }
 *    });
 *
 *    const ExampleClass =
 *        // Wrap everything around the example override mixin.
 *        ExampleMixinOverride
 *          // Export properties.
 *          ( 'examplePublicMethodToOverride' )
 *          // Exotic export properties.
 *          ()
 *          // Wrap everything around the example mixin.
 *          ( ExampleMixin
 *            // Export properties.
 *            ( 'examplePublicMethod',
 *              'examplePublicMethodToOverride',
 *              'examplePublicMethodForExoticOverride'
 *            )
 *            // Exotic export properties.
 *            ()
 *            // Wrap everything around a base class.
 *            ( class {
 *      constructor(example_imported_property="foo") {
 *        console.log('Running example class constructor:', example_imported_property);
 *        this.example_imported_property = example_imported_property;
 *      }
 *    }));
 *
 *    let example_class = new ExampleClass('foo');
 *    example_class.examplePublicMethod();  //  =>  'foo'
 *    console.log('Got example class:', example_class);
 *
 *    example_class.example_imported_property = 'bar';
 *    console.log('Mutated example class:', example_class);
 *    example_class.examplePublicMethod();  //  =>  'bar'
 *
 *    // Should fail.
 *    try {
 *      example_class.examplePrivateMethod();
 *      console.warn('Private method was accessed!');
 *    } catch {}
 *
 *    example_class.examplePublicMethodToOverride();  
 *    //  =>  'Override success.'
 */

/**
 *  The first set of parameters indicate which properties to import from the 
 *  target base object into the composed object. Imported properties are those 
 *  properties that belong to the base object that the composed object's 
 *  methods require access to in order to function correctly.
 */
const ObjectComposer = (...imported_properties) =>

  /**
   *  The second set of parameters indicate all of the properties provided by
   *  the mixin. This effectively represents the mixin object itself. All 
   *  mixin properties should be provided here, any ommissions may result in
   *  unavailable properties and unpredictable behavior.
   */
  (mixin_properties) =>

  /**
   *  The third set of parameters indicate which properties to export from the 
   *  mixin object to the target base object's composed object. These 
   *  properties will be accessible by the target base object as if they were 
   *  mapped directly to it.
   */
    (...exported_properties) =>

      /**
       * TODO: Unimplemented
       *
       *  The fourth set of parameters indicate which properties to export from
       *  the mixin object into the target base object's prototype, and also
       *  indicates the way in which the properties are exported, allowing
       *  arbitrary extension and layering of target base prototype's existing
       *  logic.
       */
      (...exotic_exports) =>
      
        /**
         * The final parameter set is the base object that is being modified.
         */
        target => {

          console.debug('Composing object with imported properties, mixin properties, exported properties, exotic exports, and target:', imported_properties, mixin_properties, exported_properties, exotic_exports, target);

          // HELP: Please explain why symbols are used for these?
          const composed_object = Symbol('composed_object');
          const instance = Symbol('instance');

          /**
           *  Check for an exported_properties argument. If it's empty, then
           *  export all properties by default.
           */
          if (exported_properties.length === 0) {
            exported_properties = Object.keys(mixin_properties);
            console.debug('No exported properties argument given, using default behavior:', exported_properties);
          }

          /**
           *  Inject dependency methods, getters, and setters, into the target 
           *  base object's prototype.
           */
          for (const property_name of exported_properties) {
            Object.defineProperty(target.prototype, property_name, {
              value:  function(...args) {

                /**
                 * If the target base object has not already had to set a
                 * property to represent the composed object, take the
                 * opportunity to do so now.
                 */
                // FIXME: This probably needs to be moved elsewhere, or else
                //        I will have to repeat it when handling "exotic
                //        exports", in case only those exist and this has
                //        never been called. I need a better understanding of
                //        these next 3 lines.
                if (this[composed_object] == null) {
                  this[composed_object] = Object.assign({}, mixin_properties);
                  this[composed_object][instance] = this;

                  /**
                   *  Iterate through each explicitly imported property and 
                   *  define it for the composed object. Composed object 
                   *  behavior is expected to be dependent upon access to any 
                   *  imported properties, so the composed object must have 
                   *  some type of direct access to them.
                   */
                  for (const property_name of imported_properties) {
                    /**
                     *  If the imported property is a method, map the like 
                     *  property of the composed object to a reference of the 
                     *  base/mixin's method, passing original arguments through 
                     *  to it.
                     */
                    if (typeof this[composed_object][property_name] === 'function') {      
                      this[composed_object][property_name] = function(...args) {
                        return this[instance][property_name](...args);
                      }
                    /**
                     *  If the imported property is not a method, set the like 
                     *  property of the composed object to a getter which 
                     *  returns the base object's like property value. Uses a 
                     *  getter, instead of a direct mapping, to ensure calls to 
                     *  the composed object's property will always return the 
                     *  current value of the base object.
                     */
                    } else {
                      Object.defineProperty(this[composed_object], property_name, {
                        get: function() { return this[instance][property_name] }
                      });

                    }
                  }
                }

                /**
                 *  Finally, return the composed object's like-named method, 
                 *  passing any arguments given to it, as the target base's 
                 *  like-named method's value.
                 */
                return this[composed_object][property_name](...args);
              },
              // Allow the property to be overwritten.
              writable: true
            });
          }

          /**
           *  TODO: Implement this.
           *
           *  Iterate through exotic exports and map them to the target base
           *  object's prototype, according the specified type of the export.
           *
           *  Example exports:
           *    1. { property_name: 'foo', export_type: 'before' }
           *    2. { property_name: 'bar', export_type: 'difference' }
           *
           */
          for (const exotic_export of exotic_exports) {
            let property_name = exotic_export.property_name;
            let export_type = exotic_export.export_type;
            console.debug('Handling exotic export name, type:', property_name, export_type);

            /**
             *  TODO:
             *
             *    export type = "before":
             *
             *      Valid for methods only. If the exported property is not a
             *      method, then an error is thrown and the export is ignored.
             *
             *      Map the exported property name of the composed object to
             *      a function which invokes the exported mixin's method first,
             *      before invoking the target base object's like-named method,
             *      if one exits, second.
             *
             *    export type = "after":
             *
             *      Valid for methods only. If the exported property is not a
             *      method, then an error is thrown and the export is ignored.
             *
             *      Map the exported property name of the composed object to
             *      a function which invokes the target base object's 
             *      like-named method first, if one exists, then invokes the
             *      mixin object's exported method, afterward. 
             *
             *    export type = "sum":
             *
             *      Valid for method and non-method property types. If a method
             *      is used it must return a valid type for adding to the
             *      target base object's like-value to avoid errors.
             *
             *      Map the exported property name of the composed object to
             *      a getter which returns the value of the target base
             *      object's like-named property plus the value of the mixin
             *      object's exported value (or the return of exported
             *      function, if applicable).
             *
             *    export type = "difference":
             * 
             *      Valid for method and non-method property types. If a method
             *      is used it must return a valid type for subtracting from 
             *      the target base object's like-value to avoid errors.
             *
             *      Map the exported property name of the composed object to
             *      a getter which returns the value of the target base
             *      object's like-named property plus the value of the mixin
             *      object's exported value (or the return of exported
             *      function, if applicable).
             *
             */

          }
          return target;
        }

export default ObjectComposer;
