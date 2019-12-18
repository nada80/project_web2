EventObjects = {
  settarget: null,
  settype: null,
  settime:null,
  display:function(){
    console.log(this.settarget);
    console.log(this.settype);
    console.log(this.settime);
  }
}

obj1 = Object.create(EventObjects);
obj2 = Object.create(EventObjects);
obj3 = Object.create(EventObjects);
obj4 = Object.create(EventObjects);

var itemsArray = []

//localStorage.setItem('items', JSON.stringify(itemsArray))
//const data = JSON.parse(localStorage.getItem('items'))


window.addEventListener("load" ,  function (event){
  alert("Hello to our site ");
  obj1.settarget=event.target;
  obj1.settype=event.type;
  obj1.settime=event.timeStamp;
  //obj1.display();

  itemsArray.push(obj1)
  localStorage.setItem('load', JSON.stringify(itemsArray))
  //alert("itemsArray"+JSON.stringify(itemsArray));


  //alert(localStorage.getItem('items'));

});



  window.addEventListener("unload" ,  function (event){

    alert("Thank you to visit us.. ");
    obj2.settarget=event.target;
    obj2.settype=event.type;
    obj2.settime=event.timeStamp;
    //obj2.display();
    // Put the object into storage

    itemsArray.push(obj2)
    localStorage.setItem('unload', JSON.stringify(itemsArray))

 

  });


function fanc1() {
  
  arr_letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];

  num = document.getElementById("num");

  if (num.value <= 26 && num.value >= 1) {
    numOfLetter = num.value;
    console.log(numOfLetter);
  }
  else {
    alert("please enter a valid number !");
  }



  function getRandomArray(min, max) {
    var A = [];
    for (var i = 1; i <= numOfLetter; i++) { //3
      if (max >= min) A.push(max--)

      A.sort(function () { return .5 - Math.random() });
    }
    return A;
  }

   getnum = new Array();
  getnum = getRandomArray(1, 26);

  for (var i = 0; i < getnum.length; i++) { // 23  24 25 26

    ind = getnum[i];

     button = document.createElement("input");
    button.setAttribute('id', 'butn');
    button.setAttribute('type', 'button');
    button.setAttribute('value', arr_letter[ind - 1]);
    //bText = document.createTextNode(arr_letter[ind-1]);          
    //button.appendChild(bText); 
    //button.innerHTML = arr_letter[ind-1];

    button.setAttribute('onclick', 'GetPic(event)');
    button.onclick = GetPic;
     body = document.getElementsByTagName("div")[0];
    body.appendChild(button);
  }
  obj3.settarget=event.target;
  obj3.settype=event.type;
  obj3.settime=event.timeStamp;
 
  itemsArray.push(obj3)
  localStorage.setItem('onclick1', JSON.stringify(itemsArray))
  num.value=' ';

/*
  window.setInterval(function(){
    localStorage.clear();
    body.innerHTML = ""
      console.log("s")
    }
    , 5000);

    */

}

function GetPic(e) {
//   setTimeout(myFunction,15000);

  lrt = e.target.value;

 index = lrt; 

  img = document.createElement("img");
    img.src = 'images/' + index + '.jpg';

  body = document.getElementById("imges")
    body.appendChild(img);

    obj4.settarget=event.target;
    obj4.settype=event.type;
    obj4.settime=event.timeStamp;
    //obj4.display();
    itemsArray.push(obj4)
    localStorage.setItem('onclickimg', JSON.stringify(itemsArray))

   

}


window.setInterval(function(){
// $.post("home.php",JSON.stringify(itemsArray),function(data){console.log("done");});
$.ajax({
      "type": "POST",
       "url": "home.php",
      "data": {
        "ob1":JSON.stringify(localStorage.getItem('load')) , 
        "ob2":JSON.stringify(localStorage.getItem('unload')),
        "ob3":JSON.stringify(localStorage.getItem('onclick1')),
        "ob4":JSON.stringify(localStorage.getItem('onclickimg')),
    },
    "success": function(response){
      localStorage.clear();
      
       }
   });

  }
  , 5000);


  


  $("#database").click(function(){
    //$.get("home.php", function(data){ if(data){ var events=JSON.parse(data); alert(events);}});
   $.ajax({
     "type": "GET",
     "url": "home.php",
     "data": {"ob1": "" , "ob2": "" , "ob3": "" , "ob4": ""},
   "success": function(response){
       //var result=JSON.parse(response);
       alert(response);
     	}
     
 });
  });

  window.setInterval(function(){
    localStorage.clear();
    //body.innerHTML = ""
     // console.log("s")
    }
    , 10000);

