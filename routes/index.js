const {Router} = require('express');
const router= Router();

router.get('/', (req,res)=> {
    res.send('Home page')
});




module.exports=router;