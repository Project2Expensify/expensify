'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Expenses', [
    { description: 'Soccer Jersey', category_id: 3, user_id: 1, amount: 120.00, date: "2018-06-12", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Suitcase', category_id: 3, user_id: 1, amount: 80.00, date: "2018-06-13", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Headphones', category_id: 5, user_id: 1, amount: 50.00, date: "2018-06-14", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Phone Bill', category_id: 2, user_id: 1, amount: 90.00, date: "2018-06-15", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Plane Ticket', category_id: 4, user_id: 1, amount: 300.00, date: "2018-06-16", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Hotel', category_id: 4, user_id: 1, amount: 150.00, date: "2018-06-17", createdAt: new Date(), updatedAt: new Date() },
    { description: 'World Cup Souvenir', category_id: 3, user_id: 1, amount: 20.00, date: "2018-06-18", createdAt: new Date(), updatedAt: new Date() },
    { description: 'World Cup Game Tickets', category_id: 5, user_id: 1, amount: 100.00, date: "2018-06-18", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Snacks for the plane', category_id: 1, user_id: 1, amount: 30.00, date: "2018-06-18", createdAt: new Date(), updatedAt: new Date() },
    { description: 'Beer at the Stadium', category_id: 1, user_id: 1, amount: 30.00, date: "2018-06-18", createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkInsert('Expenses', [
    { description: 'Soccer Jersey', category_id: 3, user_id: 1, amount: 120.00, date: "2018-06-12" },
    { description: 'Suitcase', category_id: 3, user_id: 1, amount: 80.00, date: "2018-06-13" },
    { description: 'Headphones', category_id: 5, user_id: 1, amount: 50.00, date: "2018-06-14" },
    { description: 'Phone Bill', category_id: 2, user_id: 1, amount: 90.00, date: "2018-06-15" },
    { description: 'Plane Ticket', category_id: 4, user_id: 1, amount: 300.00, date: "2018-06-16" },
    { description: 'Hotel', category_id: 4, user_id: 1, amount: 150.00, date: "2018-06-17" },
    { description: 'World Cup Souvenir', category_id: 3, user_id: 1, amount: 20.00, date: "2018-06-18" },
    { description: 'World Cup Game Tickets', category_id: 5, user_id: 1, amount: 100.00, date: "2018-06-18" },
    { description: 'Snacks for the plane', category_id: 1, user_id: 1, amount: 30.00, date: "2018-06-18" },
    { description: 'Beer at the Stadium', category_id: 1, user_id: 1, amount: 30.00, date: "2018-06-18" },
  ], {});
  }
};
