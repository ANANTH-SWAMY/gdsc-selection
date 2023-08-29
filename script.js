let testimonials=[
	{
		name: "William James.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	},
	{
		name: "Noah Page.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	},
	{
		name: "Valentino Rossi.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	},
	{
		name: "Tom Kristensen.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	},
	{
		name: "Nigel Mansell.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	},
	{
		name: "Marc Marquez.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	}
]

const rem=parseInt(getComputedStyle(document.documentElement).fontSize)

let nav=document.getElementById("navbar")
let register=document.getElementById("register")
let nav_stick=navbar.offsetTop
let register_stick=register.offsetTop
register_stick=register_stick-(5*rem)
window.onscroll= () => {
	if (window.pageYOffset >= nav_stick) {
		navbar.classList.add("navbar-stick")
	} else {
		navbar.classList.remove("navbar-stick")
	}
	if(window.pageYOffset>= register_stick){
		register.classList.add("register-stick")
	}else{
		register.classList.remove("register-stick")
	}
}

