// let data = [
//             { "colour": "green", "value": 10 },
//             { "colour": "green", "value": 16 },
//             { "colour": "green", "value": 25 },
//             { "colour": "green", "value": 33 },
//             { "colour": "blue", "value": 37 },
//             { "colour": "blue", "value": 56 },
//             { "colour": "blue", "value": 68 },
//             { "colour": "blue", "value": 73 },
//             { "colour": "orange", "value": 83 },
//             { "colour": "orange", "value": 97 },
//             { "colour": "orange", "value": 104 },
//             { "colour": "orange", "value": 110 },
//             { "colour": "red", "value": 140 },
//             { "colour": "red", "value": 157 },
//             { "colour": "red", "value": 168 },
//             { "colour": "red", "value": 187 }
//         ]

// //Get the max value of the grid
// let gridMax = Math.sqrt(data.length);
// console.log(gridMax);

// //create bars and bind data using d3.js, position
// let scene = d3.select("a-scene")
// let bars = scene.selectAll("a-box").data(data)

// bars.enter().append("a-scene")
// bars.attr("position", (d, i) => {
//    let x = i % gridMax;
//    let z = Math.floor(i / gridMax);
//    let y = d.value / 70;
//    let m = i;
//    m++;
// 	console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
// 	return x + " " + y + " " + z;
// });
// bars.attr("height", d => d.value / 35);
// bars.attr("width", d => 0.9);
// bars.attr("depth", d => 0.9);
// bars.attr("color", d => d.colour);

// let labels = scene.selectAll("a-text").data(data)
// labels.enter().append("a-scene")
// labels.attr("position", (d, i) => {
// 	let x = i % gridMax;
// 	let z = Math.floor(i / gridMax);
// 	let y;
// 	if (z == 0) {
// 		y = d.value / 70 +  1;   
// 	}
// 	if (z == 1) {
// 		y = d.value / 70 + 1.5;
// 	}
// 	if (z == 2) {
// 		y = d.value / 70 + 2;
// 	}
// 	if (z == 3) {
// 		y = d.value / 70 + 3;
// 	}
// 	let m = i;
// 	m++;
// 	console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z + " label: " + d.colour);
// 	return x + " " + y + " " + z + "";

// });
// labels.attr("rotation", (d) => {
// 	x = 0;
// 	y = 225;
// 	z = 0
// 	return x + " " + y + " " + z + "";
// });
// labels.attr("value", d => d.value);
// labels.attr("baseline", "bottom");
// labels.attr("align", "center");
// labels.attr("width", 8);
// labels.attr("color", "white")
// labels.attr("font", "mozillavr");