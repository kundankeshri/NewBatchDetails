const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/countryDetails', (req, res) => {
  var result = [{"key":1, "value":"India"},{"key":2, "value":"Russia"},{"key":3, "value":"Australia"} ];
  res.send({"value": result});
});

router.get('/stateDetails', (req, res) => {
  var result = [{"countryName":"India","value":[{"key":1,"value":"karnataka"},{"key":2,"value":"Bihar"},{"key":3,"value":"Bangal"}]},{"countryName":"Russia","value":[{"key":1,"value":"Abakan"},{"key":2,"value":"Abaza"},{"key":3,"value":"Abazatl"}]},{"countryName":"Australia","value":[{"key":1,"value":"Queensland"},{"key":2,"value":"New South Wales"},{"key":3,"value":"Victoria"}]}];
    res.send({"value": result});
});
module.exports = router;
