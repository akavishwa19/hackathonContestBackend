const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');


const app=express();
app.use(cors());
app.use(bodyparser.json());

const db=require('./models/index');
db.mongoose.connect(
    "mongodb+srv://studentdb84:DEvPP3Gl8J24QqB2@mongotp.xqpmnt0.mongodb.net/hackathonStudents",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then((res)=>{
    console.log('connected to backend');
}).catch((res)=>{
    console.log('error connecting to backend');
    process.exit();
})

app.get('/',(req,res)=>{
    res.send('hello');
});

const user=require('./routes/route');
app.use('/user',user);

const port=8000;
app.listen(port,()=>{
    console.log('connected');
});



