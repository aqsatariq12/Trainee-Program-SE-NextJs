import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if(!file){
    return Response.json({
        message: "No file selected"
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadPath = path.join(process.cwd(), "public", file.name);

  await writeFile(uploadPath, buffer);

  return Response.json({
    message:"File Uploaded successfully",
    fileName: file.name
  });


}
