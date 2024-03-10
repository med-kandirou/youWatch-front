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
  } from '@chakra-ui/react'

import { useForm } from 'react-hook-form';
import { channelregister } from '../state/channel/channelActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

  function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    function onSubmit(data:object) {
        dispatch(channelregister(data)).then((res:string) => {
            console.log(res);
        }); 
    }

    return(
        <>            
        <Container maxW="lg" py={{ base: '12', md: '17' }} px={{ base: '0', sm: '8' }}>
              <svg style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xmlns="http://www.w3.org/2000/svg" className="external-icon" viewBox="0 0 90 20" focusable="false">
                  <svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                      <g>
                          <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
                          <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
                      </g>
                  </svg>
              </svg>
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

