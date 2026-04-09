let dog = {
    "name": "Rosie",
    "nicknames": ["Ensign Roro"],
    "age": 3,
    "tricks": ["sit", "shake", "stay"]
}

while(dog.tricks.length < 25){
    dog.tricks.push("shake");
}

let txt = ""
for (let trick of dog.tricks){
    txt = txt + trick + ", ";
}

txt = txt.replace("shake", "play dead");


div.innerHTML = txt;