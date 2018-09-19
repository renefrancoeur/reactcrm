module.exports = {
//export default {
    user: process.env.MLAB_USER_KEY,
    password: process.env.MLAB_PASSWORD_KEY,
    //db: process.env.MLAB_DB_KEY,
    db: 'reactcrm',
    //mongoURI: `mongodb://${user}:${password}@ds157522.mlab.com:57522/${db}`
    mongoURI: 'mongodb://app72user$er:dru72$koala$$@ds157522.mlab.com:57522/reactcrm'
    //mongoURI: 'mongodb://user:user123@ds157522.mlab.com:57522/reactcrm'
    //mongoURI: 'mongodb://localhost:27017/test'
};