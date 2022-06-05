const router = require('express').Router();
const countryController = require('../controllers/country_controller');


router.post('/', countryController.searchCountry);
router.get('/', countryController.allCountries);
router.get('/:id', countryController.oneCountry);

module.exports = router;