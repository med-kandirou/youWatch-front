import {  Card, CardBody, Heading, Stack } from '@chakra-ui/react';
import * as React from 'react'

function video(){
    return( 
    <>
        <Card maxW='sm'>
        <CardBody>
            <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className='rounded-md'
            />
            <div style={{display:'flex'}}>
                <div>
                    <img height={100} width={100} src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                </div>
                <div>
                    <Stack mt='2' spacing='1'>
                    <Heading size='md'>this is title</Heading>
                    <p className='text-2xl'>
                        this is channel name
                    </p>
                    <p className='text-2xl'>
                        548 k vues - il y a 1 an
                    </p>
                    </Stack>
                </div>  
            </div>
        </CardBody>
        </Card>
    </>
    )
}

export default video;
