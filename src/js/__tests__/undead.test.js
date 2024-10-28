import Undead from '../characters/undead.js';

test ('undeadInfo', () => {
    const newUndead = new Undead("Undead");
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Undead",
        type: "Undead",
    };

    expect(newUndead).toEqual(correct);
});
