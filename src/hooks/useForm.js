// Importaciones React
import { useState } from 'react';

// Hook
const useForm = start => {
	const [form, setForm] = useState(start);

	const handleChange = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.value
		});
	};

	const reset = () => {
		setForm(start);
	};

	return [form, handleChange, reset];
};

export default useForm;
