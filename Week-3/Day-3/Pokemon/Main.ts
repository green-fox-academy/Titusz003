  
import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

let chooseEffective=function(availablepokemon:Pokemon[],enemypokemon:Pokemon){
for(let i=0;i<availablepokemon.length;i++){
    if(  availablepokemon[i].effectiveAgainst===enemypokemon.type){
        return availablepokemon[i].name
    }
}
}

console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

