class EntityBase {
    // Private variables
    #name 
    #age
    #gender 

    constructor({ name,age,gender }){
        this.#name = name
        this.#age = age
        this.#gender = gender
    }

    get name(){
        const prefix = this.#gender === "male" ? "Mr." : "Ms."
        return `${prefix} ${this.#name}`
    }

    get birthDay(){
        if(!this.#age) {
            throw new Error("You must define age first!")
        }

        return new Date().getFullYear() - this.#age
    }

    set age(value){
        this.#age = value
    }
}

module.exports = EntityBase