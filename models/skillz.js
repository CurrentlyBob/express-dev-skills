import mongoose from "mongoose"
import { boolean } from "webidl-conversions"

const Schema = mongoose.Schema

const skillzSchema = new Schema({
    text: String,
    smelly: Boolean,
})

const Skillz = mongoose.model('Skillz', skillzSchema)

export{
    Skillz,
}