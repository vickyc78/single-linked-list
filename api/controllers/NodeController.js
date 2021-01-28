var Node = require("../models/Node");
var Logs = require("../models/Logs");
// var Pool = require("pg").Pool;

// // Declare a new client instance from Pool()
// var pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "test",
//   password: "temp",
//   port: "5432"
// });
// var tableName = "test";

// Declare a string for the CREATE TABLE SQL statement
// var newTableSql = `CREATE TABLE ${tableName} (
// id SERIAL NOT NULL,
// path VARCHAR(255) NOT NULL
// );`;
// async function createTable() {
//   // Promise chain for pg Pool client

//   var client = await pool.connect((err, data) => {
//     console.log("JJJJJJJJJJJJJ", err, data);
//   });
//   await client.query(newTableSql, (err, res) => {
//     // check for errors with client.query()
//     if (err) {
//       console.log("nCREATE TABLE ->", err);
//     }
//     if (res) {
//       console.log("nCREATE TABLE result:", res);
//     }

//     // Release the pg client instance after last query
//     client.release();
//     console.log("Client is released");
//   });
// }

// createTable();
// pool.connect((err, client, release) => {
//   console.log("GGGGGGGGGGG", err, client, release);
//   if (err) {
//     return console.error("Error acquiring client", err.stack);
//   }
//   client.query("SELECT NOW()", (err, result) => {
//     release();
//     if (err) {
//       return console.error("Error executing query", err.stack);
//     }
//     console.log(result.rows);
//   });
// });
module.exports = {
  createNode: async function(req, res) {
    console.log("get Node");
    let saveNodeData = await Node.saveNode(req.body);
    if (saveNodeData) {
      res.status(200).send(saveNodeData);
    } else {
      res.send(500).json({ message: "Internal server error" });
    }
  },
  lengthOfNode: function(req, res) {
    Node.lengthOfNode({}, function(err, data) {
      console.log("EEEEEEEEEEEEEEEE", err, data);
      if (err) {
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.status(200).json({ lengthOfList: data });
      }
    });
  },
  getAllNodes: function(req, res) {
    Node.getAllNode({}, function(err, data) {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
      } else if (!data.length) {
        res.status(404).json({ message: "No Node Found" });
      } else {
        res.status(200).json(data);
      }
    });
  },
  orderNode: function(req, res) {
    Node.orderNode(req.body, function(err, data) {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.status(200).json(data);
      }
    });
  },
  searchNode: function(req, res) {
    Node.searchNode(req.body, function(err, data) {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
      } else if (!data.length) {
        res
          .status(404)
          .json({ message: "No Nodes Found For Given Search Node" });
      } else {
        res.status(200).json(data);
      }
    });
  },
  deleteNode: function(req, res) {
    Node.deleteNode(req.body, function(err, data) {
      console.log("err,data", err, data);
      if (err) {
        res.status(505).json({ message: "Internal server error" });
      } else {
        res.status(200).json(data);
      }
    });
  }
};
