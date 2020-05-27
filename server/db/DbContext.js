import mongoose from "mongoose";
import Classroom from "../models/Classroom";
import Student from "../models/Student";
import Submission from "../models/Submission";

class DbContext {
  Classrooms = mongoose.model("Classroom", Classroom);
  Students = mongoose.model("Student", Student);
  Submissions = mongoose.model("Submission", Submission);
}

export const dbContext = new DbContext();
