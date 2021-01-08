var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/food', function (req, res) {
  res.render('food');
});

router.get('/bill', function (req, res) {
  var food = req.query.food
  var qty = req.query.qty

  if (food == 'Pepsi') {
    var rate = 30
    var pic = '/images/pepsi.jpg'
    var amount = qty * rate
    var discount = amount * 5 / 100
    var netAmount = amount - discount
    var description = 'Pepsi Cold drink'
  }

  else if (food == 'Fanta') {
    var rate = 10
    pic = '/images/fanta.jpg'
    var amount = qty * rate
    var discount = amount * 5 / 100
    var netAmount = amount - discount
    description = 'Fanta cold drink'
  }

  else if (food == 'Pizza') {
    var rate = 90
    pic = '/images/pizza.jpg'
    var amount = qty * rate
    var discount = amount * 5 / 100
    var netAmount = amount - discount
    description = 'Pizza hut pizza'
  }


  res.render('bill', { pic: pic, amount: amount, discount: discount, netAmount: netAmount, description: description, rate: rate, qty: qty,discount:discount,netAmount:netAmount });
});




module.exports = router;
