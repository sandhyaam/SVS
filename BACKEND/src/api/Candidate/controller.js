import condidate from '../Common/condidateModel'
import voter from '../Common/voterModel'
import constituency from '../Common/constituencyModel'
import { sendEmail } from '../Common/email';

 import result from '../Common/votingResultModel'

export const condidateRegistration = (req,res)=>{
    condidate.create(req.body,(err,result)=>{
        if(err){
        res.send(err);
        }
        else{
            const subject = 'Registration Details';
            const body = `Your are successfully registered in Smart Voting System<br><br>userName: ${req.body.userName}<br>Password: ${req.body.password}<br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);       
         }
    })
}


export const candidateLogin = (req, res) => {
    condidate.findOne({ "userName": req.query.userName, "password": req.query.password, "status": "Active" }, (err, result) => {
      if (err)
        res.send(err);
      else
        res.send(result);
    })
  }

export const statusData = (req,res)=>{
    condidate.find({"userName":req.query.userName},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
 }

 
export const getStates = (req,res)=>{
    constituency.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
 }

 export const getConstituencyNames = (req, res) => {
    constituency.find({ "state": req.query.state }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result.map(record => {
                return record;
            }));
        }
    })
}

export const getResults = (req, res) => {
    result.find({ "candidate": req.query.candidate }).populate('candidate').exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const currentData = result.map(data => {
                return { id: data._id,candidate: data.candidate.userName,userName:data.candidate.userName, resultCount: data.resultCount,constituency:data.constituency, nominationFor: data.nominationFor, image: data.image, symbol: data.symbol }
            })
            res.send(currentData);
        }
    })
}


export const changepassword = (req, res) => {
    condidate.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        const subject = 'YOUR CHANGE PASSWORD DETAILS';
        const body = `Your new password below here: <br>userName:${req.body.userName}<br>password: ${req.body.password}<br><br>Thank You.`;
        sendEmail(req.body.email, subject, body);
        res.send([result]);
      }
    })
  }