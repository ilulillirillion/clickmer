export default function PerformanceTimer(target, name, descriptor) {

  let original_function = descriptor.value;

  let wrapped_function = function() {
    let function_start_time = Date.now();

    original_function.apply(target, arguments);

    let function_end_time = Date.now();
    let time_delta = tick_end_time - tick_start_time;
    console.debug(`<${name}> took <${time_delta}> milliseconds to complete.`);

  };

  descriptor.value = wrapped_function;
  return descriptor;

};
