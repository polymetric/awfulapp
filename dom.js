// console.dir(document);
// var headerTitle = document.getElementById("header-title");

// headerTitle.textContent = "beef gamer";
// headerTitle.style.borderBottom = 'solid 300px #000';

// var items = document.getElementsByClassName("list-group-item");
// console.log(items[1].textContent = "geef");
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor="#f4f4f4";
// }

// var li = document.getElementsByTagName('li');
// console.log(li[1].textContent = "geef");
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor="#fff";
// }

// var input = document.querySelector("input, ");
// input.value="gamer";

// // var item

// var li = document.querySelectorAll('li')
// for (var i = 0; i < li.length; i++) {

// }

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#fff';
}

var itemList = document.querySelector('#items');
console.log(itemList.parentNode);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function freeCandy() {
    var candy = document.querySelector("#candy");
    candy.setAttribute("style", "");
    everythingColor(false);
}

function everythingColor(opposite) {
    if (opposite) {
        color = "#00f"
    } else {
        color = "#f00"
    }
    var everything = document.querySelectorAll("*");
    
    for (var i = 0; i < everything.length; i++) {
        everything[i].style.backgroundColor = color;
    }

    setTimeout(function(){everythingColor(!opposite)})
}
