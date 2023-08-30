i=0
let carousel=document.getElementById("testimonials-slider")
let pagination=[
	document.getElementById("pagination1"),
	document.getElementById("pagination2"),
	document.getElementById("pagination3")
]

function change(t){
	if(t===1){
		if(i!=2){
			i++;
			carousel.style.transform=`translateX(-${i*33.33}%)`	
			pagination[i].classList.add("in-use")
			pagination[i-1].classList.remove("in-use")
		}
	}else{
		if(i!=0){
			i--;
			carousel.style.transform=`translateX(-${i*33.33}%)`
			pagination[i].classList.add("in-use")
			pagination[i+1].classList.remove("in-use")
		}
	}
}

function goto_testimonial(n){
	pagination[n].classList.add("in-use")
	pagination[i].classList.remove("in-use")
	i=n
	carousel.style.transform=`translateX(-${i*33.33}%)`	
}

const rem=parseInt(getComputedStyle(document.documentElement).fontSize)

let nav=document.getElementById("navbar")
let register=document.getElementById("register")
let nav_stick=navbar.offsetTop
let register_stick=register.offsetTop
register_stick=register_stick-((5*rem))
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

const observer=new IntersectionObserver((e) => {
	e.forEach((entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("show")
		}else{
			entry.target.classList.remove("show")
		}
	})
})

let hidden_elements=document.querySelectorAll(".hidden")
hidden_elements.forEach((element) => observer.observe(element))
