let myName = "Ujjwal          ";

String.prototype.truelenght = function () {
    console.log(`True lenght is ${this.trim().length}`);
    // return this.trim().length;
}
console.log(myName.length);
// console.log(myName.truelenght);
myName.truelenght();

let myheros = ["thor", "spiderman"];

let heropower = {
    thor : "Hammer",
    spiderman : "Web-slinging",

    getSpiderPower: function() {
        console.log(`spider man power ${this.spiderman}`);
    },
}

Object.prototype.IronMan = function(){
    console.log("I'm Iron Man");
}

Array.prototype.Batman = function(){
    console.log("I'm Batman");
}

heropower.IronMan();
myheros.IronMan();
// heropower.Batman();

let arr = [];
arr.Batman();

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeVideo: true,
    isAvailable: true,
    makeVideo: function() {
        console.log("I'm TASupport");
    },

    __proto__: TeachingSupport
}

//Modern syntex

Object.setPrototypeOf(TeachingSupport, Teacher);