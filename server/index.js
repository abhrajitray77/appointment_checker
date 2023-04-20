const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port =  5000;

// Initialize MongoDB client
const uri = "mongodb+srv://abhrajitray77:razerblade4@cluster0.l3zdfvv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// Pass the MongoDB client to your routes
const routes = require('./routes')(client);
app.use(routes);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  client.connect();
  console.log(`Server running on port ${port}`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});


/* app.get('/departments', async (req, res) => {
  try {
    const departmentsCollection = client.db('testdb').collection('departments');
    const departments = await departmentsCollection.find({}).toArray();
    res.json(departments);
    console.log("connected to db");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/doctors/:departmentName', async (req, res) => {
  try {
    const doctorsCollection = client.db('testdb').collection('doctors');
    const doctors = await doctorsCollection.find({ department: req.params.departmentName }).toArray();
    res.json(doctors);
    console.log("connected to db");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
 */