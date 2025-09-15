// middileware function

const logRequest = (req,res,next)=>{
console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl} `)
next(); //move to the next phase
}

app.get('/', logRequest ,function(req, res){
    res.send('welcome to our hotel')
})