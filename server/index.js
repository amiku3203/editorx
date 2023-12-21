const express = require("express")

const cors= require("cors")

const Axios= require("axios")

const PORT= 8000;

const app= express();

app.use(cors());

app.use(express.json());

app.post("/compile", (req,res)=>{
     //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;
 
    if (language === "python") {
        language = "py"
    }
 
    let data = ({
        "code": code,
        "language": language,
        "input": input
    });
    let config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    //calling the code compilation API
    Axios(config)
        .then((response) => {
            res.send(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
})

app.listen(PORT || process.env.PORT, function(err){
           if(err){
             console.log("Error in Connecting to server Beacuse of this Err", err);
           }
           console.log(`SuccessFully Connected To Server on PORT , ${PORT}`)
})
