console.log("hello man working")

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5173;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
