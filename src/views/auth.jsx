import React from "react";
import {
    Container, Form, Group, Label, Labels, Input, MiniInput,
    Button, Warning, FieldRow, Erro, Erro2, Img
} from '../components/employee/employeeForm';
import image from '../utils/images/user.png';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

const Auth = () => {

    const [ data, setData ] = useState('');

    const schema = Yup.object({
        email: Yup.string().required().email(),
        password: Yup.string().required(4),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: data.className, password: data.TypeBusiness },
        mode: "onBlur", // Validation start when element is unfocused
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setData(data)
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Img src={image} alt='Data Customer' />
                <Group>
                    <Label>Email</Label>
                    <Input name='email' {...register("email")} />
                    <Erro>{errors.email?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                    <Label>Password</Label>
                    <Input name='password' type="password" {...register("password")} />
                    <Erro>{errors.password?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                </Group>
                <Button type='submit'>Acessar</Button>
                <Warning>verifique se as informaçoes estão corretas</Warning>
            </Form>
        </Container>
    )
}


export default Auth;