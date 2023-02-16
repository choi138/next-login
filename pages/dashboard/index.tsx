import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Dashboard: NextPage = (): JSX.Element => {
    const { status, data } = useSession();
    useEffect(() => {
        if (status !== "authenticated") {
            Router.replace("/auth")
            console.log(data)
        }
    }, [status])
    if (status === "authenticated") {
        return (
            <>
                <h1> This page is protected for special people</h1>
                {JSON.stringify(data.user, null, 2)}
            </>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default Dashboard