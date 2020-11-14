// Using Node.js `require()`
const mongoose = require('mongoose');

const URI = process.env.URI ;
//define a connection
exports.mongoose = async () => {
try {
    await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
console.log("mongoose is connected...");
}
catch (err){
    console.error(err);
}
}

