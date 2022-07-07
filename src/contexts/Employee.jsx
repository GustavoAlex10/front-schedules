import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();


export const DataProvider = ({children}) => {
	const [data, setData] = useState({});
	const [payment, setPayment] = useState('');
	
	const setValues = (values) => {
		setData((prevData) => ({
			...prevData,
			...values
		}))
	}


	return (
		<DataContext.Provider value={{ data, setValues, payment, setPayment }}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => useContext(DataContext)