console.log('Hello world!'); // '' = ""

/*Variables.
    recommendations
        Use english names because of æøå problems
        camelCase recomended
*/

let age = 28; //kan endre seg
const firstName = "Julie"; //konstant

//boolean
const isPresent = true;
console.log(typeof(isPresent));

//string chaining/ concatenation(java)
console.log(firstName + " " + age); // +            
console.log("hei, jeg heter", firstName); //komma   chaining
console.log(`min alder er ${age}`);// `` med ${}    template literal

//Show types. farge gjenspeiler type
console.log(typeof(age));
console.log(typeof(firstName));

const surName = "Hauge";
const fullname = firstName + " " + surName;  //parent
console.log(fullname);
//string methods seinere

//edit html with js
const htmlElement = document.querySelector("#javaScriptData")
htmlElement.textContent = fullname;