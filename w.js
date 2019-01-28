
function w(initialPopulation = 100, mutationRate = 0.1) {

    this.population = []
    this.mutationRate = mutationRate;

    this.matingPool;
    this.finished = false;
    this.targetChromosome;
    this.generations = 0;

    // Create a random population
    for (var i = 0; i < initialPopulation; i++) {
        this.population.push(new chromosome());
    }

    // Find the best chromosome and then fill
    // the mating pool with chromosomes with the best
    // relative fitness to the best chromosome.
    this.evaluate = function () {
        var max_fitness = 0;
        for (var i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness();
            if (this.population[i].fitness > max_fitness) {
                max_fitness = this.population[i].fitness;
                this.targetChromosome = this.population[i];
            }
        }
        if (max_fitness == 42) // 42 = number of edges in the graph
            this.finished = true;
    }

    this.naturalSelection = function () {
        var max_relative_fitness = 0;
        var numOfGenes = this.population[0].genes.length;
        this.matingPool = []
        this.generations += 1;
        for (var i = 0; i < this.population.length; i++) {

            for (var j = 0; j < numOfGenes; j++)
                if (this.population[i].genes[j] == this.targetChromosome.genes[j])
                    this.population[i].relative_fitness += 1;

            if (this.population[i].fitness > 5)
                for (var j = 0; j < this.population[i].relative_fitness ** 2; j++)
                    this.matingPool.push(this.population[i]);

        }
    }


    this.reproduce = function () {
        for (var i = 0; i < this.population.length; i++) {
            var parentA = this.matingPool[floor(random(this.matingPool.length))];
            var parentB = this.matingPool[floor(random(this.matingPool.length))];
            var newChromosome = parentA.crossover(parentB);
            newChromosome.mutate(this.mutationRate);
            this.population[i] = newChromosome;
        }
    }




}
