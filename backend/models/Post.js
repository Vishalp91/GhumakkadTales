import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    title : {
        type : String,
        required : true
    },
    image : {
        url : String,
        filename : String
    },
    content : {
        type : String,
        required : true,
        maxLength : 3000
    },
    location : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    
}, {timestamps : true});

const Post = mongoose.model("Post", postSchema);

export default Post;