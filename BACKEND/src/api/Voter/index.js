import {Router} from 'express'

import {
    voterRegistration,
    voterLogin,
    forgotpassword,
    voterProfile,
    updateProfile,
    candidateData,
    getVoting,
    VotingResults,
    getResult,
    getConstituency,
    chnagepassword,
    getResults
    
} from './controller'

const router=new Router();

router.post('/voterRegistration',voterRegistration)

router.get('/voterLogin',voterLogin)

router.get('/forgotpassword',forgotpassword)


router.get('/candidateData',candidateData)

router.get('/voterProfile', voterProfile)

router.put('/updateProfile/:id', updateProfile)

router.get("/getVoting/:id",getVoting)

 router.post('/VotingResults',VotingResults)

 router.get('/getResult',getResult)

 router.put('/chnagepassword/:id', chnagepassword)

 router.get('/getConstituency',getConstituency)

 router.get('/getResults',getResults)



export default router;