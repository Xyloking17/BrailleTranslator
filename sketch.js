//array storing buttons
var buttons = [];
var modifiers = [];
//array with all active braille button indexes
var activeButtons = [];
var cirRadius = 180;
var translation = ' ';


function setup() {
		createCanvas(windowWidth, windowHeight);

		noStroke();
		textSize(500);
		textAlign(CENTER, CENTER);

//defining main braille button positions
		buttons = [
			{x: width/2 - 110, y: 200, isOn: false },
			{x: width/2 + 110, y: 200, isOn: false },
			{x: width/2 - 110, y: 410, isOn: false },
			{x: width/2 + 110, y: 410, isOn: false },
			{x: width/2 - 110, y: 620, isOn: false },
			{x: width/2 + 110, y: 620, isOn: false }
		];
//defining modifier buttons
		modifiers = [
			{x: width - 200, y: 200, isOn: false},
			{x: width - 200, y: 410, isOn: false}
		]
}

//fires everytime mouse is pressed
function mousePressed() {
	let xPos = mouseX;
	let yPos = mouseY;
//checks if mouse clicked on any existing buttons
	let i = buttonClicked(xPos, yPos);
	let j = modifierClicked(xPos, yPos);

//if i >= 0, then one of the braille buttons was clicked
	if(i >= 0 ) {
		buttons[i].isOn = !buttons[i].isOn;
		updateActiveButtons();
	}
//if j === 0, then the number button was clicked
	else if( j === 0 ) {
		modifiers[j].isOn = !modifiers[j].isOn;
	//when one modifier is on, the other turns off
		modifiers[j + 1].isOn = false;
	}
	else if( j === 1) {
		modifiers[j].isOn = !modifiers[j].isOn;
	//when one modifier is on, the other turns off
		modifiers[j - 1].isOn = false;
	}

//translates the array of activeButtons to a char; located in lexicon.js
	let temp = translateToLetter(activeButtons, modifiers[0].isOn);
//if CAPS modifier is on, letter is capital
	modifiers[1].isOn ? translation = temp : translation = temp.toLowerCase();


}


function draw() {
	background(44);

//showing braille buttons
	for(let i = 0; i < buttons.length; i++) {
		let b = buttons[i];

		b.isOn === true ? fill(200) : fill(200, 50);
		ellipse(b.x, b.y, cirRadius);
	}

//showing modifiers
	for(let i = 0; i < modifiers.length; i++) {
		let b = modifiers[i];

		b.isOn === true ? fill(200) : fill(200, 50);
		ellipse(b.x, b.y, cirRadius);
	}
//showing # label
	push();
	fill(200);
	ellipse(width - 370, 170, 20);
	ellipse(width - 370, 200, 20);
	ellipse(width - 400, 230, 20);
	ellipse(width - 370, 230, 20);
	fill(200, 50);
	ellipse(width - 400, 170, 20);
	ellipse(width - 400, 200, 20);

	pop();

//showing CAPS Label
	push();

	fill(200, 50);
	ellipse(width - 370, 380, 20);
	ellipse(width - 370, 410, 20);
	ellipse(width - 400, 440, 20);
	ellipse(width - 400, 380, 20);
	ellipse(width - 400, 410, 20);
	fill(200);
	ellipse(width - 370, 440, 20);


	pop();


//Showing Translation
	push();
	strokeWeight(3);
	fill(200);
	text(translation, 300, windowHeight/2);
	pop();

}


//funtion checks if a main braille button was clicked by comparing
//distance of mouse coordinates to center of button and the button radius
function buttonClicked(xPos, yPos) {
	for(let i = 0; i < buttons.length; i++) {
		let b = buttons[i];

		let xTemp = pow((xPos - b.x), 2);
		let yTemp = pow((yPos - b.y), 2);
		let dist = sqrt(xTemp + yTemp);


		if(dist <= cirRadius/2) { return i; }
	}
}

//funtion checks if a modifier was clicked by comparing distance of
//mouse coordinates to center of button and the button radius
function modifierClicked(xPos, yPos) {
	for(let i = 0; i < modifiers.length; i++) {
		let b = modifiers[i];

		let xTemp = pow((xPos - b.x), 2);
		let yTemp = pow((yPos - b.y), 2);
		let dist = sqrt(xTemp + yTemp);


		if(dist <= cirRadius/2) { return i; }
	}
}


// resets the array of active buttons, then adds all currently active buttons
function updateActiveButtons() {
	activeButtons = [];
	for(let i = 0; i < buttons.length; i++) {
		if(buttons[i].isOn) {
			activeButtons.push(i);
		}
	}
}
