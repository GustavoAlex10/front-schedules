import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Planner from '../views/planner';
import Dash from '../views/dash';
import Payment from '../views/payments';
import EmployeeRegistration from '../views/employeeRegistration';
import Auth from '../views/auth';



const Content = ({ props }) => {


    return(
        <div>
            <Routes>
                <Route path='/' element={<Dash />} />
                <Route path='/planner' element={<Planner />} />
                <Route path='/payments' element={<Payment />} />
                <Route path='/employeeRegister' element={<EmployeeRegistration />} />
                <Route path='/login' element={<Auth />} />
            </Routes>
        </div>
    )
}

export default Content;