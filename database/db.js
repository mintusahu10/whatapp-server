import mongoose from 'mongoose';

const Connection = async (username, password) => {
   // const URL = `mongodb://${username}:${password}@chatapp-shard-00-00.1lequ.mongodb.net:27017,chatapp-shard-00-01.1lequ.mongodb.net:27017,chatapp-shard-00-02.1lequ.mongodb.net:27017/WHATSAPPCLONE?ssl=true&replicaSet=atlas-78i8sb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL=`mongodb://${username}:${password}@ac-c6reshe-shard-00-00.y95rnhe.mongodb.net:27017,ac-c6reshe-shard-00-01.y95rnhe.mongodb.net:27017,ac-c6reshe-shard-00-02.y95rnhe.mongodb.net:27017/whatapp-clone?ssl=true&replicaSet=atlas-akns1r-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;