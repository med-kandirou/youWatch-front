import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useToast,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form';
import { channelregister } from '../state/channel/channelActions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { appDispatch } from '../state/store';
import Logo from '../components/logo';

  function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch<appDispatch>();
    const navigate = useNavigate();
    const toast = useToast();
    function onSubmit(data:object) {
        dispatch(channelregister(data));
        const toastConfig = {
            description: 'Register success',
            status: 'success',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          };
        toast(toastConfig);
        navigate("/login")
    }

    return(
        <>      
        <Logo />      
        <Container maxW="lg" py={{ base: '12', md: '17' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
            <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Heading size={{ base: 'xs', md: 'lg' }}>Log in to your account</Heading>
                <Text color="fg.muted">
                Don't have an account? <Link to="/login" className="text-rose-600">Sign up</Link>
                </Text>
            </Stack>
            </Stack>
            <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg.surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            >
            <Stack spacing="6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="5">
                    <FormControl>
                        <FormLabel htmlFor="fname">First Name</FormLabel>
                        <Input id="firstname" type="text" {...register("firstname", { required: true })} />
                        {errors.firstname && <p className="text-red-500">First name is required</p>}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="lname">Last Name</FormLabel>
                        <Input id="lastname" type="text" {...register("lastname", { required: true })} />
                        {errors.lastname && <p className="text-red-500">Last name is required</p>}
                    </FormControl>  
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" {...register("email", { required: true })}/>
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Password</FormLabel>
                        <Input id="password" type="password" {...register("password", { required: true })}/>
                        {errors.password && <p className="text-red-500">Password is required</p>}
                    </FormControl>
                    <Input id="role" type="text" value='USER' hidden {...register("role", { required: true })}/>
                    <FormControl>
                        <FormLabel htmlFor="email">Confirmation password</FormLabel>
                        <Input id="cpassword" type="password" {...register("cpassword", { required: true })}/>
                        {errors.cpassword && <p className="text-red-500">Confirmation password is required</p>}
                    </FormControl>
                </Stack>
                <Stack spacing="6">
                    <Button colorScheme="red" type='submit'>Sign up</Button>
                </Stack>
            </form>
            </Stack>
            </Box>
        </Stack>
        </Container>
    </>
)}

export default Register;

