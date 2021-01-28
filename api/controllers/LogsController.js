var Node = require("../models/Node");
var Logs = require("../models/Logs");
module.exports = {
  craeteLogs: async function(req, res) {
    console.log("get Node");
    // let saveNodeData = await Node.saveNode(req.body);
    console.log("saveNodeDatasaveNodeData", Logs);
    let saveLogsData = Logs.create({ path: "HHH" });
    if (saveNodeData) {
      res.status(200).send(saveNodeData);
    } else {
      res.send(500).json({ message: "Internal server error" });
    }
  }
};
