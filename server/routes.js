const express = require('express');

const router = express.Router();

module.exports = (client) => {
  router.get('/departments', async (req, res) => {
    try {
      const departmentsCollection = client.db('testdb').collection('departments');
      const departments = await departmentsCollection.find({}).toArray();
      res.json(departments);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.get('/doctors/:departmentName', async (req, res) => {
    try {
      const doctorsCollection = client.db('testdb').collection('doctors');
      const doctors = await doctorsCollection.find({ Dept_name: req.params.departmentName }).toArray();
      res.json(doctors);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.get('/availability/:docId', async (req, res) => {
    try {
      const availabilityCollection = client.db('testdb').collection('availability');
      const availability = await availabilityCollection.find({ Doc_id: req.params.docId }).toArray();
      res.json(availability);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
 
  
  

  return router;
};
