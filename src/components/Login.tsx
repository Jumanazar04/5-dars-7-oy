import { Card, Flex, Input } from 'antd';
import React from 'react';

const Login = () => {
    return (
        <div className='bg-gray-300 w-screen h-screen flex justify-center items-center'>
            <Flex gap="middle" vertical>
                <Card
                    title="Card title"
                    bordered={false}
                    style={{
                    width: 300,
                    }}
                >
                    <Input placeholder='name' type='text'/>
                    <Input placeholder='password' type='password' />
                </Card>
            </Flex>
        </div>
    );
}

export default Login;
