const {Router} = require('express');
const router= Router();


router.get('/', (req,res)=> {
    res.send('<a href="/articles/1">/1</br></a><a href="/articles/2">/2</br></a><a href="/articles/3">/3</br></a>')
});
router.get('/1', (req,res)=> {
    res.render('article', {
        article: 'Statya 1',
        content: 'She ne wmerla'
    })
});
router.get('/2', (req,res)=> {
    res.render('article', {
        article: 'Statya 2',
        content: 'She ne wmerla 2'
    })
});
router.get('/3', (req,res)=> {
    res.render('article', {
        article: 'Statya 3',
        content: 'She ne wmerla 3'
    })
});


module.exports=router;