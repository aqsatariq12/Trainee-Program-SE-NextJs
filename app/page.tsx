import React from "react";
import Image from "next/image";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image src={"/cat.png"} width={500} height={400} alt="Cat" />
    </div>
  );
}

export default Home;
