import { TextField, Stack, Button } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setUser } from "../app/features/userSlice";
import { userLogin } from "../fetch/peticiones";
import { useNavigate } from "react-router-dom";

interface UserLogin {
  user: string;
  password: string;
}

export default function Login() {
  const [dataUser, setDataUser] = useState<UserLogin | any>(undefined);
  const navegate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.stateUser);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    try {

      const verifyUser = await userLogin("POST", dataUser);
      console.log(verifyUser);
      dispatch(setUser(verifyUser));
      window.location.reload();
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    if (user) {
      navegate("home");
    }
  }, [user])
  return (
    <form onSubmit={handleOnSubmit}>
      <Stack spacing={3}>
        <h1 style={{ color: '#918d8dde' }}>Signin</h1>
        <div>
          <TextField
            onChange={handleOnChange}
            id="outlined-basic"
            name="user"
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
          <Button type="submit" sx={{ background: '#918d8dde' }}>Login</Button>
        </div>
      </Stack>
    </form>
  );
}
