import mongose from 'mongoose'

const condidateSchema = new mongose.Schema({
    userName: {
        type: String
    },
    fatherName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNo:{
        type:String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    caste: {
        type: String
    },
    income: {
        type: String
    },
    state: {
        type: String
    },
    constituency:{
        type:String
    },
    nominationFor: {
        type: String
    },
    voterId: {
        type: String
    },
    adharNo: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String
    },
    image: {
        type: String
    },
    symbol: {
        type: String
    }
}, {
    timestamps: true
})

const condidate = mongose.model('candidates', condidateSchema)

export default condidate