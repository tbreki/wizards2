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

 for(let w = 0; w< wizards.length; w ++ ){
console.log(wizards[w]);
 }

getP = (id) => console.log(document.getElementById(id));

const pOne = document.getElementById("1");
console.log(pOne.innerHTML);

setText = ()=> {const pOne = document.getElementById("1");
pOne.innerHTML = person1.Firstname;
pOne.style.color = person1.color;
}

setText();

const pTwo = document.getElementById("2");
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

setText3();