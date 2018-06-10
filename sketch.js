var binaryStreams = [];
var binarySize = 26;
// var counter = setTimeout()

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var x = 0;
	var y = random(-1000, 0);
	for(var i = 0; i <= width / binarySize; i++) {
		var binaryStream = new BinaryStream(0, 1000);
		binaryStream.generateDigits(x, y);
		binaryStreams.push(binaryStream);
		x += binarySize;
	}
	textSize(binarySize);
}

function draw() {
	background(0, 150);
	binaryStreams.forEach(function(binaryStream) {
		binaryStream.render();
		// counter > 10 ? binaryStreams.slice(binaryStream) : counter++
	});
}

function Binary(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.value; 
	this.speed = speed;
	this.randomBinary = round(random(2, 20));
	this.first = first;

	this.setToRandomBinary = function() {
		if(frameCount % this.randomBinary == 0) {
			this.value = round(random(0, 1));
		}
	}

	this.rain = function() {
		if(this.y > height) {
			this.y = 0;
		} else {
			this.y += this.speed;
		}
	}
}

function BinaryStream() {
	this.stream = [];
	this.totalDigits = round(random(5, 30));
	this.speed = random(5, 20);
	// this.count = 0;
	
	this.generateDigits = function(x, y) {
		var first = round(random(0, 4)) == 1;
		for(var i = 0; i <= this.totalDigits;  i++) {
			var binary = new Binary(x, y, this.speed, first);
			binary.setToRandomBinary();
			this.stream.push(binary);
			y -= binarySize;
			first = false;
		}
	}

	this.render = function() {
		this.stream.forEach(function(digit) {
			if(digit.first) {
				fill(200, 255, 200); 
			} else {
				fill(100, 255, 100);
			}
			text(digit.value, digit.x, digit.y);
			digit.setToRandomBinary();
			digit.rain();
		});
	}
}




// var counter1;
// function setup() {
// 	counter1 = new Counter(0, 1000)
// }

// function Counter(start, wait) {
// 	this.count = start;

// 	this.fade = setInterval(() => {
// 		if(this.count < 10) {
			
// 			this.count++
// 		}
// 	}, wait);
// }





// this.stop = setInterval(() => {
// 	if(this.count > 10) {
// 		fill(0);
// 	} else {
// 		this.count++;
// 	} 
// }, wait);



