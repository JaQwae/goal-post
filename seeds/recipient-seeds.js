const { Recipient } = require('../models');

const donationRecipientData = [
    {
        entity: 'HBCUs',
        category: 'University',
        entity_id: 1,
    },
    {
        entity: 'Big Brothers Big Sisters',
        category: 'youth',
        entity_id: 2,
    },
    {
        entity: 'National Urban League',
        category: 'civil rights advocacy',
        entity_id: 3,
    },
    {
        entity: 'Habitat for Humanity',
        category: 'housing',
        entity_id: 4,
    },
    {
        entity: 'Boys & Girls Clubs',
        category: 'youth',
        entity_id: 5,
    },
];

const seedRecipients = () => Recipient.bulkCreate(RecipientData);

module.exports = seedRecipients;