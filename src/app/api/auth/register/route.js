// app/api/auth/register/route.js
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
	await dbConnect();
	const { name, email, password, confirmPassword } = await request.json();

	if (!name || !email || !password) {
		return new Response(
			JSON.stringify({ error: "Заполните все обязательные поля" }),
			{ status: 400 }
		);
	}

	try {
		if (password != confirmPassword) {
			return new Response(JSON.stringify({ error: "Пароли не совпадают" }), {
				status: 400
			});
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return new Response(
				JSON.stringify({ error: "Пользователь с таким email уже существует" }),
				{ status: 400 }
			);
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({
			name,
			email,
			password: hashedPassword
		});

		await user.save();
		return new Response(
			JSON.stringify({ message: "Пользователь успешно создан" }),
			{ status: 201 }
		);
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ error: "Внутренняя ошибка сервера" }),
			{ status: 500 }
		);
	}
}
