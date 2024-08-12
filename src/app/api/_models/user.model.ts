import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: "super-user" | "user";
    verified: boolean;
    otp: string;
}

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["super-user", "user"],
            message: "Role must be either'super-user' or 'user'",
        },
        default: "super-user",
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        default: "",
    }
}, {
    timestamps: true,
});

const User = model<IUser>("User", UserSchema);
export default User;