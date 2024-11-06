import { signOut } from "next-auth/react";
import { Button } from '@mui/material';

export default function SignOut() {
  return (
    <div>
      <h1>Sign Out Successful</h1>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
