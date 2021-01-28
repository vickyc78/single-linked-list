module.exports = {
  tableName: "logs",
  primaryKey: "id",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true
    },
    path: {
      type: "string",
      required: true,
      unique: true
    }
  }
};
