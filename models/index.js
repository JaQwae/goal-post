// import models
const League = require('./League');
const Investor = require('./Investor');
const Donor = require('./Donor');
const Recipient = require('./Recipient');

League.hasMany(Investor, {
  // Define the third table needed to store the foreign keys
  through: {
    model: //TBD,
    unique: //TBD
  },
  // Define an alias for when data is retrieved
  as:
});



// Recipients belongToMany (Donors & Leagues)

// Leagues have many Investors

module.exports = { League, Investor, Donor, Recipient };





// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});

// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id'});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id'});
