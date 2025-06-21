function personInfo(){
    console.log(`person Name is: ${this.name} and age: ${this.age}`)
};

const person = {
    name : "Gaurav",
    age: 21
};
 
personInfo.call(person);