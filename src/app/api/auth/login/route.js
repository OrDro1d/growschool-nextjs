// app/api/auth/login/route.js
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
	await dbConnect();
	const { email, password } = await request.json();

	if (!email || !password) {
		return new Response(JSON.stringify({ error: "Заполните email и пароль" }), {
			status: 400
		});
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return new Response(JSON.stringify({ error: "Пользователь не найден" }), {
				status: 401
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return new Response(JSON.stringify({ error: "Неверный пароль" }), {
				status: 401
			});
		}

		const payload = {
			userId: user._id,
			email: user.email
		};

		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "1d"
		});

		return new Response(
			JSON.stringify({ token, message: "Вход выполнен успешно" }),
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ error: "Внутренняя ошибка сервера" }),
			{ status: 500 }
		);
	}
}
