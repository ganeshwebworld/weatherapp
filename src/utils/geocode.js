const request = require('request');
 
 const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=sk.eyJ1IjoiZ2FuZXNoMTEiLCJhIjoiY2tpb2c2emE1MWNybjJycGs1MDJtYnYyZSJ9.1rmH3aiennNMOx73B2VNVA';

    request ({url, json:true}, (error, {body})=>{
             if(error){
                 callback("Unable to connect to weather API", undefined);
            } else if(body.features === 0){
                 callback("Result not found plz try other search", undefined);

            } else {
        //         const lat = JSON.parse(response.body.features[0].center[1]);
        //         const lang = JSON.parse(response.body.features[0].center[0]);
        //         console.log("Mumbai Latitude "+ lat +" and langitude " + lang);
                callback('', {
                    lat: body.features[0].center[1],
                    lang: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }

    })
        
}

 
 module.exports = geocode