'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Gadgets', [{
      nama_barang: 'Lenovo Legion 5 Pro',
      harga: '2500000',
      kategori: 'Smartphone',
      gambar: 'https://pemmzchannel.com/wp-content/uploads/2023/06/Lenovo-Legion-5-Pro.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Gadgets', null, {});
  }
};
