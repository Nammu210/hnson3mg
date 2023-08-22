const student = require("../Models/student");

const studentData = async (req, res) => {
  const data = req.body;
  const { Name, email, password, contact } = req.body;
  const result = await student.create({
    Name,
    email,
    password,
    contact,
  });
  return res.send({ msg: "userData has been stored", result: result });
};
const fetchData = async (req, res) => {
  const result = await student.find();
  res.send(result);
};
const greaterThanSalary =async (req,res)=>{
    const result = await student.find({"salary":{"$gt":"30000"}}).toArray()
    res.send(result)
}
const greaterExperience =async (req,res)=>{
    const result = await student.find({"overallExp":{"$gt":"2"}}).toArray()
    res.send(result)
}
const graduatedExp =async (req,res)=>{
    const result = await student.find({"yearGrad":{"$gt":"2015"},"overallExp":{$gt:"1"}}).toArray()
    res.send(result)
}

const updateSalary =async (req,res)=>{
    const result = await student.updateOne({"salary":{"$gt":"70000"}},{"$set":{"salary":"65000"}})
    res.send(result)
}

const deleteEmployee =async (req,res)=>{
    const result = await student.deleteMany({"lastCompany":"Y"})
    res.send(result)
}
module.exports = { studentData, fetchData,greaterThanSalary,greaterExperience,graduatedExp,updateSalary,deleteEmployee };
