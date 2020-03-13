import mongoose from 'mongoose'

const constituencySchema = new mongoose.Schema({
    state:{
        type:String
    },
    constituency:{
        type:String
    }
},{
    timestamps:true
})

const constituencyModel=mongoose.model('constituencies',constituencySchema)

export default constituencyModel