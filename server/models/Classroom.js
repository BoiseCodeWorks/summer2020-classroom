import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Classroom = new Schema(
    {
        subject: { type: String, required: true },
        description: { type: String, required: true },
        roomNumber: { type: Number, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Classroom;
