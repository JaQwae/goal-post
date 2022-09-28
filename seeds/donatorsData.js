const { Donator } = require('../models');

const donatorsData = [
  {
    donator_name: 'Jonathan Rocha',
    donation_amount: 500,
    donator_id: 1,
  },
  {
    donator_name: 'Joe Lewis',
    donation_amount: 6500,
    donator_id: 2,
  },
{
   donator_name: 'Jorge Solis',
   donation_amount: 2000,
   donator_id: 3,
},
{
  donator_name 'John Smith',
  donation_amount: 1000,
  donator_id: 4,
},
{
  donator_name: 'Jane Doe',
  donation_amount: 40,
  donator_id: 5,
},
{
donator_name: 'John Wick',
donation_amount: 100,
donator_id: 6,
}
];

const seedDonators = () => Donator.bulkCreate(donatorData);

module.export = seedDonators;