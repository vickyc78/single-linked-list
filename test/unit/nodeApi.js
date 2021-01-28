var chai = require("chai"),
  chaiHttp = require("chai-http");
var assert = require("chai").assert;
chai.use(chaiHttp);
var url = "http://localhost:1337";
var sendData = {
  node: 5,
  order: 1
};
var getNodeData = {};

describe("Node Controller API", function() {
  it("Add Node", function(done) {
    chai
      .request(url)
      .post("/createNode")
      .send(sendData)
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });
  it("Get Length Of Node", function(done) {
    chai
      .request(url)
      .get("/lengthOfNode")
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });

  it("Get All Node", function(done) {
    chai
      .request(url)
      .get("/getAllNodes")
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });

  it("Order Node", function(done) {
    chai
      .request(url)
      .post("/orderNode")
      .send({
        order: sendData.order
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });

  it("Search Node", function(done) {
    chai
      .request(url)
      .post("/searchNode")
      .send({
        node: sendData.node
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });

  it("Delete Node", function(done) {
    chai
      .request(url)
      .post("/deleteNode")
      .send({
        node: sendData.node
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        done();
      });
  });
});
