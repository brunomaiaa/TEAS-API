import {Schema, model} from 'mongoose';

//What does our data in the database look like? 
//What fields will we be storing?
const teaSchema = new Schema({
    name:String, 
    description:String,
    price:Number,
    brand:String, 
    category:{type:String, enum:{
        values:['GREENTEA','OOLONGTEA','BIOTEA', 'ORGANICTEA'],
        message:'{VALUE} is not supported' //OTHER TEA
    }}
});

//create a usable model from this schema
const Tea = model('tea', teaSchema);

export default Tea;