import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {

  const user = await currentUser();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">

      <UserButton afterSignOutUrl="/sign-in" />

      <h1 className="text-3xl font-bold">
        Welcome {user?.firstName}
      </h1>

      <p>{user?.emailAddresses[0].emailAddress}</p>

    </div>
  );
}


// import React from 'react'

// export default function page() {
//   return (
//     <div>Welcome to dashboard</div>
//   )
// }
