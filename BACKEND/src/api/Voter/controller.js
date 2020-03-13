import voter from '../Common/voterModel';
import candidate from '../Common/condidateModel';
import Voteresults from '../Common/votingResultModel';
import constituency from '../Common/constituencyModel'
import { sendEmail } from '../Common/email';

export const voterRegistration = (req, res) => {
  voter.create(req.body, (err, result) => {
    if (err){
      res.send(err);
    }
    else{
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Smart Voting System<br><br>userName: ${req.body.userName}<br>Password: ${req.body.password}<br>Status:${req.body.status}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}


export const voterLogin = (req, res) => {
  voter.findOne({ "userName": req.query.userName, "password": req.query.password, "status": "Active" }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const forgotpassword = (req, res) => {
  voter.findOne({ "email": req.query.email }, (err, result) => {
      if (err) {
          res.send(err);
      }
      else {
          const subject = 'Credentials Recived';
          const body = `userName: ${result.userName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
          sendEmail(req.query.email, subject, body);
          res.send(result);
      } 
  })
}

export const candidateData = (req, res) => {
  candidate.find({ "constituency": req.query.constituency }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}

export const voterProfile = (req, res) => {
  voter.find({ "userName": req.query.userName }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result.map(record => {
        return record;
      }));
    } 0
  })
}


export const updateProfile = (req, res) => {
  voter.findByIdAndUpdate({"_id":req.params.id}, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const getConstituency = (req, res) => {
  constituency.find((err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}


export const getVoting = (req, res) => {
  candidate.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}

export const VotingResults = (req, res) => {
  candidate.findById(req.body.candidate, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      req.body.candidate = result._id;
      req.body.userName = result.userName;
      req.body.constituency=result.constituency;
      req.body.nominationFor = result.nominationFor;
      req.body.image = result.image;
      req.body.symbol = result.symbol;
      Voteresults.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      })

    }
  })
}

export const getResult = (req, res) => {
  Voteresults.find({ "voter": req.query.voter }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  })
}


export const chnagepassword = (req, res) => {
  voter.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
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

export const getResults = (req, res) => {
  Voteresults.find({}).populate('candidate').exec((err, result) => {
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