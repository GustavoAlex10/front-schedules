import React, { useState } from "react";
import {
    Container, Form, Group, Label, Input,
    Button, Warning, Erro, Img
} from '../components/employee/employeeForm';
import image from '../utils/images/user.png';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../utils/api/api'

const initValue = {
    email: '',
    password: '',
}
const schema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(4),
});

const Auth = () => {

    // const [ data, setData ] = useState('');
    const [values, setValues] = useState(initValue);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onChange = (ev) => {

        const { name, value } = ev.target;
        setValues({ ...values, [name]: value })
    }


    console.log(values)

    const onSubmit = () => {


        api
            .post('/registerConsumers', JSON.stringify({
                name: values.email,
                email: values.email,
                password: values.password,
                confirmpassword: values.password
            }),
            {
                headers: {
                    'Content-type' : 'application/json'
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    

    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Img src={image} alt='Data Customer' />
                <Group>
                    <Label>Email</Label>
                    <Input type="text" name='email' {...register("email")} onChange={onChange} />
                    <Erro>{errors.email?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                    <Label>Password</Label>
                    <Input type="password" name='password'  {...register("password")} onChange={onChange} />
                    <Erro>{errors.password?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                </Group>
                <Button type='submit'>Acessar</Button>
                <Warning>verifique se as informaçoes estão corretas</Warning>
            </Form>
        </Container>
    )
}


export default Auth;