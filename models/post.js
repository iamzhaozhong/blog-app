import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Post = new Schema(
	{
		title: {type: String, required: true},
		author: {type: String, required: true},
		topic: {type: String, required: true},
		content: {type: String, required: true}
	},
	{ timestamp: true }
)

export default mongoose.model('posts', Post)