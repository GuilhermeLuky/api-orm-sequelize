'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
        name: 'Anderson Souza',
        ativo: true,
        email: 'andersons@andersons.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      name: 'Joaquim Moura',
      ativo: true,
      email: 'joaquim@joaquim.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Tertulino Costa',
      ativo: true,
      email: 'tertulino@tertulino.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Melquizedeque Aarão',
      ativo: true,
      email: 'melquizedeque@melquizedeque.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ana Souza',
      ativo: true,
      email: 'ana@ana.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcos Cintra',
      ativo: true,
      email: 'marcos@marcos.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'kaio Sastre',
      ativo: true,
      email: 'kaio@kaio.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Valdir Coimbra',
      ativo: true,
      email: 'valdir@valdir.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Junilce Aarão',
      ativo: true,
      email: 'junilce@junilce.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
 