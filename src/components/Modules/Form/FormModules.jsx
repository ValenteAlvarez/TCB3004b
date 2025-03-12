import { useEffect, useState } from 'react'
import './FormModules.scss'

export const TextField = ({
	placeholder = '',
	isSecure = false,
	value = "",
	onValueChange = () => { }
}) => {
	const [isFocused, setIsFocused] = useState(false)

	function onFocus(event) {
		setIsFocused(true)
	}

	function onBlur(event) {
		setIsFocused(false)
	}

	let type = (isSecure) ? "password" : "text"

	return (
		<div
			className={`TextField ${isFocused ? "focused" : ""}`}
		>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={(event) => { onValueChange(event.target.value) }}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			<span
				className="InputFocusIndicator"
			/>
		</div>
	)
}

export const TextArea = ({
	value = "",
	placeholder,
	onValueChange = () => { }
}) => {
	return (
		<div
			className={`TextArea`}
			placeholder={`${placeholder}`}
		>
			<textarea
				onChange={onValueChange}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	)
}

export const Button = ({
	imageURL = null,
	altText = "",
	text = "",
	handleClick = () => { }
}) => {
	let imageElement = null;

	if (imageURL) {
		imageElement = <img src={imageURL} alt={altText}></img>
	}

	return (
		<button
			className="Button"
			onClick={handleClick}
		>
			<p>{text}</p>
			{imageURL ? imageElement : ""}
		</button>
	)

}

export const SubmitButton = ({
	text = "",
	onSubmit,
	isEnabled,
	validationFunction = () => { true }
}) => {

	isEnabled = validationFunction()

	return (
		<div className='SubmitButton'>
			<button
				type='submit'
				onSubmit={onSubmit}
				disabled={!isEnabled}
			>
				{text}
			</button>
			<span
				className="ButtonFocusIndicator"
			/>
		</div>
	)
}