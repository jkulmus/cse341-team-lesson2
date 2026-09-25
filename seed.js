require('dotenv').config();

const { MongoClient } = require('mongodb');
const { data } = require('./controllers/professional');

async function seedProfile() {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();

        const collection = client
            .db('professionalDB')
            .collection('professional');
        
        await collection.updateOne(
            { _id: 'main-profile' },
            { $set: data },
            { upsert: true }
        );

        console.log('Profile saved to MongoDB!');
    } finally {
        await client.close();
    }
}

seedProfile().catch((error) => {
    console.error('Could not save profile:', error.message);
    process.exitCode = 1;
});