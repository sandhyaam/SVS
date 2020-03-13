import {Router} from 'express'

import{
    electionLogin,
     addconstituency,
 ResultsData,
    VotersData,
    CandidateData,
    editCandidate,
    updateCandidate,
    editVoter,
    updateVoter,
    CountData
} from './controller'

const router=new Router();

router.get('/',electionLogin)

 router.post('/addconstituency',addconstituency)

 router.get('/ResultsData',ResultsData)
 
router.get('/VotersData',VotersData)

router.get('/CandidateData',CandidateData)

router.get('/editCandidate/:id',editCandidate)

router.put('/updateCandidate/:id',updateCandidate)

router.get('/editVoter/:id',editVoter)

router.put('/updateVoter/:id',updateVoter)

router.get('/CountData',CountData)


export default router;