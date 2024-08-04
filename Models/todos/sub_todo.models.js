import mongoose, { mongo } from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content : {
        type: String,
        required: true,
    },
    complete : {
        type: Boolean,
        default: false,
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    subTodos : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
        }
    ], // Array of SubTodos
}, { timestamps: true });

export const SubTodo = mongoose.Schema("SubTodo", subTodoSchema);
