function dwarfRollCall(dwarves) {
  let dwarfList = '';
  for (let x = 0; x < dwarves.length; x++) {
    dwarfList = dwarfList + `${x + 1}. ${dwarves[x]} `;
  }
  return dwarfList;
  }

function summonCaptainPlanet(planeteerCalls){
  let capitalPlaneteer = [];
  for (let x = 0; x < planeteerCalls.length; x++ ){
    capitalPlaneteer.push(planeteerCalls[x].toUpperCase() + '!');
  }
  return capitalPlaneteer;
}

function longPlaneteerCalls(words) {
  for (let x = 0; x < words.length; x++){
    if (words[x].length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods){
  let cheeses = ['cheddar', 'gouda', 'camembert'];
  for(let x = 0; x < foods.length; x++){
    if(cheeses.includes(foods[x]) ){
      return foods[x];
    }
  }
  return 'no cheese!';
}