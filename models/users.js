var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userschema=new Schema(
    {
        username:String,
        accesstoken:String,
        fullname:String,
        contactno:Number,
        idno:String

    });

var user=mongoose.model('user',userschema);
module.exports=user;