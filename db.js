const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require('dotenv');
const twilio = require('twilio');
dotenv.config();
app.use(cors());
app.use(express.json());
//app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Advait@2234",//your sql database password
  database: "cars",//your database name
});
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'advait.h.k.1234@gmail.com',//your mail id through which you wants to send the mail
    pass: 'Kulkarni@2234',// you app password of gmail
  },
});

var systemOtp="****";
app.post("/verifyOtp",(req,res)=>{
  const userOtp=req.body.otp;
  if(userOtp===systemOtp){
    res.send("verified")
  }
  else{
    res.send("error")
  }
})
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
app.post("/sendOtp",(req,res)=>{
  const mobileNumber=req.body.phoneNumber;
  var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  systemOtp=seq;
  client.messages
    .create({
      to: "+91"+mobileNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: `Your project OTP is: ${seq}`,
    })
    .then(() => {
      console.log(`OTP sent successfully to ${mobileNumber}`);
      //res.status(200).json({ message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      //res.status(500).json({ error: 'Failed to send OTP' });
    });
  res.send("otp send")
  console.log(seq);
})
app.post("/register",(req,res)=>{
  const email=req.body.Email;
  const pwd=req.body.pwd;
  const phoneNo=req.body.PhoneNo;
  const name=req.body.name;
  db.query("INSERT INTO User (emailId,password,phoneNo,name) VALUES (?,?,?,?)",
  [email,pwd,phoneNo,name],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("success");
    }
  })
});
app.post("/verifyUser",(req,res)=>{
  const email=req.body.email;
  const pwd=req.body.pwd;
  db.query("select * from User where emailId=? and password=?",[email,pwd],
  (err,result)=>{
    if(err || result.length===0){
      console.log(err);
      res.send("Incorrect credential")
    }
    else{
      console.log(result)
      res.send("verify")
    }
  })
  app.post("/verifyorder",(req,res)=>{
    const model=req.body.model;
    const brand=req.body.brand;
    db.query("select * from Order where model=? and brand=?",[model,brand],
    (err,result)=>{
      if(err || result.length===0){
        console.log(err);
        req.send("Incorrect Credentials")
      }
      else{
        console.log(result)
        res.send("Order Cancelled")
      }
    })
  })
})
app.get("/allCars",(req,res)=>{
  db.query("select * from carDetail",
  (err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})
app.get("/fetchCar/:id",(req,res)=>{
  const Id=req.params.id;
  console.log(Id)
  db.query("select * from carDetail where carId=?",[Id],
  (err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.send(result);
    }
  })
})
app.delete("/delete/:id",(req,res)=>{
  const Id=req.params.id;
  db.query("delete from carDetail where carId=?",[Id],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
  
})
app.put("/updateDetail",(req,res)=>{
  const cost=req.body.price;
  const id=req.body.id;
  db.query("update carDetail set price=? where carId=?",[cost,id],
  (err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  }
  )
})

app.get("/sendmail/:email",(req,res)=>{
  const email=req.params.email;
  const mailOptions = {
    from: 'advait.h.k.1234@gmail.com',//your mail id
    to: email,
    subject: 'Test Email from All about Cars',
    text: 'Your request reached us.Our support person will contact you for further process.',
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      res.send("send")
      console.log('Email sent successfully!', info.response);
    }
  });
})
app.post("/addCar",(req,res)=>{
  const color=req.body.color;
  const bootspace=req.body.bootspace;
  const mileage=req.body.mileage;
  const model=req.body.model;
  const price=req.body.price;
  const brand=req.body.name;
  db.query("insert into carDetail (color,model,brand,mileage,bootSpace,price) values (?,?,?,?,?,?);",[color,model,brand,mileage,bootspace,price],
  (err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  }
  )
})
app.listen(3001, () => {
    console.log("server is on port 3001");
  });