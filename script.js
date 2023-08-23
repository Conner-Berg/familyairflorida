// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(
	document.querySelectorAll('#cs-navigation .cs-dropdown')
);
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

// after scrolling down 100px, add .scroll class to the #cs-navigation
document.addEventListener('scroll', (e) => {
	const scroll = document.documentElement.scrollTop;
	if (scroll >= 100) {
		document.querySelector('#cs-navigation').classList.add('scroll');
	} else {
		document.querySelector('#cs-navigation').classList.remove('scroll');
	}
});

//
//    The Dark Mode System
//

/* Body and Toggle */
var body = document.querySelector('body');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Get Status of Dark Mode
let darkMode = localStorage.getItem('darkMode');

// Enable Dark Mode
const enableDarkMode = () => {
	body.classList.add('dark-mode');
	localStorage.setItem('darkMode', 'enabled');
};

// Disable Dark mode
const disableDarkMode = () => {
	body.classList.remove('dark-mode');
	localStorage.setItem('darkMode', null);
};

// Check the state of dark mode in local storage
if (darkMode == 'enabled') {
	enableDarkMode();
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
	// on click, check localstorage for the dark mode value
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		// if dark mode is not enabled, run this function to set it to enabled
		enableDarkMode();
	} else {
		// if dark mode is enabled, run this function to set it to disabled
		disableDarkMode();
	}
});
