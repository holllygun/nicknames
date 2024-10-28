import Daemon from '../characters/daemon.js';

test ('daemonInfo', () => {
    const newDaemon = new Daemon("Daemon")
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Daemon",
        type: "Daemon",
    };

    expect(newDaemon).toEqual(correct)
});
