import { NextResponse } from "next/server";

export async function POST(request) {

  const body = await request.json();

  const response = await fetch(
    "https://food-ordering-backend-production-0f2b.up.railway.app/user/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(data, { status: response.status });
  }

  const res = NextResponse.json({
    message: "Login Successful",
    user: data.data,
  });

  // Save JWT in cookie
  res.cookies.set("token", data.token.access, {
    httpOnly: true,
    secure: false, // use true in production with HTTPS
    sameSite: "lax",
    path: "/",
  });

  return res;
}