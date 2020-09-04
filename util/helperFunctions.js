// See if any data was returned from the query.
const hasRows = data => {
  if (data.rowCount === 0 || data.rowCount === undefined) return false;
  return true;
};

// See if there is an error ocurred after an operation
const hasError = data => data.name === "error";

// Choosing the correct status code for an unsuccessful operation
const whichStatusCode = data => {
  if (data.code === "23505" || data.code === "23503") return 422;
  return 400;
};

module.exports = {
  hasRows,
  hasError,
  whichStatusCode
};
