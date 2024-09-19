const groups = require('../models/group');
const channels = require('../models/channel');

exports.createGroup = (req, res) => {
    const { groupName } = req.body;

    const newGroup = {
        id: groups.length + 1,
        groupName,
        admin: req.user.id,
        members: [req.user.id],
        channels: []
    };

    groups.push(newGroup);
    res.status(201).json(newGroup);
};

exports.createChannel = (req, res) => {
    const { groupId, channelName } = req.body;
    const group = groups.find(g => g.id == groupId);

    if (!group) {
        return res.status(404).json({ message: 'Group not found' });
    }

    const newChannel = {
        id: channels.length + 1,
        channelName,
        groupId
    };

    channels.push(newChannel);
    group.channels.push(newChannel.id);
    res.status(201).json(newChannel);
};
