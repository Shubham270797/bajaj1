const express = require('express'); 
  
const app = express(); 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
const port = 8000;  
  
app.post('/bfhl', function (req, res) {
    
  console.log(req.body);
  const validNumbers = req.body.data?.filter(Number);
  const str = req.body.data?.filter(item => typeof item === 'string');
    return res.send({
        "is_success":true,
        "user_id":"shubham_tambe_27071997",
        "email":"shubhamtambe27797@gmail.com",
        "roll_number":"Abc123",
        "numbers":validNumbers,
        "alphabets":str
   });
}); 

app.listen(port, function (err) {
   if(err){
       console.log("Error while starting server");
   }
   else{
       console.log("Server has been started at "+port);
   }
})