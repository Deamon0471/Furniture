

window.addEventListener('scroll', function() {
	let parallax = document.querySelector('.page__image');
	let scrollPosition = window.pageYOffset;
	if(scrollPosition < 200){

		// parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
		parallax.style.transform = 'rotateX(' + scrollPosition * 0.25 + 'deg)';
	}
 });

function onEntry(entry){
	entry.forEach(change => {
		if(change.isIntersecting){
			change.target.classList.add('product-active')
		}else{
			
			change.target.classList.remove('product-active')
		}
	});
}
function onEntryChoose(entry){
	entry.forEach(change => {
		if(change.isIntersecting){
			change.target.classList.add('choose-active')
			change.target.classList.add('choose__info-active')
		}else{
			
			change.target.classList.remove('choose-active')
			change.target.classList.remove('choose__info-active')
		}
	});
}

let options = {
	threshold: [0.3]
}
let moreOptions= {
	threshold:[0.5]
}
let observer = new IntersectionObserver(onEntry, options)
let observerMore = new IntersectionObserver(onEntryChoose, moreOptions)
let elements = document.querySelectorAll('.product')
let choose = document.querySelectorAll('.choose')
let chooseInfo = document.querySelectorAll('.choose__info')

for (let el of elements){
	observer.observe(el)
}
for (let el of choose){
	observerMore.observe(el)
}
for (let el of chooseInfo){
	observerMore.observe(el)
}



let menuBtn = document.querySelector('.menu-btn');
let header = document.querySelector('.bg');
let menu = document.querySelector('.menu');
let pageContent = document.querySelector('.page__content');
let nav = document.querySelectorAll('.nav-header__link');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	nav.forEach((x) => x.classList.toggle('active'))
	header.classList.add('active')
	pageContent.classList.add('active')

})