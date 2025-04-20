// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Укажите имя"],
			maxlength: [60, "Имя не может превышать 60 символов"]
		},
		email: {
			type: String,
			required: [true, "Укажите email"],
			unique: true,
			lowercase: true,
			trim: true
		},
		password: {
			type: String,
			required: [true, "Укажите пароль"]
		}
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
