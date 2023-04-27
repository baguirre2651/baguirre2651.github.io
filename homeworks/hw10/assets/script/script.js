// s1 outfit
let s1 = document.querySelector("#s1");
s1.onclick = function() {
	document.querySelector("#body").style.display = "none";
	hideOutfits();
	document.querySelector("#o1").style.display = "block";
};
	
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/


// s2 outfit
/* get #s2 outfit */
/* repeat process */
let s2 = document.querySelector("#s2");
s2.onclick = function() {
	document.querySelector("#body").style.display = "none";
	hideOutfits();
	document.querySelector("#o2").style.display = "block";
};

// s3 outfit
/* get #s3 outfit */
/* repeat process */
let s3 = document.querySelector("#s3");
s3.onclick = function() {
	document.querySelector("#body").style.display = "none";
	hideOutfits();
	document.querySelector("#o3").style.display = "block";
};


// s4 outfit
/* get #s4 outfit */
/* repeat process */
let s4 = document.querySelector("#s4");
s4.onclick = function() {
	document.querySelector("#body").style.display = "none";
	hideOutfits();
	document.querySelector("#o4").style.display = "block";
};

// s5 outfit
/* get #s5 outfit */
/* repeat process */
let s5 = document.querySelector("#s5");
s5.onclick = function() {
	document.querySelector("#body").style.display = "none";
	hideOutfits();
	document.querySelector("#o5").style.display = "block";
};

//hide outfit
function hideOutfits() {
	let outfits = document.getElementsByClassName("outfit");
	for (let i = 0; i < outfits.length; i++) {
		outfits[i].style.display = "none";
	}
}

// strip outfit
let strip = document.querySelector("#strip-button");
strip.onclick = function() {
	hideOutfits();
	document.querySelector("#body").style.display = "block";
};