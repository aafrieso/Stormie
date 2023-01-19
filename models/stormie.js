import mongoose from 'mongoose'

const Schema = mongoose.Schema

const stormieSchema = new Schema({
    stormie: String,
    learned: Boolean
}, {
  timestamps: true 
})

const Stormie = mongoose.model('Stormie', stormieSchema)

export {
    Stormie
}