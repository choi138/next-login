import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";

const IndexPage = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <p>
        Signed in as {session?.user?.email} <br />
        <button
          onClick={() => {
            signOut();
          }}
        >
          signOut
        </button>
      </p>
    )
  } else {
    return (
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    )
  }
}

export default IndexPage