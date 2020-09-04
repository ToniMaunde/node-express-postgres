// Queries for each function
const select = "SELECT * FROM post ORDER BY created_at";
const selectWhere = "SELECT * FROM post WHERE id = $1";
const deleteWhere = "DELETE FROM post WHERE id = $1";
const update =
  "UPDATE post SET title = $1, body = $2, updated_at = NOW() WHERE id = $3";
const insert =
  "INSERT INTO post VALUES(DEFAULT, $1, $2, $3, DEFAULT, DEFAULT) RETURNING id";

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

const findAndUpdate = async (client, post) => {
  const query = {
    text: update,
    values: [post.title, post.body, post.id]
  };

  try {
    const data = await client.query(query);
    return data;
  } catch (error) {
    return error;
  }
};

const create = async (client, post) => {
  const query = {
    text: insert,
    values: [post.title, post.body, post.userId]
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
