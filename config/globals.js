/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on any of these options, check out:
 * https://sailsjs.com/config/globals
 */
console.log("insie global");
let mongoose = require("mongoose");

if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  global.env = require("./env/production.js");
  global.mongourl = env.mongodbURL;
  mongoose.connect(
    mongourl,
    {
      useMongoClient: true
    },
    function(err, db) {}
  );
} else {
  global.env = require("./env/development.js");
  global.mongourl = global.env.url;
  mongoose.connect(mongourl, function(err, db) {});
}
// const Pool = require("pg").Pool;

// // // Declare a new client instance from Pool()
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "test",
//   password: "temp",
//   port: "5432"
// });

// async function createTable() {
//   // Promise chain for pg Pool client
//   const client = await pool
//     .connect()

//     .catch(err => {
//       console.log("poolJJJJJJJJJ .connect ->", err);
//     });
//   console.log("client", client);
// }
// createTable();
module.exports.globals = {
  /****************************************************************************
   *                                                                           *
   * Whether to expose the locally-installed Lodash as a global variable       *
   * (`_`), making  it accessible throughout your app.                         *
   *                                                                           *
   ****************************************************************************/

  _: require("@sailshq/lodash"),
  // async: require("async"),

  /****************************************************************************
   *                                                                           *
   * This app was generated without a dependency on the "async" NPM package.   *
   *                                                                           *
   * > Don't worry!  This is totally unrelated to JavaScript's "async/await".  *
   * > Your code can (and probably should) use `await` as much as possible.    *
   *                                                                           *
   ****************************************************************************/

  async: false,

  /****************************************************************************
   *                                                                           *
   * Whether to expose each of your app's models as global variables.          *
   * (See the link at the top of this file for more information.)              *
   *                                                                           *
   ****************************************************************************/

  models: true,

  /****************************************************************************
   *                                                                           *
   * Whether to expose the Sails app instance as a global variable (`sails`),  *
   * making it accessible throughout your app.                                 *
   *                                                                           *
   ****************************************************************************/

  sails: true
};
