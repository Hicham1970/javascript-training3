let person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function()  {
        `My Full name is :${this.name}  aged ${this.age} and living in ${this.city} `
    }
}
console.log(this)