(() => {
	console.log("hello Trevor");
	console.log("click the Seoul")


let objectButton = document.querySelector("#seoul")


function ingClick() {
	console.log(this.id);

}
/////I need to practice a lot///////
objectButton.addEventListener("click", ingClick);

})();