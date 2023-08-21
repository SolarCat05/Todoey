import express from "express";
import bodyParser from "body-parser";
import date from "date-and-time";


const app = express();
const port = 3000;

const items=[];
const Today=["Buy Milk","Clean room","Grocery haul"];
const Work=["Code","Design","Implement"];


const now=new Date();
let Dt=date.format(now, 'ddd, MMM DD');  
let Year=date.format(now, 'YYYY');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Get route for today
app.get("/",(req,res)=>{
    res.render("index.ejs",{listItems:Today,listTitle:"Today",date:Dt,Year:Year});
})

//post route for today
app.post("/Today",(req,res)=>{
    const a=req.body.new; 
    Today.push(a);
    res.render("index.ejs",{listItems:Today,listTitle:"Today",date:Dt,Year:Year});
    console.log(a);
})

//get route for work
app.get("/Work",(req,res)=>{
    res.render("index.ejs",{listItems:Work,listTitle:"Work",date:Dt,Year:Year});
})

//post route for work
app.post("/Work",(req,res)=>{
    const a=req.body.new; 
    Work.push(a);
    res.render("index.ejs",{listItems:Work,listTitle:"Work",date:Dt,Year:Year});
    console.log(a);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });