var Burger = require('../models').Burger;


var sequelize = require('../models').sequelize;

module.exports = {

  up: function (queryInterface, Sequelize) {
  
    return Burger.bulkCreate([
      {burger_name: "Cheesburger"},
      {burger_name: "Double Cheesburger"},
      {burger_name: "Big Mac"},
      {burger_name: "Grand Mac"},
      {burger_name: "Mac Jr."}
    ])
  },


  down: function (queryInterface, Sequelize) {
  
    return Burger.destroy({where:{ burger_name:
      [
        "Cheesburger",
        "Double Cheesburger",
        "Big Mac",
        "Grand Mac",
        "Mac Jr."
      ]
    }})
  
    .then(function(){
     
      return sequelize.query('ALTER TABLE Burgers AUTO_INCREMENT=1')
    })
  }
};
