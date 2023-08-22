const { studentData, fetchData, greaterThanSalary, greaterExperience, graduatedExp, updateSalary, deleteEmployee } = require('../controller/studentData');

const route=require('express').Router();


route.post('/addData',studentData)
route.get('/fetchdata',fetchData)
route.get("/greatersalary", greaterThanSalary)
route.get("/greaterexp", greaterExperience)
route.get("/gradexp", graduatedExp)
route.get("/updateone", updateSalary)
route.get("/deletemany", deleteEmployee)


module.exports=route