import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  commenter: { type: Schema.Types.ObjectId, ref: "Profile"},
})

const bookSchema = new Schema({
  name: String,
  author: String,
  rating: Number,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  comments: [commentSchema]
}, {
  timestamps: true 
})

const Book = mongoose.model('Book', bookSchema)

export {
    Book
}