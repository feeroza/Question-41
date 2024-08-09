// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// let magicianNames = ["Ayaz", "Fayas","Tariq", "madad"];
// function show_magicians(){
//    for(let magicianName of magicianNames){
//      console.log(magicianName);
// } 
// }
// show_magicians();
// show_magicians();
var magicianNames1 = ["Ayaz", "Fayas", "Tariq", "madad"];
function show_magicians() {
    for (var _i = 0, magicianNames1_1 = magicianNames1; _i < magicianNames1_1.length; _i++) {
        var item = magicianNames1_1[_i];
        console.log(item);
    }
}
show_magicians();
