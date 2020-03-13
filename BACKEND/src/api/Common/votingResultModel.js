import mongoose from 'mongoose'

const resultSchema=new mongoose.Schema({
    voter:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"voters"
    },
    candidate: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "candidates"
    },
    userName:{
        type:String
    },
    voterId:{
        type:String
    },
    constituency:{
        type:String
    },
    nominationFor:{
        type:String
    },
    image:{
        type:String
    },
    symbol:{
        type:String
    },
    resultCount:{
        type:String
    }
},{
    timestamps:true
})

const result=mongoose.model('Voteresults',resultSchema)

export default result