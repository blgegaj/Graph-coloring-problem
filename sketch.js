
rectangles = [
    { "x": 4, "y": 5, "width": 625, "height": 450 }, //1
    { "x": 4, "y": 55, "width": 352, "height": 400 }, //2
    { "x": 229, "y": 55, "width": 125, "height": 50 }, //3
    { "x": 354, "y": 55, "width": 226, "height": 175 }, //4
    { "x": 179, "y": 105, "width": 125, "height": 125 }, //5
    { "x": 304, "y": 105, "width": 125, "height": 125 }, //6
    { "x": 54, "y": 230, "width": 150, "height": 175 }, //8 -- 7
    { "x": 128, "y": 230, "width": 126, "height": 125 }, //9 -- 8
    { "x": 205, "y": 230, "width": 100, "height": 75 }, //10 -- 9
    { "x": 254, "y": 305, "width": 104, "height": 50 }, //12 -- 10
    { "x": 355, "y": 230, "width": 125, "height": 125 }, //13 -- 11
    { "x": 305, "y": 230, "width": 100, "height": 75 }, //11 -- 10
    { "x": 254, "y": 155, "width": 100, "height": 100 }, //7 -- 13
    { "x": 180, "y": 355, "width": 125, "height": 50 }, //14
    { "x": 305, "y": 355, "width": 100, "height": 50 }, //15
    { "x": 355, "y": 405, "width": 274, "height": 50 } //16
];


var population;
function setup() {

    var initialPopulation = 5000;
    var mutationRate = 0.05;
    population = new w(initialPopulation, mutationRate);
    createCanvas(700, 500);
}
function draw() {

    population.evaluate();//Check if there is a good object.
    population.naturalSelection();//only the best survive.
    population.reproduce();//New generation of the best objects.
    var target = population.targetChromosome;// Best fitness obgject in the population.

    // Print it to the screen
    console.log(target.fitness);
    for (var i = 0; i < target.genes.length; i++) {
        stroke(color(12, 12, 34));
        fill(color(target.genes[i]));
        rect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height);
    }

    // If the best object is perfect the proccess ends.
    if (population.finished) {
        //println(millis()/1000.0);
        noLoop();
        console.log(population.generations)
    }

}
