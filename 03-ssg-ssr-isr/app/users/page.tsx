import React from "react";

// importar la funcion para fetch los usuarios
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";



export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;


  const content = (
    <section>
      <h2>
        <Link href="/"> Back to Home </Link>
      </h2>
      <br />
        {users.map((user) => (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p> 
            <br />
          </>
        ))}
    </section>
  );

  return content;
}
