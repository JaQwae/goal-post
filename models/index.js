// import models
const League = require('./League');
const Investor = require('./Investor');
const Donor = require('./Donor');
const Recipient = require('./Recipient');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'Cascade'
});

League.hasMany(Donor, {
  foreignKey: 'league_id',
  onDelete: 'CASCADE'
});

League.hasMany(Investor, {
  foreignKey: 'league_id',
});

League.hasMany(Recipient, {
  foreignKey: 'league_id',
});


Investor.belongsTo(League, {
  foreignKey: 'league_id'
})

Donor.belongsTo(League, {
  foreignKey: 'league_id'
})






// // Recipients belongToMany (Donors & Leagues)

// // Leagues have many Investors

module.exports = { League, Donor, Investor, Recipient, User, Post, Comment }




// LeagueLeague.hasMany(Donor, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: //TBD,
//     unique: //TBD
//   },
//   // Define an alias for when data is retrieved
//   as:
// });

// League.hasMany(Investor, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: //TBD,
//     unique: //TBD
//   },
//   // Define an alias for when data is retrieved
//   as:
// });





// // Products belongsTo Category
// Product.belongsTo(Category, {foreignKey: 'category_id'});

// // Categories have many Products
// Category.hasMany(Product, {foreignKey: 'category_id'});

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'});

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id'});
