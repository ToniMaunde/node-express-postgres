// Queries for each function
const select = "SELECT * FROM users ORDER BY username";
const selectWhere = "SELECT * FROM users WHERE id = $1";
const deleteWhere = "DELETE FROM users WHERE id = $1";
const update =
  "UPDATE users SET email = $1, password = $2, gender = $3, username = $4 ,updated_at = NOW() WHERE id = $5";
const insert =
  "INSERT INTO users VALUES(DEFAULT, $1, $2, $3, $4 ,DEFAULT, DEFAULT) RETURNING id";

const all = async client => {
  const query = {
    text: select
  };

  try {
    const data = await client.query(query);
    return data;
  } catch (error) {
    // Oddly, all the errors are thrown in the data object 🤔
    // Any who, better safe than sorry😉
    return error;
  }
};

const find = async (client, id) => {
  const query = {
    text: selectWhere,
    values: [id]
  };

  try {
    const data = await client.query(query);
    return data;
  } catch (error) {
    return error;
  }
};

const findAndDelete = async (client, id) => {
  const query = {
    text: deleteWhere,
    values: [id]
  };

  try {
    const data = await client.query(query);
    return data;
  } catch (error) {
    return error;
  }
};

const findAndUpdate = async (client, user) => {
  const query = {
    text: update,
    values: [user.email, user.password, user.gender, user.username, user.id]
  };

  try {
    const data = await client.query(query);
    return data;
  } catch (error) {
    return error;
  }
};

const create = async (client, user) => {
  const query = {
    text: insert,
    values: [user.email, user.password, user.gender, user.username]
  };

  try {
    const data = await client.query(query);
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  all,
  find,
  create,
  findAndUpdate,
  findAndDelete
};
