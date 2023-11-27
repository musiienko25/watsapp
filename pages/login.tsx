import styled from "styled-components";
import Head from "next/head";
import { Button } from "@mui/material";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png";

  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <Conteiner>
      <Head>
        <div>login</div>
      </Head>
      <LoginContainer>
        <Logo src={logo} />
        <Button onClick={signIn} variant="outlined">
          Sign in with google
        </Button>
      </LoginContainer>
    </Conteiner>
  );
}

export default Login;

const Conteiner = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
