import Bowman from '../characters/bowman.js';

test ('bowmanInfo', () => {
    const newBowman = new Bowman("Bowman");
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Bowman',
        type: 'Bowman',
    };

    expect(newBowman).toEqual(correct);
});
