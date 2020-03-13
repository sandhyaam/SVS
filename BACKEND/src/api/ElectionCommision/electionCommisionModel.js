import mongoose from 'mongoose'

const electionSchema =new mongoose.Schema({
    userName:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps:true
})

const election=mongoose.model('elections',electionSchema)

export default election