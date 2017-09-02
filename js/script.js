
/*
var $greeting = $('#greeting');
var total = 0;
var $greeting2 = $('#greeting2');
var total2 = 0;

$('#kitt').click(function() {
  //the element has been clicked... do stuff here
  total = total + 1;
  $greeting.text('You click me ' + total + '!');
});



$('#cat').click(function() {
  //the element has been clicked... do stuff here
  total2 = total2 + 1;
  $greeting2.text('You click me ' + total2 + '!');
});


https://stackoverflow.com/questions/19222395/how-to-add-an-image-inside-a-dynamically-created-div
*/

// clear the screen for testing
document.body.innerHTML = '';

var total = 0;

var nums = ["Alfonso","Delaila","Alex","Mia","Luffy"];

var trac = [0,0,0,0,0];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.setAttribute("id", num + i)
    document.body.appendChild(elem);
    //elem.textContent = num;

    var h1 = document.createElement("h1");

    var nameimg = num + ".jpg"

    //setting this css style solving problem with new line in textContent
    h1.setAttribute('style', 'white-space: pre;');
    h1.setAttribute("id", num);
    h1.textContent = num;
    document.getElementById(num + i).appendChild(h1);





    var img = document.createElement("img");
      img.setAttribute("src", nameimg);
      img.setAttribute("height", "100");
      img.setAttribute("width", "100");
      //img.getElementById(num).appendChild(img);

    // ... and when we click, alert the value of `num`
    img.addEventListener('click', (function(numCopy) {
        return function() {
          var a = nums.indexOf(numCopy);
          var b = trac[a];

          ++b;
          trac[a]=b;

          document.getElementById(numCopy).textContent = 'You click me ' + b + ' times in '+numCopy+'!';
          //alert('You click me ' + total + ' in '+numCopy+'!');
        };
    })(num));

    //document.body.appendChild(elem);

    document.getElementById(num + i).appendChild(img);
};
