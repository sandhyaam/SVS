import {Router} from 'express'
 
import {
    candidateLogin,
    condidateRegistration,
    statusData,
     getStates,
     getConstituencyNames,
     getResults,
     changepassword

} from './controller'

const router =new Router();

router.get('/candidateLogin',candidateLogin)

router.post('/condidateRegistration',condidateRegistration)

router.get('/statusData',statusData)

 router.get('/getStates',getStates)

 router.get('/getConstituencyNames',getConstituencyNames)

 router.get('/getResults',getResults)

 router.put('/changepassword/:id', changepassword)



export default router

