const express= require('express');
const { protect, authorize } = require('../middleware/authMiddleware');
const { getCourse, createCourse, updateCourse, deleteCourse, getCourseByID } = require('../controllers/courseController');
const courseRoute=express.Router();
courseRoute.get("/",getCourse)
courseRoute.post("/",protect,authorize('instructor','admin'),createCourse)
courseRoute.put("/:id",protect,authorize('instructor','admin'),updateCourse)
courseRoute.get("/:id",getCourseByID)
courseRoute.delete("/:id",protect,authorize('instructor','admin'),deleteCourse)
module.exports = courseRoute;