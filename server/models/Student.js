import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Student = new Schema(
    {
        name: { type: String, required: true },
        classrooms: { type: ObjectId, ref: "Classroom", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Student;
