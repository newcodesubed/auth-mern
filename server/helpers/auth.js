const bcrypt = require("bcrypt");
const { reject } = require("bcrypt/promises");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

module.exports = {
  hashPassword,
  comparePassword,
};
