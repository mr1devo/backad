//import express 
const express=require("express")
const cors=require("cors")
//initializing
const app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

//assign port
app.listen(4005,(request,response)=>{
    console.log("port is running in 4005")
})
//api creation
app.get('/',(request,response)=>{
    response.send("hi")
})



//PLACE.jsx
const placemodel = require('./Placedetails')

//for Submit button
app.post('/new',(request,response)=>{
    console.log(request.body)
    new placemodel(request.body).save();
    response.send("Record saved ")
})


//view
app.get('/view',async(request,response)=>{
    var data = await placemodel.find();
    response.send(data)
})


//delete
app.put('remove/:id',async(request,response)=>{
    let id = request.params.id
    await placemodel.findByIdAndUpdate(id)
    response.send("Record deleted")
})

//edit
app.put('/edit/:id',async(request,response)=>
 {
     let id = request.params.id;
     await placemodel.findByIdAndUpdate(id,request.body)
     response.send("Data updated")
 })

 //
 const multer = require('multer');
 const storage = multer.memoryStorage(); // Store images in memory
 const upload = multer({ storage: storage });

app.post('/photonew', upload.single('placephoto'), async (request, response) => {
    try {
                const { placename, tsee, location } = request.body
                const place = new pd({
                    placename,
                    tsee,
                    Location,
                    placephoto: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                    
                })
                console.log(place)
                await newdata.save();
                res.status(200).json({ message: 'Place added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)




//HOTEL.jsx
const hotelmodel = require('./Hoteldetails')

//for Submit button
app.post('/hnew',(request,response)=>{
    console.log(request.body)
    new hotelmodel(request.body).save();
    response.send("Record saved ")
})


//view
app.get('/hview',async(request,response)=>{
    var data = await hotelmodel.find();
    response.send(data)
})


//delete
app.delete('hremove/:id',async(request,response)=>{
    let id = request.params.id
    await hotelmodel.findByAndDelete(id)
    response.send("Record deleted")
})

//edit
app.put('/hedit/:id',async(request,response)=>
 {
     let id = request.params.id;
     await hotelmodel.findByIdAndUpdate(id,request.body)
     response.send("Data updated")
 })

 //
 //const multer = require('multer');
 const hstorage = multer.memoryStorage(); // Store images in memory
 const hupload = multer({ storage: hstorage });

app.post('/photonew', upload.single('hotelphoto'), async (request, response) => {
    try {
                const { hotelname, htsee, hlocation } = request.body
                const hotel = new hd({
                    hotelname,
                    htsee,
                    hlocation,
                    hotelphoto: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                    
                })
                await newdata.save();
                res.status(200).json({ message: 'Place added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)








//RESTRA.jsx
const restramodel = require('./Restradetails')

//for Submit button
app.post('/rnew',(request,response)=>{
    console.log(request.body)
    new restramodel(request.body).save();
    response.send("Record saved ")
})


//view
app.get('/rview',async(request,response)=>{
    var data = await restramodel.find();
    response.send(data)
})


//delete
app.delete('remove/:id',async(request,response)=>{
    let id = request.params.id
    await restramodel.findByAndDelete(id)
    response.send("Record deleted")
})

//edit
app.put('/redit/:id',async(request,response)=>
 {
     let id = request.params.id;
     await restramodel.findByIdAndUpdate(id,request.body)
     response.send("Data updated")
 })

 //
 //const multer = require('multer');
 const rstorage = multer.memoryStorage(); // Store images in memory
 const rupload = multer({ storage: storage });

app.post('/photonew', upload.single('restraphoto'), async (request, response) => {
    try {
                const { restraname, rtsee, rlocation } = request.body
                const restra = new rd({
                    restraname,
                    rtsee,
                    rlocation,
                    restraphoto: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                    
                })
                await newdata.save();
                res.status(200).json({ message: 'Place added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)
