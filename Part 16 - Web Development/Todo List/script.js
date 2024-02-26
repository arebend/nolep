// Membuat tanda "X" pada setiap list
let myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Membuat list menghilang ketika tanda "X" click
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  // console.log('close',close[i]); 
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Membuat simbol "checked" pada setiap list ketika diclick
const list = document.querySelector("ul");
function checked(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}
list.addEventListener("click", checked);

// Menambahkan list baru ketika "add" diclick
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let a = document.createElement("a");
    a.href = "#";
    a.appendChild(document.createTextNode(inputValue));

    li.appendChild(a);
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Untuk menambah "X"
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function searchElement() {
  let searchValue = document.getElementById("mySearch");
  let filter = searchValue.value.toUpperCase();
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName("li");

  if (searchValue.value === "") {
    alert("You must write something!");
  }

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  document.getElementById("mySearch").value = "";
}