// Message when the data object return an empty array for the specified Resource
const all = resourceName => {
  return {
    error: `There are no ${resourceName} available.`
  };
};

// Message when the data object return an empty object for the
// specified Resource with a certain id
const one = (resourceName, id) => {
  return {
    error: `There is no ${resourceName} with an id of ${id}.`
  };
};

// Message when the data object return an empty object for the
// specified Resource with a certain id and a method (operation)
const updateOrDelete = (method, resourceName, id) => {
  return {
    error: `Could not ${method} the ${resourceName} with an id of ${id}. Make sure it exists.`
  };
};

module.exports = {
  all,
  one,
  updateOrDelete
};
