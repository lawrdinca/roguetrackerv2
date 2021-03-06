import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    reporter: String,
    languages: [String],
    selectedFile: String,
    reportCount: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;