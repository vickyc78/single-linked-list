var mongoose = require("mongoose");
schema = new mongoose.Schema(
  {
    node: Number,
    address: JSON
  },
  { timestamps: true }
);
module.exports = mongoose.model("Node", schema);
module.exports = {
  saveNode: async function(data) {
    console.log("HHHHH", data);
    var findData = await Node.find({}).sort({ id: -1 });
    console.log("findData findData", findData);
    var saveData = {},
      updateData = {};
    if (_.isEmpty(findData) && !findData.length) {
      saveData = await Node.create({
        node: data.node,
        address: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }).fetch();
      console.log("saveData saveData", saveData);
      return saveData;
    } else {
      saveData = await Node.create({
        node: data.node,
        address: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }).fetch();
      updateData = await Node.updateOne({
        _id: findData[0].id
      }).set({ address: saveData.id, updatedAt: new Date() });
      console.log("updateData updateData", saveData, updateData);
      return saveData;
    }
  },
  lengthOfNode: function(data, callback) {
    console.log("HGFFFFFFFFFFFFF", data);
    Node.find({}).exec(function(err, lengthOfNode) {
      console.log("err, lengthOfNode", err, lengthOfNode);
      callback(err, lengthOfNode.length);
    });
  },
  getAllNode: function(data, callback) {
    Node.find({}).exec(function(err, allNodes) {
      callback(err, allNodes);
    });
  },
  orderNode: function(data, callback) {
    Node.find({})
      .sort({ id: data.order })
      .exec(function(err, allNodes) {
        callback(err, allNodes);
      });
  },
  searchNode: function(data, callback) {
    console.log("searchNode searchNode", data);
    Node.find({ node: data.node }).exec(function(err, searchNodeData) {
      callback(err, searchNodeData);
    });
  },
  deleteNode: function(data, callback) {
    console.log("deleteNode deleteNode", data);
    Node.destroy({ node: data.node }).exec(function(err, deleteNodeData) {
      console.log("deleteNodeData deleteNodeData", err, deleteNodeData);
      callback(err, deleteNodeData);
    });
  }
};
