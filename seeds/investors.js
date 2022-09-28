const { Investor } = require ('../models');

const investorData = [
  {
    investor_name: 'Robert Smith', 
    investment_amount: 1000000000,
    investor_id: 1,
  },

{
  investor_name: 'Brandon Williams',
  investment_amount: 9000000,
  investor_id: 2,
},
{
  investor_name: 'Jim Mclngvale',
  investment_amount: 1000000,
  investor_id: 3,
},
{
  investor_name: 'John Legend',
  investment_amount: 10000000,
  investor_id: 4,
},
{
  investor_name: 'Jose Altuve',
  investment_amount: 993400000,
  investor_id: 5,  
},
{
  investor_name: 'ICE CUBE',
  investment_amount: 2000000000,
  investor_id: 6,
}
];

const seedInvestors = () => Investor.bulkCreate(investorData);

module.exports = seedInvestors;
