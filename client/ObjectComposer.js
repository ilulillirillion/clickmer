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
 */

/**
 * The first parameter sets the effective "name" for the mixin itself.
 * This is mainly useful for readability in logs.
 */
const ObjectComposer = (mixin_name) =>

/**
 *  The second set of parameters indicate which properties to import from the 
 *  target base object into the composed object. Imported properties are those 
 *  properties that belong to the base object that the composed object's 
 *  methods require access to in order to function correctly.
 */
(...imported_properties) =>

/**
 *  The third set of parameters indicate all of the properties provided by
 *  the mixin. This effectively represents the mixin object itself. All 
 *  mixin properties should be provided here, any ommissions may result in
 *  unavailable properties and unpredictable behavior.
 */
(mixin_properties) =>

/**
 *  The fourth set of parameters indicate which properties to export from the 
 *  mixin object to the target base object's composed object. These 
 *  properties will be accessible by the target base object as if they were 
 *  mapped directly to it. 
 *  Override behavior can be controlled by optionally passing an export type 
 *  per property. The main use for this is to extend existing methods rather 
 *  than outright overwrite them entirely.
 */
(...exported_properties) =>

/**
 * The final parameter set is the base object that is being modified.
 */
target => {

  console.debug(
    'Composing object with mixin name, imported properties, ' +
    'mixin properties, exported properties, and target:', 
    mixin_name, imported_properties, mixin_properties, 
    exported_properties, target
  );

  /**
   * Define symbols to represent the composed object as well as the instance.
   * Symbols are used here to help avoid collisions from other mixins.
   */
  const composed_object = Symbol(mixin_name);
  const instance = Symbol('instance');

  /**
   *  Check for an exported_properties argument. If it's empty, then
   *  export all properties by default.
   */
  if (exported_properties[0] === 'ALL') {
    exported_properties = Object.keys(mixin_properties);
    console.debug('Found keyword ALL:', exported_properties);
  }

  /**
   *  Inject dependency methods, getters, and setters, into the target 
   *  base object's prototype.
   *
   *  Export types:
   *
   *    "normal":
   *      Considered the default behavior, overrides properties via a direct
   *      overwrite.
   *
   *    "before":
   *
   *      Valid for methods only. If the exported property is not a
   *      method, then an error is thrown and the export is ignored.
   *
   *      Map the exported property name of the composed object to
   *      a function which invokes the exported mixin's method first,
   *      before invoking the target base object's like-named method,
   *      if one exits, second.
   *      FIXME:
   *        It is not currently possible to retrieve return values from
   *        "before" exports. 
   *
   *    "after":
   *
   *      Valid for methods only. If the exported property is not a
   *      method, then an error is thrown and the export is ignored.
   *
   *      Map the exported property name of the composed object to
   *      a function which invokes the target base object's 
   *      like-named method first, if one exists, then invokes the
   *      mixin object's exported method, afterward. 
   *
   *      FIXME:
   *        It is not currently possible to retrieve return values from
   *        "after" exports. 
   *
   *    "sum":
   *      TODO: Unimplemented.
   *      FIXME:  
   *        Maybe this and difference should be in their own categories since 
   *        they operate on return values rather than specifying an order.
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
   *    "difference":
   *      TODO: Unimplemented.
   *      FIXME:  
   *        Maybe this and difference should be in their own categories since 
   *        they operate on return values rather than specifying an order.
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
  for (const exported_property of exported_properties) {

    /**
     * Figure out the name and export type from the exported property.
     * Also binds a copy of the original method to the base target if it will
     * be needed for setting up the export.
     */
    let property_name = null;
    let export_type = 'normal';
    let original_method = null;
    if (typeof(exported_property) === 'string') {
      property_name = exported_property;
    } else {
      if (exported_property.hasOwnProperty('property_name')) {
        property_name = exported_property.property_name;
      }
      if (exported_property.hasOwnProperty('export_type')) {
        export_type = exported_property.export_type;
      }
    }

    /**
     *  If necessary, copy a duplicate of the original method to the target
     *  using bind.
     *  // TODO: Shouldn't this be bound to the composed object instead?
     */
    if (export_type === 'before' || export_type === 'after') {
      original_method = target.prototype[property_name].bind(target.prototype);
    }

    /**
     * If the composer is, for any reason, unable to determine a property
     * name for the exported property, warn the console and skip the property.
     */
    if (property_name === null) {
      console.warn(
        'Unable to determine name for exported property:', 
        exported_property
      );
      continue;
    }

    Object.defineProperty(target.prototype, property_name, {
      value:  function(...args) {
        console.debug('Defining exported property:', property_name);

        /**
         * If the target base object has not already had to set a
         * property to represent the composed object, take the
         * opportunity to do so now.
         */
        // FIXME: Should be '==='.
        if (this[composed_object] == null) {
          console.debug('composed object is null.');
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
            console.debug('Handling imported property:', property_name);
            if (typeof this[composed_object][property_name] === 'function') {      


              this[composed_object][property_name] = function(...args) {
                return this[instance][property_name](...args);
              }

              // FIXME: Will not prevent name collisddions!
              //Object.defineProperty(target.prototype, property_name) {

            /**
             *  If the imported property is not a method, set the like 
             *  property of the composed object to a getter which 
             *  returns the base object's like property value. Uses a 
             *  getter, instead of a direct mapping, to ensure calls to 
             *  the composed object's property will always return the 
             *  current value of the base object.
             */
            } else {

              /**
               * This line will make properties available on the
               * target base object itself (as opposed to just inside
               * of the symbol being constructed).
               */
              //this[property_name] = mixin_properties[property_name];

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
        let self = this;
        if (export_type === 'before') {
          return function(...args) {
            self[composed_object][property_name](...args);
            original_method(...args);
          }(...args);
        } else if (export_type === 'after') {
          return function(...args) {
            original_method(...args);
            self[composed_object][property_name](...args);
          }(...args);
        /**
         *  Any other type, including null or "normal", result in a simple
         *  property assignment.
         */
        } else {
          return this[composed_object][property_name](...args);
        }
      },
      // Allow the property to be overwritten.
      writable: true
    });
  }

  return target;

}

export default ObjectComposer;
