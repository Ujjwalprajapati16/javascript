import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: [true, "Password must be required"]
    },
    isActive : {
        type: Boolean,
        default: true
    },
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);