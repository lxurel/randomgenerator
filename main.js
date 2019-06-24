var accessories = ["romwe", "forever21", "pandora", "zaful"];
var shirts = ["urban outfitters", "forever21", "SHEIN"];
 // var bottoms = ["hot topic", "ASOS", "fashion nova"];
 // var shoes = ["journey's", "amazon", "fila", "nike", "adidas", "converse", "DSW"]
 // var swimsuits = ["jolyn", "zaful", "speedo", "pretty little thing", "hot topic"]
var button = $('button');
var button2 = $('.buttontwo');
// var button3 = $('button3');
// var button4 = $('button4');
// var site = $('.site');
// var result

button.on('click', randomizer);
button2.on('click', randomizeTops);
// button3.on('click', randomizerbottoms);
// button4.on('click', randomizershoes);

function randomizer(){
  var random = Math.floor(Math.random()*(accessories.length));
  var newaccessory = accessories[random];
    $('.site').text(newaccessory);
}

function randomizeTops(){
  var random = Math.floor(Math.random()*(shirts.length));
  var newtops = shirts[random];
    $('.site').text(newtops);
}
//
// function randomizerbottoms (){
//   var random = Math.floor(Math.random()*(bottoms.length));
//   var newbottoms = bottoms[random];
//   site.text(newbottom);
// // }
// //  function randomizersuits (){
// //    var random = Math.floor(Math.random()*(swimsuits.length-1));
// //    var newswimsuits = swimsuits[random];
// //    site.text(newsuit);
// //  }
// //
//  function randomizershoes (){
//    var random = Math.floor(Math.random()*(shoes.length));
//    var newshoes = shoes[random];
//    site.text(newshoes);
