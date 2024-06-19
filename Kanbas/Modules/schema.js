import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    course: { type: String, required: false }
}, {
    collection: "modules"
});

export default moduleSchema;
