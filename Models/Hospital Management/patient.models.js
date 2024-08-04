import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
        min : 0,
        max : 100,
    },
    address : {
        type : String,
        required : true,
    },
    medicalRecords : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "MedicalRecord",
        }
    ],
}, { timestamps: true });

export const Patient = mongoose.model(
  "Patient",
  patientSchema
);
