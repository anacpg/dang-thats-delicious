const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')


// // Do work here
// router.get('/', (req, res) => {
// 	// const wes = { name: 'Wes', age: 100, cool: true};
//   // res.send('Hey! It works!');
//   // res.send(wes);
//   // res.send(req.query.name); // localhost:7777/?name=kait&age=100
//   // res.json(req.query);
//   res.render('hello', {
// 	  name: 'wes',
// 	  dog: req.query.dog, //localhost:7777/?dog=kait
// 	  title: 'I love food'
//   });
// });

// router.get('/reverse/:name', (req, res) => {
// 	const reverse = [...req.params.name].reverse().join('');
// 	res.send(req.params.name);
// })

// router.get('/', storeController.homePage);
// router.get('/', storeController.myMiddleware, storeController.homePage);
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

module.exports = router;
