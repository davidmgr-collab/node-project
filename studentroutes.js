const express=require('express');
const router=express.Router();
const{
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent,
}=require("../controllers/studentControllers");
router.get("/students" ,getStudents);
router.get("/students/:id" ,getStudent);
router.post("/students" ,addStudent);
router.put("/students" ,updateStudent);
router.delete("/students" ,deleteStudent);
module.exports=router;