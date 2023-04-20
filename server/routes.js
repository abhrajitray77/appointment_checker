const express = require('express');

const router = express.Router();

module.exports = (client) => {
  router.get('/departments', async (req, res) => {
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

  router.get('/doctors/:departmentName', async (req, res) => {
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
  router.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  

  return router;
};
