// Importaciones React
import { useState } from 'react';

// Componentes
import Container from './components/Container.js';
import Card from './components/Card.js';
import UserForm from './components/UserForm.js';

// Aplicación
function App() {
	const [users, setUsers] = useState([]);

	const submit = user => {
		setUsers([...users, user]);
	};

	console.log(users);

	return (
		<div style={{ marginTop: '15%' }}>
			<Container>
				<Card>
					<div style={{ padding: '20px' }}>
						<UserForm submit={submit} />
					</div>
				</Card>
				<Card>
					<ul>
						{users.map(x => (
							<li key={x.userEmail}>
								{x.userName} {x.userLastName}: {x.userEmail}
							</li>
						))}
					</ul>
				</Card>
			</Container>
		</div>
	);
}

export default App;
