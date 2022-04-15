// my very own functions

export const addClassName = (element, newName) => {
	const classNames = element.className.split(' ')
	if (!classNames.includes(newName)) {
		return element.className += " " + newName
	} else {
		return element.className
	}
}

export const removeClassName = (element, oddName) => {
	const classNames = element.className.split(' ')
	if (classNames.includes(oddName)) {
		const remove = classNames.filter((CLASSName) => CLASSName !== oddName)
		return element.className = remove.join(" ")
	} else {
		return element.className
	}
}

export const handleValidateInput = element => {
	switch (element.type) {
		case "email":
			element.setAttribute("pattern", "[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")
			return;
		case "password":
			element.setAttribute("minlength", 6)
			break;
	}
}

export function getParameterByName(name) {
	if (window.location.href.split("?")[1]) {
		const URL_data = window.location.href.split("?")[1].split('&');
		for (let i = 0; i < URL_data.length; i++) {
			if (URL_data[i].split("=")[0] === name) {
				return URL_data[i].split("=")[1]
			}
		}
	} else {
		return false
	}
}