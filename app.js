const express = require("express")
const app = express()
const PORT = 3000

//middleware thirdparty
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//middleware thirdparty

//route level middleware
function alwaysCallGreeting (req, res, next) {
    
    console.log("Always Call This Function");
    next()
}

app.use(alwaysCallGreeting) // dijalanin dulu sebelum function // real case untuk authentication


app.get("/helloworld", (req, res) => {
    try {
        let username = ""
        if (username === "febrian") {
            console.log("Silahkan Masuk");
        }else {
            throw {
                code: 404,
                message: "User not found"
            } 
        }
    } catch (error) {
        throw {
            code: error.code,
            message: error.message
        }
    }
})

//middleware error handler
app.get("/cek-error", (req, res) => {
    throw {
        code: 400,
        message: "GAGAL"
    }
    //throw new Error ('SERVER DOWN')
})

app.get("/login", (req, res) => {
    res.send("login page")
})

app.get("/register", (req, res) => {
    res.send("register page")
})

app.get("/home", (req, res) => {
    res.send("home page")
})

function errorHandler (err, req, res, next) { //custom middleware
    //console.log(err.code, "==> THIS IS ALWY");
    let messageReturn = ""
    
    if (err.code === 400) {
        messageReturn= "Bad Request"
    }else if (err.code === 404) {
        messageReturn= "Not Found"
    }
    
    res.status(err.code).json({ "message" : messageReturn })

}

app.use(errorHandler)






app.listen (PORT, () => {
    console.log(`SERVER NYALA BOS ${PORT}`);
}) 