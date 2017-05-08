/**
 * Closures looks like this:
 * 
 * function outerFunction(){
 *      var someCounte = 0;
 * 
 *      function innerFunction(){
 *          someCount++;
 *          console.log("Called " + someCount + "times"); 
 *      }
 *      
 *      return innerFunction;
 * }
 * 
 * This way, we could create different private scopes
 * counter1 = outerfunction();
 * counter2 = outerfunction();
 * counter1(); //Called 1 times
 * counter2(); //Called 1 times
 * 
 */

function makeCounter(noun){
    var count = 0;
    return function (){
        count += 1;
        return count + ' ' + noun;
    }
}

var counter1 = makeCounter("Cats");
var counter2 = makeCounter("Dogs");

console.log(counter1());
console.log(counter1());
console.log(counter2());

