// vim: set ft=javascript:

/**
 * Composes an object from mixins using parameters.
 * Uses nested functions for currying and simplifying parameterization.
 **
 *  Example call:
 *    // First, build a mixin by currying half of the objecting composer.
 *    const examplePrivateMethod = Symbol('examplePrivateMethod');
 *    const ExampleMixin = ObjectComposer('example_imported_property')({
 *      examplePublicMethod(example_parameter) {
 *        // Any normal class method, will be public.
 *        console.log(this.example_imported_property);
 *      },
 *      examplePrivateMethod(example_parameter) {
 *        // Any normal class method, will be private due to being bound to a 
 *        // symbol.
 *        // Symbols are ignored on enumeration so bypass the object composer.
 *      }
 *    });
 *
 *    // Secondly, call the mixin, passing simple and then exotic parameters.
 *    const ExampleClass = ExampleMixin('examplePublicMethod')(class {
 *      constructor(example_imported_property) {
 *        this.example_imported_property = example_imported_property;
 *      }
 *    });
 *
 *    let example_class = new ExampleClass('foo');
 *    example_class.examplePublicMethod();  //  =>  'foo'
 **
 *  The first layer takes an arugment of properties to import into lower layers
 *  of the procedure.
 *  Imported properties will be pulled up from the base object and through
 *  each mixin.
 */
const ObjectComposer = (...imported_properties) =>

  /** 
   *  Second argument is a list of all mixin properties.
   *  This essential defines the mixin.
   *  The first and second argument are called on mixin declaration and curry
   *  the object composer for the remaining arguments to be supplied on class
   *  declaration.
   */
  (mixin_properties) =>

    /** 
     *  The third argument gives a list of which properties to apply from the
     *  mixin and onto the target.
     */
    (...exported_properties) =>

      /** 
       *  The fourth argument specifies custom property import behavior. Takes
       *  objects with a name and export type (override (default), before, or
       *  after).
       */
      // TODO: Unimplemented
      (...exotic_exports) =>
      
        /**
         * The final parameter set is the base that is being modified.
         */
        target => {

          console.log('Composing object with imported properties, mixin properties, exported properties, exotic exports, and target:', imported_properties, mixin_properties, exported_properties, exotic_exports, target);

          const composed_object = Symbol('composed_object');
          const instance = Symbol('instance');

          /**
           *  Defines the composed object so long as it does not already exist.
           *  Uses symbols to enforce singleton values and avoid collisions.
           *  Import any properties that were asked for and make sure they are
           *  available to the composed object.
           */
          /*
          if (this[composed_object] == null) {
            this[composed_object] = Object.assign({}, mixin_properties);
            this[composed_object][instance] = this;
            for (const property_name of imported_properties) {
              if (typeof this[instance][property_name] === 'function') {      
                this[composed_object][property_name] = function(...args) {
                  return this[instance][property_name](...args);
                }
              } else {
                this[composed_object][property_name] = this[instance][property_name];
              }
            }
          }
          */

          /**
           * Build the target prototype.
           */
          if (exported_properties.length === 0) {
            exported_properties = Object.keys(mixin_properties);
            console.log('No exported properties argument given, using default behavior:', exported_properties);
          }
          for (const property_name of exported_properties) {

            // FIXME: Assumes properties are methods
            Object.defineProperty(target.prototype, property_name, {
              value:  function(...args) {

                        console.log('Getting composed property of:', this);
                        if (this[composed_object] == null) {
                          console.debug('Past null block for property_name:', property_name);
                          this[composed_object] = Object.assign({}, mixin_properties);
                          this[composed_object][instance] = this;
                          for (const property_name of imported_properties) {
                            if (typeof this[composed_object][property_name] === 'function') {      
                              this[composed_object][property_name] = function(...args) {
                                return this[instance][property_name](...args);
                              }
                            } else {
                              //this[composed_object][property_name] = function() {
                              //  return this[instance][property_name];
                              //}
                              //console.log(this);
                              //this[composed_object][property_name] = this[property_name];
                              //this[composed_object][property_name] = function() {
                              //  return this[instance]
                              //return this[instance][property_name];
                              Object.defineProperty(this[composed_object], property_name, {
                                get: function() { return this[instance][property_name] }
                              });

                            }
                          }
                        }

                        console.debug('test7', this);
                        console.debug(this[composed_object], property_name);
                        return this[composed_object][property_name](...args);
                      },
              writable: true
            });
            // TODO:  Test if propery is not a method and assign it to the
            //        composed object instance.

          }

          for (const exotic_export of exotic_exports) {
            let property_name = exotic_export.property_name;
            let export_type = exotic_export.export_type;
            console.debug('Handling exotic export name, type:', property_name, export_type);

            //let original_property = Object.getProperty(target.prototype, property_name);
            //const original_property = target.prototype[property_name];
            //console.debug('Set original property:', original_property);

            let original = {
              prop: target.prototype[property_name]
            }
            Object.freeze(original);

            Object.defineProperty(target.prototype, property_name, {
              value: function(...args) {
                // FIXME: Violates D.R.Y.
                if (this[composed_object] == null) {
                  this[composed_object] = Object.assign({}, mixin_properties);
                  this[composed_object][instance] = this;
                  for (const property_name of imported_properties) {
                    if (typeof this[composed_object][property_name] === 'function') {
                      this[composed_object][property_name] = function(...args) {
                        return this[instance][property_name](...args);
                      }
                    } else {
                      Object.defineProperty(this[composed_object], property_name, {
                        get: function() { return this[instance][property_name] }
                      });
                    }
                  }
                }
                

                let co = this[composed_object];
                let self = this;
                let modified_property = function(...args) {
                  console.debug(co, property_name);
                  co[property_name](...args);
                  //console.debug('Now calling original method:', original_property, ...args);
                  console.debug('Now calling original method:', original.prop, ...args);
                  //original_property.apply(co, ...args);
                  //original_property.apply(this, ...args);
                  //original_property.apply(self, ...args);
                  original.prop.apply(self, ...args);
                  //original_property(...args);
                }
                  
                  
                //this[composed_object][property_name].apply(this, ...args);
                //return this[composed_object][property_name](...args);
                return modified_property(...args);
              },
              writable: true
            });
          }
                

          return target;

        }

export default ObjectComposer;
