const axios = require('axios');

const allCountries = async (req, res) => {
    try {
        const all = await axios.get('https://restcountries.com/v3.1/all');
        res.render('./data/countries', { all: all.data });
    }
    catch (err) {
        console.log(err)
    }

}

const oneCountry = async (req, res) => {
    const ulkeno = req.params.id;
    try {
        const all = await axios.get('https://restcountries.com/v3.1/all');
        res.render('./data/country', { ulke:all.data[ulkeno-1]});
    } catch (error) {
        console.log(error)
    }
}
const searchCountry = async (req, res) => {
    const search= req.body.search;
    
    try{
        const one = await axios.get('https://restcountries.com/v3.1/name/'+search);
        res.render('./data/country', { ulke:one.data[0]});        
    }
    catch(err) {
        console.log(err)
    }
    
    
}
module.exports = {
    allCountries,
    oneCountry,
    searchCountry
};