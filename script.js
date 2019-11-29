const canvas = document.getElementById("canvas1");
// const canvas = document.getElementById("Mycanvas");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

// create constructor function
function particle(x,y,directionx,directiony,size,color){
	this.x =x;
	this.y =y;
	this.directionx = directionx;
	this.directiony = directiony;
	this.size = size;
	this.color = color;
}

// add draw method to particle prototype

particle.prototype.draw =function(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0, Math.PI*2, false);
ctx.fillStyle = this.color;
ctx.fill();	
}



// add update method

particle.prototype.update=function(){
	if(this.x + this.size> canvas.width || this.x-this.size<0){
		this.directionX = -this.directionX;

	}
	if(this.y + this.size> canvas.height || this.y -this.size<0){
		this.directionY = -this.directionY;

	}
	this.x += this.directionx;
	this.y += this.directiony;

this.draw();

}


// crate particle array
function init(){
	particleArray =[];
	for (let i=0; i<100; i++) {
		let size = Math.random() * 4;
		let x = Math.random() *(innerWidth -size * 1);
		let y = Math.random() *(innerHeight -size * 1);
		let directionX =(Math.random() * .2) - .1;
		let directiony =(Math.random() * .2) - .1;
		let color = 'magenta';


particleArray.push(new particle(x,y, directionX,directiony,
	size,color));

	}
}

// animation loop
function animate (){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, innerWidth,innerHeight);

	for ( let i=0; i<particleArray.length; i++) {
		particleArray[i].update();
	}
}

init();
animate();