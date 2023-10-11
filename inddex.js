try{
    setTimeout(function(){
try{
    console.log("What is your name?");
    consoe.log("my name is Nithul");
} catch(a) {
    console.log("Error caught!");
    console.log(a.name);
}
    }, 2000);
}
catch(an){

    console.log(an.message); //name, stack
}
finally{
    console.log("hello all");
}
console.log("Introduce yourself");