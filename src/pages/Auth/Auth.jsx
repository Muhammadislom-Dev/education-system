import { useState } from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import Register from "./Register/Register";
import Login from "./Login/Login";

function Auth() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    name: "login",
    phone: "",
  });
  const onCancel = () => setOpen(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} title="Kirish" />
      <Modal
        isOpen={open}
        onCancel={onCancel}
        body={
          <SimpleGrid columns={2}>
            <Box p="48px 56px">
              {state.name === "login" && (
                <Login phoneNumber={state.phone} setState={setState} />
              )}
              {state.name === "register" && (
                <Register setState={setState} phone={state.phone} />
              )}
            </Box>
            <Image
              src="https://nomakler.uz/assets/auth-bg-e0e260ec.webp"
              height="100%"
              objectFit="cover"
              alt="auth-background"
              borderTopRightRadius="7px"
              borderBottomRightRadius="7px"
            />
          </SimpleGrid>
        }
        width="900px"
        bodyStyles={{
          bg: "#edf3fb",
          p: 0,
        }}
      />
    </>
  );
}

export default Auth;
