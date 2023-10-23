// MyProvider.js
import React, {useRef, useState} from 'react';
import MyContext from './MyContext'; // MyContext 파일 경로에 따라 수정

const MyProvider = ({children, targetId, setTargetId}) => {
	const [visible, setVisible] = useState(false);
	const [edit, setEdit] = useState(false);
	const onVisible = () => {
		setVisible(true)
	}
	const stopVisible = () => {
		setVisible(false)
	}
	const editHandler = (id) => {
		onVisible();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setEdit(true);
		setTargetId(id);
	}

	return (
		<MyContext.Provider value={{ visible, setVisible, onVisible, stopVisible, edit, setEdit, editHandler, targetId, setTargetId }}>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;