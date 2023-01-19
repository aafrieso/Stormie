import mongoose from 'mongoose'

const Schema = mongoose.Schema

const stormieSchema = new Schema({
    stormie: String,
    // learned: Boolean
    zipCode: Number,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
  timestamps: true 
})

const Stormie = mongoose.model('Stormie', stormieSchema)

export {
    Stormie
}