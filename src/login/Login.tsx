import { TextField, Stack, Button } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

interface UserLogin {
  username: string;
  password: string;
}

export default function Login() {
  const [dataUser, setDataUser] = useState<UserLogin | any>(undefined);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
     
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <Stack spacing={3}>
        <h1>Signin</h1>
        <div>
          <TextField
            onChange={handleOnChange}
            id="outlined-basic"
            name="username"
            label="Username"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            name="password"
            variant="outlined"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <Button type="submit">Login</Button>
        </div>
      </Stack>
    </form>
  );
}
