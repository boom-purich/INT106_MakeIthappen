function changepage(num){
  loadDoc(num);
}
function loadDoc(num) {
    var xmlhttp = new XMLHttpRequest();
    if(num == 1){

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("show").innerHTML = this.responseText;
        }
      };
      xmlhttp.open("GET", "Home.txt", true);
      xmlhttp.send();
    }
  else if(num == 2){

      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("show").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "Eye.txt", true);
    xmlhttp.send();
  }
  else if(num == 3){

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("show").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET","Lips.txt", true);
  xmlhttp.send();
  }
  else if(num == 4){

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("show").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET","Face.txt", true);
  xmlhttp.send();
  }if(num == 5){

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("show").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "Skin Care.txt", true);
  xmlhttp.send();
  }else if(num == 6){

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("show").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "Accessories.txt", true);
  xmlhttp.send();
  }
}
