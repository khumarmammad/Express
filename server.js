const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

const getEmployees = () => {
  const data = fs.readFileSync('employees.json', 'utf8');
  return JSON.parse(data);
};

app.get('/employees', (req, res) => {
  const employees = getEmployees();
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işə salındı`);
});
