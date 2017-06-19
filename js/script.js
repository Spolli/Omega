var $ = function(id) {
  return document.getElementById(id);
};

var linkMenu = [
  ["Sample", "http://www.example.com/", "0"], //Fav
  ["Sample", "http://www.example.com/", "0"],
  ["Sample", "http://www.example.com/", "0"],
  ["Sample", "http://www.example.com/", "0"],
  ["Sample", "http://www.example.com/", "0"],
  ["Sample", "http://www.example.com/", "0"],

  ["Sample", "http://www.example.com/", "1"], //Tab 1
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],
  ["Sample", "http://www.example.com/", "1"],

  ["Sample", "http://www.example.com/", "2"], //Tab 2
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],
  ["Sample", "http://www.example.com/", "2"],

  ["Sample", "http://www.example.com/", "3"], //Tab 3
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],
  ["Sample", "http://www.example.com/", "3"],

  ["Sample", "http://www.example.com/", "4"], //Tab 4
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"],
  ["Sample", "http://www.example.com/", "4"]
];

jQuery(document).ready(function() {
  buildMenu(1);
  buildFav();
  changeBackground();
});

function buildMenu(type) {
  var newMenu = "";
  var index = 0;
  for (var i = 0; i < linkMenu.length; i++) {
    if (linkMenu[i][2] == type) {
      newMenu += "<div class=\"column\"><a href=\"" + linkMenu[i][1] +
      "\" target=\"_blank\"><img class=\"picture\" src=\"background/theme0" + type +
       "/bg" + (index + 1) + ".jpg\" alt=\"" + linkMenu[i][0] + "\"><div class=\"label\">" + linkMenu[i][0] + "</div></a></div>";
      index++;
    }
  }
  var url = "avatar/av" + type + ".jpg";
  $('avatar').style.backgroundImage = "url(" + url + ")";
  $('main').innerHTML = newMenu;
}

function buildFav() {
  var newMenu = "";
  for (var i = 0; i < linkMenu.length; i++) {
    if (linkMenu[i][2] == "0")
      newMenu += "<div><a href=\"" + linkMenu[i][1] + "\" target=\"_blank\">" + linkMenu[i][0] + "</a></div>";
  }
  $('fav').innerHTML = newMenu;
}

function background() {
  var image = "background/wallpaper/bg" + Math.floor((Math.random() * 6) + 1) + ".jpg";
  return 'url(' + image + ')';
}

function changeBackground() {
  document.getElementsByTagName('html')[0].style.backgroundImage = background();
}
