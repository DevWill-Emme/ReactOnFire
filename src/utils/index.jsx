// my very own functions

export function addClassName(element, newName) {
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
			element.setAttribute("pattern", "")
			return;
		case "password":
			element.setAttribute("minlength", 6)
			break;
	}
}