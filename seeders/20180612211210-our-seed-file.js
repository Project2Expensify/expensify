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
        { name: 'Food', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bills', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Retail', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Travel', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Miscellaneous', createdAt: new Date(), updatedAt: new Date() },
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
      { name: 'Food' },
      { name: 'Bills' },
      { name: 'Retail' },
      { name: 'Travel' },
      { name: 'Miscellaneous' },
    ], {})
  }
};
