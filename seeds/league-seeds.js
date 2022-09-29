const { League } = require('../models');

const leagueData = [
    {
        league_name: 'Womens National Basketball Association',
        sport_category: 'Basketball',
        numberOfTeams: 12,
        league_id: 1,
    },
    {
        league_name: 'National Football League',
        sport_category: 'Football',
        numberofTeams: 32,
        league_id: 2,
    },
    {
        league_name: 'Major League Baseball',
        sport_category: 'Baseball',
        numberofTeams: 30,
        league_id: 3,
    },
    {
        league_name: 'National Basketball Association',
        sport_category: 'Basketball',
        numberofTeams: 30,
        league_id: 4,
    },
    {
        league_name: 'National Hockey League',
        sport_category: 'Hockey',
        numberofTeams: 32,
        league_id: 5,
    },
    {
        league_name: 'BIG3',
        sport_category: 'Basketball',
        numberofTeams: 12,
        league_id: 1,
    },
];

const seedLeagues = () => League.bulkCreate(leagueData);

module.exports = seedLeagues;