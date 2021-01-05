
console.log("You are at client sidte");


// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

// fetch("http://localhost:3000/weather?address=satara").then((response) => {
//     response.json().then((data)=>{
//         if(data.error)
//         {
//             console.log(data.error);
//         } else {
//         console.log(data);
//     }
//     })
// })

const weatherform = document.querySelector('form');
const searchterm = document.querySelector("input")

const message = document.querySelector("#location")
const errorMessage = document.querySelector("#errorm")

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchterm.value
    errorMessage.textContent ="Loding....."
    if(location.length < 3)
    {
        //console.log("Please provide valid order")
        errorMessage.textContent ="No data found"
    } else {
        fetch("http://localhost:3000/weather?address="+location).then((response) => {
        response.json().then((data)=>{
            console.log(data);
            if(data.error)
            {
                //console.log(data.error);
                errorMessage.textContent ="No data found"
            } else {
                message.textContent = "location: "+data.DataLocation+" forcast: "+data.DataForcast
                errorMessage.textContent ="";
            //console.log(data);
        }
        })
    })

    }
    console.log("running")
})