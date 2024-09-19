const users = [
    {
        id: 1,
        username: 'super',
        email: 'super@admin.com',
        password: '123', // plain text for simplicity, use bcrypt for hashing
        roles: ['superadmin'],
        groups: []
    }
];

module.exports = users;
