const express = require('express')
const router = express.Router();
const Speeches = require('../models/speeches')

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
// get all speeches
//http://localhost:3000/speeches
router.get('/', async (req,res) => {
    console.log('resource requested');
    try {
        const speeches = await Speeches.find()
        res.send(speeches)
    }catch (error){
        console.log(error);
        res.status(500).json({ message: error.message})
    }
    //res.send('These crud operations are currently under development');
    //res.end();
    console.log('resource served');
})
// get one speech for passed intent
//http://localhost:3000/speeches/Customer.Info;Customer.Stat;None;Schedule
router.get('/:intent', async (req,res) => {
    console.log('resource requested')
    console.log(req.params.intent)
    let speech
    try {
        speech = await Speeches.find({"intent":req.params.intent}, {"speechTemplate":1})
        if (speech == null){
            return res.status(400).json({
                message: 'cannot find stated Intent'
            })
        }
        res.send(speech)
    } catch (error){
        return res.status(500).json({
            message: error.message
        })
    }

    //res.send('These crud operations are currently under development');
    //res.end();
    //req.params.intent
    console.log('resource served');
})
// create new speech with new intent
//http://localhost:3000/speeches
//{
    //   "intent" : "Customer.Info",
    //   "speechTemplate" : "we are approaching the Customer Lucas Oil. Last year you had a Year to date Turnover of 12.300 Euro. This year you are at 10.100 Euro. You have a gap of 2.100 Euro in order to transform the trend into positive. There are as well some items in the Purchase history of Lucas Oil that Fred is not buying anymore. You will find in Speedy the list of them. I prepared a special offer for them in order to try to sell them again."
//}
router.post('/', async (req,res) => {
    console.log('resource create request received')
    console.log(req.body)
    const speech = new Speeches({
        intent: req.body.intent,
        speechTemplate: req.body.speechTemplate,
        createdOn: req.body.createdOn
    })
    try{
        const newSpeech = await speech.save()
        res.status(201).json(newSpeech);
    } catch (error){
        res.status(400).json({message: error.message})
    }
    //res.send('These crud operations are currently under development');
    //res.end();
    console.log('resource create request completed')
})
// update existing speech for passed intent
router.patch('/:intent', (req,res) => {
    res.send('These crud operations are currently under development');
    res.end();
})
// delete existing speech for passed intent
router.delete('/:intent', (req,res) => {
    res.send('These crud operations are currently under development');
    res.end();
})

module.exports = router