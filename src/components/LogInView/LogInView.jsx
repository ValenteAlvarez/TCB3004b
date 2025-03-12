import './LogInView.scss'
import { useState } from 'react';
import { TextField, SubmitButton } from '../Modules/Form/FormModules'

export const LogInView = ({ handleLogin = () => { } }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');


	return (
		<>
			<h1>Yet Another Notes App!</h1>
			<div className='LogInView'>
				<form
					className='LogInForm'
					onSubmit={(event) => {
						event.preventDefault();
						handleLogin(username, password)
					}}
				>
					<h2 className='LogInTitle'>Log In</h2>
					<div className='LogInTextFields'>
						<TextField
							placeholder='Username'
							onValueChange={value => setUsername(value)}
							value={username}
						/>
						<TextField
							placeholder='Password'
							isSecure={true}
							onValueChange={value => setPassword(value)}
							value={password}
						/>
					</div>
					<SubmitButton
						text='Log In'
						validationFunction={() => {
							if (username.length > 0 && password.length > 0) return true;
						}}
					/>

				</form>
			</div>
		</>
	)
}