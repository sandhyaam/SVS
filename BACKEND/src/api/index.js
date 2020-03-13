import {Router} from 'express'

import ElectionCommision from './ElectionCommision'
 import Voter from './Voter'
 import Candidate from './Candidate'

const router=new Router();

router.use('/ElectionCommision',ElectionCommision)
 router.use('/Voter',Voter)
 router.use('/Candidate',Candidate)

export default router;