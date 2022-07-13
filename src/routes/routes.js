import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Planner from '../views/planner';
import Dash from '../views/dash';
import Payment from '../views/payments';
import EmployeeRegistration from '../views/employeeRegistration';
import Auth from '../views/auth';
import Navbar from '../components/navbar';
import ProtectedRoutes from './private';




const Content = ({ props }) => {



    return (

        <div>
            {window.location.pathname !== "/" ? <Navbar /> : console.log("screen login")}
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path='/dash' element={<Dash />} />
                    <Route path='/planner' element={<Planner />} />
                    <Route path='/payments' element={<Payment />} />
                    <Route path='/employeeRegister' element={<EmployeeRegistration />} />
                </Route>
            </Routes>
        </div>


    )
}

export default Content;