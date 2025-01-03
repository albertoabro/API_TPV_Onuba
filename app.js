const app = require('./adpaters/express/server');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

module.exports = {app, server};