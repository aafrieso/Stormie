import mongoose from 'mongoose'

const Schema = mongoose.Schema

const stormieSchema = new Schema({
    stormie: String,
    learned: Boolean
})

const Stormie = mongoose.model('Stormie', stormieSchema)

export {
    Stormie
}