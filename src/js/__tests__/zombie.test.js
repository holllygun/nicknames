import Zombie from '../characters/zombie.js';

test ('zombieInfo', () => {
    const newZombie = new Zombie("Zombie");
    const correct = {
        attack: 40, 
        defence: 10,
        health: 100, 
        level: 1, 
        name: "Zombie",
        type: "Zombie",
    };

    expect(newZombie).toEqual(correct);
});
