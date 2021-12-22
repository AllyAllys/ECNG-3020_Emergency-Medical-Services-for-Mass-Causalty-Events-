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
mongoose.connect("mongodb://localhost/EMS")

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
const User = require('./Routes/Users')








//Http
app.use('/Admins',Admins)
app.use('/Users',User)
// setup of the view engine
app.set('view engine','ejs')
app.set('views',__dirname + '/views')

//app.use(express.static(path.join(__dirname, 'public')));

//Server 
app.listen(3000)
app.use('/',indexRouter)



app.use (express.static('public'))
//run()
//async function run(){
  //  const file = await volunteers.find()
  //  .populate("UserID")
  //  console.log(file)
//}   

