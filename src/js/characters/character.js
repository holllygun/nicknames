export default class Character {
    constructor(name, type) { 
        const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов');
        }

        if(!types.includes(type)) {
            throw new Error('Такого героя нет! Выберите подходящий тип');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp () {
        if (this.health <= 0) {
            throw new Error ("Нельзя повысить уровень умершего!");
        }

        if (this.attack === undefined || this.defence === undefined) { 
            throw new Error ("У персонажа нет свойств атаки и защиты!");
        }

        this.level +=1;
        this.attack += 20;
        this.defence += 20;
        this.health = 100;
    } 

    damage(points) {
        if (this.health <= 0){
            throw new Error ("Персонаж погиб!");    
        } 
        if (this.defence === undefined) {
            throw new Error ("У персонажа нет свойства атаки!") 
        }

        this.health -= points * (1 - this.defence / 100);
    }

    orderByProps(props =[]) {
        const sortedProps = [];

        for(const prop of props){
            if (this.hasOwnProperty(prop)) {
                sortedProps.push({key: prop, value: this[prop]});
            }
            else {
                throw new Error ("У персонажа нет такого свойства!")
            }
        }

        const remainingProps = Object.keys(this)
            .filter(key => !props.includes(key))
            .sort((a,b) => a.localeCompare(b));

        for (const key of remainingProps) {
            sortedProps.push({key:key, value: this[key]});
        }
        console.log(sortedProps)
        return(sortedProps)
    }

};
