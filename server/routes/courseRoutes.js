const express= require('express');
const { getCourse, createCourse, updateCourse, deleteCourse, getCourseByID } = require('../controllers/courseController');
const courseRoute=express.Router();
courseRoute.get("/",getCourse)
courseRoute.post("/",createCourse)
courseRoute.put("/:id",updateCourse)
courseRoute.get("/:id",getCourseByID)
courseRoute.delete("/:id",deleteCourse)
module.exports = courseRoute;