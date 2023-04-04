const person1 = {
    Firstname: "Harry Potter",
   
    color: "Black"
  };
  
  const person2 = {
    Firstname: "Hermione Granger",
    
    color: "Brown"
  };
  
  const person3 = {
    Firstname: "Ron Weasley",
    
    color: "Red"
  };

  const wizards = [person1,person2,person3]
  const wiz =[...wizards]

  console.log(wiz);

 //for(let w = 0; w< wizards.length; w ++ ){
//console.log(wizards[w]);
 //}

 wiz.forEach((item, index)=>{
  getP = (id) => {console.log(document.getElementById(id));
  const one = document.getElementById("1");
  const two = document.getElementById("2");
  const three = document.getElementById("3");}


  setText = ()=> {const one = document.getElementById("1");
  one.innerHTML = wiz[0].Firstname;
  one.style.color = wiz[0].color;
  }
  setText2 = ()=> {const two = document.getElementById("2");
  two.innerHTML = wiz[1].Firstname;
  two.style.color = wiz[1].color;
  }
  setText3 = ()=> {const three = document.getElementById("3");
  three.innerHTML = wiz[2].Firstname;
  three.style.color = wiz[2].color;
  }
  setText();
  setText2();
  setText3();

  //update 

})







/*const pTwo = document.getElementById("2");
console.log(pOne.innerHTML);

setText2 = ()=> {const pTwo = document.getElementById("2");
pTwo.innerHTML = person2.Firstname;
pTwo.style.color = person2.color;
}

setText2();

const pTree = document.getElementById("3");
console.log(pTree.innerHTML);

setText3 = ()=> {const pTree = document.getElementById("3");
pTree.innerHTML = person3.Firstname;
pTree.style.color = person3.color;
}

setText3();*/


