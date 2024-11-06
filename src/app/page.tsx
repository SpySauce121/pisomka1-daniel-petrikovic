import { useSession, signIn } from "next-auth/react";
import { Button, Typography } from "@mui/material";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <Typography>Welcome, {session.user?.name}!</Typography>
      ) : (
        <div>
          <Typography>Welcome to the App. Please sign in to continue.</Typography>
          <Button variant="contained" onClick={() => signIn("google")}>
            Sign in with Google
          </Button>
        </div>
      )}
    </div>
  );
}
