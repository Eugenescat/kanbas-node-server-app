import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: false },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    department: { type: String, required: false },
    credits: { type: Number, required: false },
    description: { type: String, required: false },
}, {
    collection: "courses"
});

export default courseSchema;
