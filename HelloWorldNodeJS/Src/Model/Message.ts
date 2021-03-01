import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    postDate: {
        type: String,
        required: true
    }
})

export default mongoose.model('messages', messageSchema);