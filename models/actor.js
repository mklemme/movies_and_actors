"use strict";

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define("Actor", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Actor;
};
