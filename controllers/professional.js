const { getDB } = require('../data/database');

const fs = require('fs');
const path = require('path');

const data = {
    professionalName: 'Jacquelyn Kulmus',
    base64Image: fs.readFileSync(
        path.join(__dirname, '..', 'profile.png')
    ).toString('base64'),
    nameLink: {
        firstName: 'Jacquelyn',
        url: 'https://github.com/jkulmus'
    },
    primaryDescription: ' is a software development student studying at BYU-Idaho.',
    workDescription1: 'I am learning to build APIs with Node.js and Express.',
    workDescription2: 'This project connects a frontend to my own backend.',
    linkTitleText: 'Connect with me',
    linkedInLink: {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com'
    },
    githubLink: {
        text: 'GitHub',
        link: 'https://github.com/jkulmus'
    }
};

const getData = async (req, res) => {
    try {
        const profile = await getDB()
            .collection('professional')
            .findOne({ _id: 'main-profile' });

        if (!profile) {
            return res.status(404).json({
                message: 'Profile not found'
            });
        }

        res.status(200).json(profile);
    } catch (error) {
        console.error('Could not load profile:', error.message);
        res.status(500).json({
            message: 'Could not load profile'
        });
    }
};

module.exports = { getData, data };