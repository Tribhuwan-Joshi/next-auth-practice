import User from "@/models/User";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  await connect();
  console.log("started");
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  try {
    await newUser.save();
    console.log("new user saved");
    return new NextResponse("user is registered", { status: 201 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
}
