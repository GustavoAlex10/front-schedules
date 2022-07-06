import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Planner from '../views/planner';
import Dash from '../views/dash';


const Content = ({ props }) => {


    return(
        <div>
            <Routes>
                <Route path='/' element={<Dash />} />
                <Route path='/planner' element={<Planner />} />
            </Routes>
        </div>
    )
}

export default Content;