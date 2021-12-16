import mongoose from 'mongoose';

let MONGODB_URI = process.env.PROD_MONGODB || "URL"

mongoose.set('returnOriginal', false);

mongoose
	.connect(MONGODB_URI)
	.catch((error) => console.error('Error connecting to MongoDB:', error.message))

mongoose.connection.on('disconected', () => console.log('Disconnected from MongoDB!'))

mongoose.connection.on('error', (error) => console.error(`MongoDB connectino error: ${error}`))

export default mongoose.connection