//Task:41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician: string [] = ["naiz","ayaz","bilal"];
//show_magicians(magician)
//Task 42:
function make_great1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The great ";
    }
}
//const magicians: string[] = ["naiz","ayaz","bilal"];
//make_great1(magicians)
//show_magicians(magicians)
//Task 43:
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great ");
    }
    return greatMagicians;
}
var magicians3 = ["naiz", "ayaz", "bilal"];
var greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);
