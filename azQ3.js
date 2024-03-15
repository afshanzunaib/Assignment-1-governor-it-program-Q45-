// lower case:
var person_Name = "Afshan";
console.log("lowercase:", person_Name.toLowerCase());
//upper case:
console.log("uppercase:", person_Name.toUpperCase());
//Title case:
console.log("titlecase:", person_Name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
