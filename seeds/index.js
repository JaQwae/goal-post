// Seeds requires 

// ________Uncomment once models and seeds data created__________


const sequelize = require('../config/connection');
const { League } = require('../models');
const leagueData = require('./league-seeds.json');
const { Donor } = require('../models');
const donorData = require('./donor-seeds.json');
const { Investor } = require ('../models');
const investorData = require('./investor-seeds.json');
const { Recipient } = require('../models');
const recipientData = require('./recipient-seeds.json');
const userData = require('./userData');
const { User } = require('../models');
const commentData = require('./commentData')
const { Comment } = require('../models');
const postData = require('./postData');
const { Post } = require('../models');

const seedALL = async () => {

    await sequelize.sync({ force: true});
    console.log('\n----- DATABASE SYNCED -----\n');

    await  League.bulkCreate(leagueData);
    console.log('\n----- LEAGUE SEEDED -----\n');

    await  Donor.bulkCreate(donorData);
    console.log('\n----- DONORS SEEDED -----\n');

    await Investor.bulkCreate(investorData);
    console.log('\n----- INVESTOR SEEDED -----\n');

    await Recipient.bulkCreate(recipientData);
    console.log('\n----- RECIPIENT SEEDED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- USER SEEDED -----\n');


    await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- POST SEEDED -----\n');

    await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- COMMENT SEEDED -----\n');

    process.exit(0)
};

seedALL();