import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const account = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
};

export default account;
