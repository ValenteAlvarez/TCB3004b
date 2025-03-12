import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { NotesView } from "../NotesView/NotesView"
import "./NavigationBar.scss"
import { LogInView } from "../LogInView/LogInView"

export const NavigationBar = () => {
	return (
		<Router>
			<nav className="NavigationBar">
				<NavigationGroup
					navItems={[
						{
							title: "Notes",
							iconSrc: "https://www.svgrepo.com/show/511316/align-text-left-right-920.svg",
							route: "/notes"
						},
						{
							title: "Test Page",
							iconSrc: "https://www.svgrepo.com/show/512729/profile-round-1342.svg",
							route: "/testPage"
						}
					]}
					id="MainLinks"
				/>

				<NavigationGroup
					navItems={[
						{
							title: "",
							iconSrc: "https://www.svgrepo.com/show/535711/user.svg",
							route: "/account"
						}
					]}
				/>
			</nav>

			<Routes>
				<Route path="/notes" element={<NotesView />}></Route>
				<Route path="/testPage" element={<h1>This is a test page!</h1>}></Route>
			</Routes>
		</Router>

	)
}

const NavigationGroup = ({ navItems = [], id = "" }) => {
	return (
		<ul
			className={`NavigationGroup`}
			id={`${id}`}
		>
			{navItems.map((item, id) => <NavigationItem key={id} title={item.title} iconSrc={item.iconSrc} route={item.route} />)}
		</ul>
	)
}

const NavigationItem = ({
	title = null,
	route = '',
	id = "",
	iconSrc = null
}) => {

	let icon = null
	if (iconSrc) {
		icon = <img className="NavigationItemIcon" src={iconSrc} alt={title} />
	}

	return (

		<Link
			className="NavigationItem"
			to={route}
			id={id}
		>
			{title ? <h2>{title}</h2> : ""}
			{iconSrc ? icon : ""}

		</Link>
	)
}