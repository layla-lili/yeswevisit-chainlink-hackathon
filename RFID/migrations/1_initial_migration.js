const Migrations = artifacts.require("Migrations");
const Visit = artifacts.require("Visit");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Visit);
};
