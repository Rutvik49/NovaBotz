const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  return await bcrypt.hash(password, 9);
};
const comparePassword = async (dbPassword, filledPassword) => {
  return await bcrypt.compare(dbPassword, filledPassword);
};
module.exports = { encryptPassword, comparePassword };
