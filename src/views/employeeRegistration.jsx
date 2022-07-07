import React from 'react';
import { useData } from '../contexts/Employee';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import image from '../utils/images/user.png'
import {
    Container, Form, Group, Label, Labels, Input, MiniInput,
    Button, Warning, FieldRow, Erro, Erro2, Img
} from '../components/employee/employeeForm';


const EmployeeRegistration = () => {

    const { data, setValues } = useData()
    const navigate = useNavigate();

    const schema = Yup.object({
        EmployeeCompany: Yup.string().required().min(3),
        TypeBusiness: Yup.string().required(),
        Address: Yup.string().required(),
        HoursOperation: Yup.string().required(),
        EmployeeMobile: Yup.string().required(),
        EmployeeDocument: Yup.string().required(),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            EmployeeCompany: data.className, TypeBusiness: data.TypeBusiness, Address: data.Address, HoursOperation: data.HoursOperation,
            EmployeeMobile: data.EmployeeMobile, EmployeeDocument: data.EmployeeDocument
        },
        mode: "onBlur", // Validation start when element is unfocused
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        navigate("/")
        setValues(data)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Img src={image} alt='Data Customer' />
                <Group>
                    <Label>Nome da Empresa</Label>
                    <Input name='EmployeeCompany' {...register("EmployeeCompany")} />
                    <Erro>{errors.EmployeeCompany?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                    <Label>Tipo de Negocio</Label>
                    <Input name='TypeBusiness' {...register("TypeBusiness")} />
                    <Erro>{errors.TypeBusiness?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                    <Label>Endereço</Label>
                    <Input name='Address' {...register("Address")} type="text"></Input>
                    <Erro>{errors.Address?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                    <FieldRow>
                        <Labels name='HoursOperation'> Horario de Funcionamento</Labels>
                        <Labels name='EmployeeMobile'> Telefone Empresarial</Labels>
                    </FieldRow>
                    <FieldRow>
                        <MiniInput type="text" name="HoursOperation" placeholder='Seg-Sex' {...register("HoursOperation")} />
                        <MiniInput type="text" name="EmployeeMobile" placeholder='09h00-18h00' {...register("EmployeeMobile")} />
                    </FieldRow>
                    <Erro>{errors.HoursOperation?.type === "required" && <Erro2 className='field-error'>Necessario preencher</Erro2>}</Erro>
                    <Erro>{errors.EmployeeMobile?.type === "required" && <Erro2 className='field-error'>Necessario preencher</Erro2>}</Erro>
                    <Label>Cpf ou CNPJ</Label>
                    <Input name='EmployeeDocument' {...register("EmployeeDocument")}></Input>
                    <Erro>{errors.EmployeeDocument?.type === "required" && <Erro className='field-error'>Necessario preencher</Erro>}</Erro>
                </Group>
                <Button type='submit'>Confirmar dados</Button>
                <Warning>verifique se as informaçoes estão corretas</Warning>
            </Form>
        </Container>
    )
}

export default EmployeeRegistration;