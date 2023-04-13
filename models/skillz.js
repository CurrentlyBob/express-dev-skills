import mongoose from "mongoose"
import { boolean } from "webidl-conversions"

const Schema = mongoose.Schema

const skillzSchema = new Schema({
    text: string,
    smelly: boolean,
})

const Skillz = mongoose.model('Todo', todoSchema)

export{
    Skillz,
}