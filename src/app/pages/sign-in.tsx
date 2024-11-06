import { signIn } from "next-auth/react";
import { Button } from '@mui/material';

export default function SignIn() {
  return (
    <div>
      <Button onClick={() => signIn('google')}>Sign In with Google</Button>
    </div>
  );
}
