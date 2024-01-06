class Plant {
  /**
   * Represents a plant.
   * @constructor
   * @param {string} spec - The species of the plant.
   * @param {number} heigh - The height of the plant.
   */
  constructor(spec, heigh) {
    this.spec = spec;
    this.heigh = heigh;
  }

  /**
   * Prints out a message about the plant's species and growth rate.
   * @param {number} grow - The growth rate of the plant.
   */
  living(grow) {
    console.log(
      `I'm a ${this.spec} plant, i have a heigh of ${this.heigh} and I am ${grow} cm/year growing up`
    );
  }
}

const plant = new Plant("Rose", 50);
plant.living(5);


class Oranges extends Plant {
    /**
     * Represents a specific type of plant called oranges.
     * 
     * @param {string} spec - The species of the plant.
     * @param {number} heigh - The height of the plant.
     * @param {number} growthSpeed - The growth speed of the plant.
     */
    constructor(spec, heigh, growthSpeed) { 
        super(spec, heigh); 
        this.growthSpeed = growthSpeed;
    }

    /**
     * Prints out a message about the plant's species and growth rate.
     */
    surviving() {
        console.log(`This ${this.spec} is still living and `); 
        super.living(this.growthSpeed); 
    }
}

const clementine = new Oranges("clementina", 10, 2.5); 
console.log(
  `The name of this species is ${clementine.spec} it have a heigh of ${clementine.height} and a growSpeed of ${clementine.growthSpeed} cm/year`
); 
clementine.surviving(); 



const mandarins = new Oranges("mandarins", 8, 3);
console.log(
  `The name of this species is ${mandarins.spec} it have a heigh of ${mandarins.height} and a growSpeed of ${mandarins.growthSpeed} cm/year`
);
mandarins.surviving(); 