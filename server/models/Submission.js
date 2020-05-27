import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Submission = new Schema(
    {
        student: { type: ObjectId, ref: "Student", required: true },
        classroom: { type: ObjectId, ref: "Classroom", required: true },
        // NOTE Enum validates the string has one of the listed values
        grade: { type: String, enum: ["A", "B", "C", "D", "F", "ungraded"], default: "ungraded" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Submission;
