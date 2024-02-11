const machine = {
  Builder: "Toyota",
  newFeatures: ["Less-Consumption", "Noisy", "Leakage"],
  horse_power: "400hp",
  get headlines() {
    return `This machine called ${this.Builder} and with a horse-power of ${this.horse_power} and the main problem in the machine is ${this.newFeatures[0]}`;
  },
  set theMainCap(val) {
    console.log("Settings the newFeatures property");
    this.newFeatures.unshift(val);
  },
  get newCharacters() {
    return machine.newFeatures[0];
  },
};

console.log(machine.headlines);
machine.theMainCap = "Bad drifting";
console.log(machine.headlines);
