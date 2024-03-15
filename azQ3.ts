// lower case:
let person_Name: string ="Afshan";
console.log("lowercase:", person_Name.toLowerCase());

//upper case:
console.log("uppercase:",person_Name.toUpperCase());

//Title case:
console.log("titlecase:",person_Name.replace(/\bw/g,c => c.toUpperCase()));