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
      return queryInterface.bulkInsert('Categories', [
        { name: 'Groceries', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Gas', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Retail', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Dining Out', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Miscellaneous', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Rent', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Gifts', createdAt: new Date(), updatedAt: new Date() },
      ], {});
   
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Categories', [
      { name: 'Groceries' },
      { name: 'Gas' },
      { name: 'Retail' },
      { name: 'Dining Out' },
      { name: 'Miscellaneous' },
      { name: 'Rent' },
      { name: 'Gifts' },
    ], {})
  }
};
