import Swordsman from '../characters/swordsman.js';

test ('swordsmanInfo', () => {
    const newSwordsman = new Swordsman("Swordsman");
    const correct = {
        attack: 40, 
        defence: 10,
        health: 100, 
        level: 1,
        name: "Swordsman",
        type: "Swordsman",
    };
    
    expect(newSwordsman).toEqual(correct)
});
