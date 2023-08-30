let testimonials=[
	{
		name: "William James.",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus"
	},
	{
		name: "Jim Clarke.",
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

let number_of_testimonials=testimonials.length
function renderTestimonials(i){
	let carousel=document.getElementById("testimonials-carousel")
	carousel.innerHTML=`
	<div class="testimonials-carousel-page">
		<div class="testimonials-card">
			<img class="testimonials-card-img" src="assets/skeleton-avatar.png">
			<div class="testimonials-card-content">
				<div class="testimonials-card-title">${testimonials[i].name}</div>
				<div class="testimonials-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus</div>
			</div>
		</div>
		<div class="testimonials-card">
			<img class="testimonials-card-img" src="assets/skeleton-avatar.png">
			<div class="testimonials-card-content">
				<div class="testimonials-card-title">${testimonials[i+1].name}</div>
				<div class="testimonials-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venematis, lectus</div>
			</div>
		</div>
	</div>
	`
}

renderTestimonials(0)

i=0
function change(type){
	if(type==1){
		if(i!=number_of_testimonials-2){
			i=i+2
			renderTestimonials(i);
		}
	}
	else{
		if(i!=0){
			i=i-2
			renderTestimonials(i)
		}
	}
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
