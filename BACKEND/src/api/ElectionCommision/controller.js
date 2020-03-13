import election from './electionCommisionModel'
 import candidate from '../Common/condidateModel'
 import constituency from '../Common/constituencyModel'
import result from '../Common/votingResultModel'
import voter from '../Common/voterModel'
import { sendEmail } from '../Common/email';
import condidate from '../Common/condidateModel';



export const electionLogin = (req,res)=>{
    election.findOne({"userName":req.query.userName,"password":req.query.password},(err,result)=>{
        if(err)
        res.send(err);
        else
        res.send(result);
    })
}


export const VotersData = (req,res)=>{
    voter.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}


export const CandidateData = (req,res)=>{
    candidate.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}


export const editCandidate = (req,res)=>{
    candidate.findById({"_id":req.params.id},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

export const updateCandidate = (req,res)=>{
    candidate.findByIdAndUpdate({"_id":req.params.id},req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            const subject = 'YOUR REQUEST STATUS DETAILS';
            const body = `we are activated your request: <br>userName:${req.body.userName}<br>status: ${req.body.status}<br><br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}



export const editVoter = (req,res)=>{
    voter.findById({"_id":req.params.id},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

export const updateVoter = (req,res)=>{
    voter.findByIdAndUpdate({"_id":req.params.id},req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            const subject = 'YOUR REQUEST STATUS DETAILS';
            const body = `we are activated your request: <br>VoterId:${req.body.voterId}<br>status: ${req.body.status}<br><br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}

export const addconstituency =(req,res)=>{
    constituency.create(req.body,(err,result)=>{
        if(err)
        res.send(err);
        else
        res.send(result);
    })
}

// export const ResultsData = (req, res) => {
//     result.find({ "constituency": req.query.constituency }).populate('voter candidate').exec((err, result) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             const currentData = result.map(data => {
//                 return { id: data._id, voter: data.voter.userName, voterId: data.voterId,candidate: data.candidate.userName,userName:data.candidate.userName, resultCount: data.resultCount,constituency:data.constituency, nominationFor: data.nominationFor, image: data.image, symbol: data.symbol }
//             })
//             res.send(currentData);
//         }
//     })
// }



export const CountData = (req, res) => {
    result.count({"constituency":req.query.constituency}, (err, result) => {
      res.send([result]);
  })
}


export const ResultsData = (req, res) => {
    result.find({ $or: [{ "constituency": req.query.constituency }, { "userName": req.query.constituency }] }).populate('voter candidate').exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const currentData = result.map(data => {
                return { id: data._id, voter: data.voter.userName, voterId: data.voterId,candidate: data.candidate.userName,userName:data.candidate.userName,candidate:data.candidate.userName, resultCount: data.resultCount,constituency:data.constituency, nominationFor: data.nominationFor, image: data.image, symbol: data.symbol }
            })
           
            res.send(currentData);
        }
    })
}