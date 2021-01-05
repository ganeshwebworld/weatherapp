const request = require("request");


const forecast = (location, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=ef66fdec6717933f1fe9ae616506b63e&query="+ encodeURIComponent(location);
    
    request ({url, json:true}, (error, {body})=>{
    //const data = JSON.parse(response.body);
   
    if(error){
        callback("Unable to connect to forcast API", undefined);
    } else if(body.success === false){
        callback("Result not found plz try other search", undefined);
    
    } else {
     
        callback('', "Now "+location+" have temtrature of "+ body.current.feelslike+" degrees");  
     
    }
     })
    }

    module.exports = forecast