const { User } = require('../models');

const userData = [{
        username: 'test1',
        password: '$2b$10$qq6wYW8yXMfO33q.g.JxVewwz2iY3FgZovVRm3Z9yYa/27P9vGYj.'

    },
    {
        username: 'test2',
        password: '$2b$10$qq6wYW8yXMfO33q.g.JxVewwz2iY3FgZovVRm3Z9yYa/27P9vGYj.'
    },
    {
        username: 'test3',
        password: '$2b$10$qq6wYW8yXMfO33q.g.JxVewwz2iY3FgZovVRm3Z9yYa/27P9vGYj.'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;