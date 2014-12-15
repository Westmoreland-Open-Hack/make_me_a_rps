/* Assignment: Step One */

// #1
var random1 = Math.random();
console.log("1. This is a random number "+random1);


// #2
var limit = 3;
for (var i = 1; i <= limit; i++) {
	var random2 = Math.random();
	console.log("2."+i+" This is a random number "+random2);
};


// #3
function makeRandon(i){
	var random3 = Math.random();
	console.log("3."+i+" This is a random number "+random3);
};

for (var i = 1; i <= limit; i++) {
	makeRandon(i);
};
