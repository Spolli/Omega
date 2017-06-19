var $ = function(id) {
  return document.getElementById(id);
};

var search = [
  ["!i", "https://www.google.com/search?tbm=isch&q="],
  ["!g", "https://www.google.com/#q="],
  ["!trs", "https://translate.google.it/?hl=it&tab=wT&authuser=0#it/en/"],
  ["!y", "https://www.youtube.com/results?search_query="],
  ["!bb", "http://bakabt.me/browse.php?q="],
  ["!tdd", "http://my.taadd.com/search/es/?wd="],
  ["!ba", "http://bato.to/search?name="],
  ["!ny", "https://www.nyaa.se/?page=search&term="],
  ["!ac", "http://www.animeclick.it/cerca?tipo=tutto&name="],
  ["!my", "https://myanimelist.net/search/all?q="],
  ["!im", "http://www.imdb.com/find?q="],
  ["!ud", "http://www.urbandictionary.com/define.php?term="],
  ["!wp", "http://it.wikipedia.org/w/index.php?search="],
  ["!aur", "https://aur.archlinux.org/packages/?O=0&K="],
  ["!amz", "https://www.amazon.it/s/ref=nb_sb_noss?__mk_it_IT=ÅMÅŽÕÑ&url=search-alias%3Daps&field-keywords="],
  ["!tp", "http://www.trovaprezzi.it/categoria.aspx?id=-1&libera="],
  ["!trt", "https://torrentproject.se/?t="],
  ["!af", "http://www.animeforce.org/?s="]
];

jQuery(document).ready(function() {
  searchinput = $("searchbox");
  if (searchinput) {
    searchinput.addEventListener("keypress", function(a) {
      var key = a.keyCode;
      if (key == 13) {
        var query = this.value;
        find(query);
      }
    });
  }
});

function find(query) {
  var type = query.substr(0, query.indexOf(' '));
  for (var i = 0; i < search.length; i++) {
    if (search[i][0] === type) {
      query = query.substr(query.indexOf(' ') + 1);
      window.open(search[i][1] + query.replaceChars("", "+"));
      $("searchbox").value = "";
      return;
    }
  }
  window.open("https://www.google.com/#q=" + query.replaceChars("", "+"));
}


String.prototype.replaceChars = function(character, replacement) {
  var str = this;
  var a;
  var b;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == character) {
      a = str.substr(0, i) + replacement;
      b = str.substr(i + 1);
      str = a + b;
    }
  }
  return str;
}
