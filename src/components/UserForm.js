// Hooks
import useForm from '../hooks/useForm.js';

// Componentes
import Input from './Input.js';
import Button from './Button.js';

// Componente
const UserForm = ({ submit }) => {
	const [form, handleChange, reset] = useForm({
		userName: '',
		userLastName: '',
		userEmail: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		submit(form);
		reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="Nombre:"
				name="userName"
				value={form.userName}
				placeholder="Nombre"
				onChange={handleChange}
			/>
			<Input
				label="Apellido:"
				name="userLastName"
				value={form.userLastName}
				placeholder="Apellido"
				onChange={handleChange}
			/>
			<Input
				label="Correo:"
				type="email"
				name="userEmail"
				value={form.userEmail}
				placeholder="Correo"
				onChange={handleChange}
			/>
			<Button>Enviar</Button>
		</form>
	);
};

export default UserForm;
