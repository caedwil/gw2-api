function extend(endpoint, base, handler) {
  // Split the endpoint into its components using '/' as a delimiter.
  let components = endpoint.split('/');
  // Set the starting point for the cursor.
  let cursor = base;

  // Step the cursor through each component except for the last.
  for (let i = 0; i < components.length - 1; i++) {
    if (!cursor[components[i]]) {
      // If the component is undefined in the cursor, define it as an
      // empty object.
      cursor = cursor[components[i]] = {};
    } else {
      // If the component is defined, just step the cursor forward.
      cursor = cursor[components[i]];
    }
  }

  // Set the final component in the endpoint to the desired function.
  cursor[components[components.length - 1]] = handler;
}

module.exports = extend;
