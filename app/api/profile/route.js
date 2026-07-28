import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  console.log(token);
  if (!token) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }
  return Response.json({
    message: "Welcome! You are authenticated.",
    user: {
      name: "Aqsa",
      role: "Developer",
    },
  });
}
