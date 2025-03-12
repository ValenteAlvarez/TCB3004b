/* eslint-disable react/prop-types */

import { useState } from 'react'
import './Global.scss'
import { NavigationBar } from "./components/NavigationBar/NavigationBar"
import { LogInView } from './components/LogInView/LogInView'

const users = [
	{
		username: 'admin',
		password: 'admin'
	}
]

const App = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState('');

	function logIn(user, password) {
		if (user === users[0].username && password === users[0].password) {
			setIsLoggedIn(true)
			setCurrentUser(user)
		}
		else {
			console.error("wrong user or pass");
			alert('Wrong Username or Password!')
		}
	}

	function logOut(user) {
		setIsLoggedIn(false)
		setCurrentUser('');
	}

	return (
		<div
			className="AppWrapper"
		>
			{isLoggedIn ? <NavigationBar /> : <LogInView handleLogin={(user, password) => {
				logIn(user, password)
			}} />}
		</div >
	)
}

export default App