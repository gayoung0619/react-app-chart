// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext'; // MyContext 파일 경로에 따라 수정

const MyProvider = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const onVisible = () => {
		setVisible(true)
	}
	const stopVisible = () => {
		setVisible(false)
	}

	return (
		<MyContext.Provider value={{ visible, setVisible, onVisible, stopVisible }}>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;