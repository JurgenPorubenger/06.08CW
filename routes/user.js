const {Router} = require('express');
const router= Router();

router.get('/', (req,res)=> {
    res.send('User page')
});
router.get('/123', (req,res)=> {
    res.send('User 123')
});




module.exports=router;