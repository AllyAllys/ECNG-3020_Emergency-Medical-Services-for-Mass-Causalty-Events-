const dot= require('dotenv').config() 
const mongoose = require('mongoose')
const express = require('express')
const cors = require ('cors');

const indexRouter = require('./Routes/index')
const app = express()


//Cors middleware 
app.use(cors())

//Body Parser 
app.use(express.urlencoded({extended: false})); 
app.use(express.json());



//Connecting to MongoDB
mongoose.connect("mongodb://localhost/EMS",()=>{
    console.log("Database Connected")
},
e=> console.error(e))

//Mongoose Schema Models
const Users = require("./DataModels/Users.model")
const Admin = require("./DataModels/Admins.model")
const Ambulance_Information = require("./DataModels/Ambulance_Information.model")
const Chatbox = require("./DataModels/Chatboxs.model")
const Disaster_manager= require("./DataModels/Disaster_managers.model")
const emergency_responder= require("./DataModels/Emergency_responders.model")
const ems_dispatcher= require("./DataModels/Ems_dispatcher.model")
const First_responders = require("./DataModels/First_responders.model")
const health_staff_tracking = require("./DataModels/Health_staff_tracking.model")
const Healthstaff= require("./DataModels/Healthstaff.model")
const incident_dashboard= require("./DataModels/Incident_dashboard.model")
const incidentevent= require("./DataModels/Incidentevent.model")
const itemdescription= require("./DataModels/Itemdescription.model")
const lawenforcement= require("./DataModels/Lawenforcement.model")
const medicalsupplies_itemrequest = require("./DataModels/Medicalsupplies_itemrequest.model")
const medicalsupplies_order=require("./DataModels/Medicalsupplies_order.model")
const missingperson_dash=require("./DataModels/Missingperson_dash.model")
const patient_victim_identifications= require("./DataModels/Patient_victim_identification.model")
const publics= require("./DataModels/Public.model")
const volunteers= require("./DataModels/Volunteer.model")
const LawenforcementModel = require('./DataModels/Lawenforcement.model')

//Routes 
const Admins= require('./Routes/Admins')
const Ambulance= require('./Routes/Ambulance_Information')
const Manager = require('./Routes/Disaster_managers')
const Emergencyresponder= require('./Routes/Emergency_responders')
const Dispatcher = require('./Routes/Ems_dispatcher')
const Firstresponder= require('./Routes/First_responders')
const Healthstafftracking= require('./Routes/Health_staff_tracking')
const staff= require('./Routes/Healthstaff')
const incidentdash= require('./Routes/Incident_dashboard')
const event = require('./Routes/Incident_event')
const Missingperson= require('./Routes/Missingperson_dash')
const patient = require('./Routes/Patient_victim_identification')
const public = require('./Routes/Public')
const volunteer= require('./Routes/Volunteer')
const User = require('./Routes/Users')
const Order = require('./Routes/Medicalsupplies_order')
const Items = require('./Routes/Medicalsupplies_itemrequest')
const Itemdescription= require('./Routes/Itemdescription')
const law = require('./Routes/Lawenforcement')

//Http
app.use('/Admins',Admins)
app.use('/Ambulancetracking',Ambulance)
app.use('/Disastermanager',Manager)
app.use('/Emergencyresponders',Emergencyresponder)
app.use('/EMSdispatcher',Dispatcher)
app.use('/Firstresponder',Firstresponder)
app.use('/Healthstafftracking',Healthstafftracking)
app.use('/Healthstaff',staff)
app.use('/Incidentdashboard',incidentdash)
app.use('/Event',event)
app.use('/Missingpersondashboard',Missingperson)
app.use('/Patientvictiminformation',patient)
app.use('/PublicUser',public)
app.use('/Lawenforcement',law)
app.use('/VolunteerUser',volunteer)
app.use('/Users',User)
app.use('/Orders',Order)
app.use('/Itemrequests',Items)
app.use('/Itemdescriptions',Itemdescription)


// setup of the view engine
app.set('view engine','ejs')
app.set('views',__dirname + '/views')

//app.use(express.static(path.join(__dirname, 'public')));

//Server 
app.listen(3000)
app.use('/',indexRouter)


app.use (express.static('public'))
/* 
run()
async function run(){
 const file = await incident_dashboard.find()
 .populate("PublicID")
  console.log(file)
}   
*/ 
//ERRORS

app.use((req,res,next)=>{
    const error = new Error ('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });


});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*"),
    ("Origin,X-Requested-With,Content-Type,Accept, Authorization");

    if (req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
        
    }
});
