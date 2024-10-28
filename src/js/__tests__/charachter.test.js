import Character from '../characters/character.js';

test ('commonCharacter', () => {
    const newCharacter = new Character("Legolas", "Zombie");
    const correct = {
        attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
        name: "Legolas",
        type: "Zombie",
    };

    expect(newCharacter).toEqual(correct);
});

test('Name error', () => {
    expect(() =>new Character('J', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');

    expect(() => new Character('Jooooohhhhhhnnnnnn', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
});


test('Type error', () => {
    expect(() => new Character("Bo", "Bow")).toThrow('Такого героя нет! Выберите подходящий тип');
});

test('levelUp', () => {
    const newCharacter = new Character ("Bo", "Bowman");
    newCharacter.attack = 25;
    newCharacter.defence = 25;
    newCharacter.levelUp()

    expect(newCharacter.attack).toBe(45);
    expect(newCharacter.defence).toBe(45);
})

test ('levelUpError', () => {
    const newCharacter = new Character ("Bo", "Bowman")
    newCharacter.health = 0;

    expect(() => newCharacter.levelUp()).toThrow("Нельзя повысить уровень умершего!");
});

test ('damageTest', () => {
    const newCharacter = new Character("Bo", "Bowman");
    newCharacter.attack = 25;
    newCharacter.defence = 25;

    newCharacter.damage(10);

    expect(newCharacter.health).toBeCloseTo(92.5);
})

test ('damageError', () => {
    const newCharacter = new Character("Bo", "Bowman");
    newCharacter.health = 0;
    expect(() => newCharacter.damage(10)).toThrow("Персонаж погиб!");
})

test ('damageTestUndefined', () => {
    const newCharacter = new Character("Bo", "Bowman");

    expect(() => newCharacter.damage(10)).toThrow("У персонажа нет свойства атаки!");
})

test('levelUpUndefined', () => {
    const newCharacter = new Character ("Bo", "Bowman")

    expect(() =>newCharacter.levelUp()).toThrow("У персонажа нет свойств атаки и защиты!");
})

test('sortingTest', () => {
    let newCharacter = new Character ("мечник", "Bowman")
    newCharacter.level = 2;
    newCharacter.attack = 80;
    newCharacter.defence = 40;
    newCharacter.health = 10;

    const sortedChar = newCharacter.orderByProps(["name", "level"]);
    const correct = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }, 
        { key: 'type', value: 'Bowman'}
      ];

    expect(sortedChar).toEqual(correct);
})

test('sortingTestDefault', () => {
    let newCharacter = new Character ("мечник", "Bowman")
    newCharacter.level = 2;
    newCharacter.attack = 80;
    newCharacter.defence = 40;
    newCharacter.health = 10;

    const sortedChar = newCharacter.orderByProps();
    const correct = [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }, 
        { key: 'level', value: 2 },
        { key: 'name', value: 'мечник' },
        { key: 'type', value: 'Bowman'}
      ];

    expect(sortedChar).toEqual(correct);
})

test('sortingTestError', () => {
    let newCharacter = new Character ("мечник", "Bowman")
    newCharacter.level = 2;
    newCharacter.attack = 80;
    newCharacter.defence = 40;
    newCharacter.health = 10;

    expect(() => newCharacter.orderByProps(["name", "intellegence"])).toThrow("У персонажа нет такого свойства!");
})

