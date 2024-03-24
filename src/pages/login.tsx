import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";


import { useForm } from "react-hook-form";
import { channelLogin } from "../state/channel/channelActions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  appDispatch } from "../state/store";
import Logo from "../components/logo";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch<appDispatch>();
  const toast = useToast()
  const navigate = useNavigate();
  function onSubmit(data: object) {
    dispatch(channelLogin(data)).unwrap().then((res) => {
      const toastConfig = {
        description: res.done ? 'Login success' : 'Email or password is incorrect.',
        status: res.done ? 'success' : 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      };
      toast(toastConfig);
      if(res.done){
        navigate("/")
      }
    });
  }

  return (
    <>
      <Logo />
      <Container
        maxW="lg"
        py={{ base: "12", md: "17" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "lg" }}>
                Log in to your account
              </Heading>
              <Text color="fg.muted">
                Don't have an account?{" "}
                <Link to="/register" className="text-rose-600">
                  Sign up
                </Link>
              </Text>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      value="user@gmail.com"
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <p className="text-red-500">Email is required</p>}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="Password">Password</FormLabel>
                    <Input
                      value="password"
                      id="password"
                      type="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <p className="text-red-500">password is required</p>}
                  </FormControl>
                </Stack>
                <HStack className="pb-5 pt-5" justify="space-between">
                  <Checkbox colorScheme="red" defaultChecked>
                    Remember me
                  </Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button type="submit" colorScheme="red">
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default Login;


