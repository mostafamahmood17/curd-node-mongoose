const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const areaSchema = new Schema({
    county : { 
        type: String, 
        unique: true, 
        trim: true 
    },
    city : { 
        type: String, 
        unique: true, 
        trim: true 
    }, 
    officialName:{
        type: String,
        trim: true
    }
}, 
{
        timestamps: true,
        versionKey : false
});


module.exports = mongoose.model('Area', areaSchema);
