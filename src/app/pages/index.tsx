import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from '@mui/material';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user?.name}</h1>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome, please sign in</h1>
      <Button onClick={() => signIn('google')}>Sign In with Google</Button>
    </div>
  );
}
