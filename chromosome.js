var graph = [
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
]

var colors = ['red', 'green', 'blue', 'yellow'];

function chromosome(construct = true) {

    this.genes = []
    this.relative_fitness = 0;
    this.fitness = 0;

    // Construct
    if (construct)
        for (var i = 0; i < graph.length; i++) {
            this.genes.push(colors[floor(random(4))]);
        }

    // Calculates the correct number of genes.
    this.calcFitness = function () {
        for (var i = 0; i < graph.length - 1; i++)
            for (var j = i + 1; j < graph.length; j++)
                if (graph[i][j] == 1 && this.genes[i] != this.genes[j])
                    this.fitness += 1;
    }

    this.crossover = function (partner) {
        var newObj = new chromosome(false);
        // One point crossover
        var midpoint = floor(random(this.genes.length));
        for (var i = 0; i < this.genes.length; i++) {
            if (i > midpoint)
                newObj.genes.push(this.genes[i]);
            else
                newObj.genes.push(partner.genes[i]);
        }
        return newObj;
    }

    this.mutate = function (mutationRate) {
        var changes = ceil(mutationRate * this.genes.length);
        for (var i = 0; i < changes; i++)
            this.genes[floor(random(this.genes.length))] = colors[floor(random(4))];
    }


}
