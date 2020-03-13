import mongose from 'mongoose'

const voterSchema=new mongose.Schema({
    userName:{
        type:String
    },
    fatherName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    constituency:{
        type:String
    },
    village:{
        type:String
    },
    mandal:{
        type:String
    },
    caste:{
        type:String
    },
    voterId:{
        type:String
    },
    adharNo:{
        type:String
    },
    address:{
        type:String
    },
    status:{
        type:String
    },
    image:{
        type:String
    }
},{
    timestamps:true
})

const voter=mongose.model('voters',voterSchema)

export default voter
