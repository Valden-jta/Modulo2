export class Professional {
    // atributos
    #name;
    #age;
    #weight; 
    #height; 
    #isRetired;
    #nationality; 
    #oscarsNumber; 
    #profession; 
    #photo;
  
    // Constructor
    constructor(
        
        name,
        age,
        weight, 
        height,
        isRetired,
        nationality, 
        oscarsNumber, 
        profession,
        photo,
    ) {
      this.#name = name;
      this.#age = age;
      this.#weight = weight;
      this.#height = height;
      this.#isRetired = isRetired;
      this.#nationality = nationality;
      this.#oscarsNumber = oscarsNumber;
      this.#profession = profession;
      this.#photo = photo;
    }
    // Getters y setters
   get name()  {
      return this.#name;
    }
   set name(name) {
      this.#name = name;
    }
   get age() {
      return this.#age;
    }
   set age(age) {
      this.#age = age;
    }
   get weight()  {
      return this.#weight;
    }
   set weight(weight) {
      this.#weight = weight;
    }
   get height()  {
      return this.#height;
    }
   set height(height) {
      this.#height = height;
    }
   get isRetired()  {
      return this.#isRetired;
    }
   set isRetired(isRetired) {
      this.#isRetired = isRetired;
    }
   get nationality()  {
      return this.#nationality;
    }
   set nationality(nationality) {
      this.#nationality = nationality;
    }
   get oscarsNumber() {
      return this.#oscarsNumber;
    }
   set oscarsNumber(oscarsNumber) {
      this.#oscarsNumber = oscarsNumber;
    }
  
   get profession()  {
      return this.#profession;
    }
   set profession(value ) {
      this.#profession = value;
    }
  
   get photo()  {
      return this.#photo;
    }
   set photo(value ) {
      this.#photo = value;
    }
  }

