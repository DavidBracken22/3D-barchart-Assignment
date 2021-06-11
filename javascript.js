let data = [56, 73, 83, 97, 100, 110, 140, 157, 168, 187, 190, 210, 235, 256, 278, 300]

let colours = ["#0C8EE8","#E600FF","#E8720C","#CAFF0A"]

//Get the max value of the grid
let gridMax = Math.sqrt(data.length);

//create bars and bind data using d3.js
let scene = d3.select("a-scene")

let labels = scene.selectAll("a-text.labels").data(data)
    .enter().append("a-text").classed("labels", true)
    .attr("position", ()=> {
        let x =  5
        let y = 100
        let z = 0
        return x + " " + y + " " + z 
    })
    .attr("width", 8)
    .attr("color", "green")
    .attr("font", "Mozillavr")
    .attr("value", "textefrewfew")
    .attr("align", "center");
 

let floor = scene.append("a-box")
        .attr("position", ()=> {
            let x =  1.5
            let y = -.3
            let z = 1.5
            return x + " " + y + " " + z 
        })
        .attr("height", .5)
        .attr("width",  gridMax)
        .attr("depth",  gridMax)
        .attr("color", "green");  

let bars = scene.selectAll("a-box.barchart").data(data).enter().append("a-box")
    .attr("position", (d, i) => {
        let x = i % gridMax;
        let z = Math.floor(i / gridMax);
        let y = d/70;
        return x + " " + y + " " + z;
    }) 
    .attr("height", d => d / 35)
    .attr("width",  1)
    .attr("depth", 1)
    .attr("color", d => {
        let col =  ""
        
        if (d < 100){
            col = colours[0]
        }
        if (d >= 100 && d < 160){
            col = colours[1]
        }
        if (d > 160 && d < 230){
            col = colours[2]
        }
        if (d > 230){
            col = colours[3]
        }
        
        return col;
    })
    

