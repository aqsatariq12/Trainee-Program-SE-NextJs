"use client";
import { useState } from "react";
import Image from "next/image";
export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [imagePath, setImagePath] = useState("");

  async function uploadFile() {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setImagePath("/" + result.fileName);

    alert(result.message);
  }
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            File Upload
          </h1>

          <label className="block mb-3 text-gray-700 font-medium">
            Select a File
          </label>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer
          file:bg-blue-600 file:text-white file:border-0
          file:px-4 file:py-2 file:rounded-md
          file:mr-4 hover:file:bg-blue-700"
          />

          {file && (
            <p className="mt-4 text-sm text-gray-600">
              📄 <span className="font-medium">{file.name}</span>
            </p>
          )}

          <button
            onClick={uploadFile}
            disabled={!file}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg
          hover:bg-blue-700 transition duration-300
          disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Upload File
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-[520px] min-h-[420px] bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-center">
          {imagePath ? (
            <Image
              src={imagePath}
              width={500}
              height={400}
              alt="Uploaded Image"
              className="rounded-lg object-contain max-h-[380px]"
            />
          ) : (
            <p className="text-gray-400 text-lg">
              Uploaded image will appear here
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
