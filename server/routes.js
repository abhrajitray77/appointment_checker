const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();
const uri = "mongodb+srv://abhrajitray77:razerblade4@cluster0.l3zdfvv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/departments', async (req, res) => {
  try {
    await client.connect();
    const departmentsCollection = client.db('testdb').collection('departments');
    const departments = await departmentsCollection.find({}).toArray();
    res.json(departments);
    console.log("connected to db");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
});

router.get('/doctors/:departmentName', async (req, res) => {
  try {
    await client.connect();
    const doctorsCollection = client.db('testdb').collection('doctors');
    const doctors = await doctorsCollection.find({ department: req.params.departmentName }).toArray();
    res.json(doctors);
    console.log("connected to db");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
});

module.exports = router;
