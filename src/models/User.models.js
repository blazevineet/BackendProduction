import mongoose,{Schema} from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true,
        trim:true,
        
    },
    coverimage:{
        type:String,
        
    },
    watchhistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String,
        
    }

},{
    timestamps:true,
})
UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})
UserSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
UserSchema.methods.generateAccessToken=function(){
    return JWT.sign(
        {id:this._id,
        username:this.username,
        email:this.email,
        fullname:this.fullname,


    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
}
UserSchema.methods.generateRefreshToken=function(){
    return JWT.sign(
        {id:this._id
        }  ,
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
}   
export const user =mongoose.model("user",UserSchema)