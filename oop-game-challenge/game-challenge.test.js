const Player = require('./game-challenge');

describe('Player class', () => {
    let player1, player2;

    beforeEach(() => {
        player1 = new Player('Bob');
        player2 = new Player('Alice');
    });

    test('should initialize with correct name, lvl, and points', () => {
        expect(player1.name).toBe('Bob');
        expect(player1.lvl).toBe(1);
        expect(player1.points).toBe(0);

        expect(player2.name).toBe('Alice');
        expect(player2.lvl).toBe(1);
        expect(player2.points).toBe(0);
    });

    test('should gain experience points correctly and lvl up', () => {
        player1.gainXp(5);
        expect(player1.points).toBe(5);
        expect(player1.lvl).toBe(1);

        player1.gainXp(5);
        expect(player1.points).toBe(0);
        expect(player1.lvl).toBe(2);

        player1.gainXp(8);
        expect(player1.points).toBe(8);
        expect(player1.lvl).toBe(2);

        player1.gainXp(4);
        expect(player1.points).toBe(2);
        expect(player1.lvl).toBe(3);
    });

    test('should describe the player correctly', () => {
        player1.gainXp(5);
        player1.gainXp(5);
        expect(player1.describe()).toBe('Bob is level 2 with 0 experience points');

        player2.gainXp(7);
        player2.gainXp(2);
        expect(player2.describe()).toBe('Alice is level 1 with 9 experience points');
    });

    test('should handle invalid experience points', () => {
        expect(() => {
            player1.gainXp(0);
        }).toThrow('Points must be between 1 and 10');

        expect(() => {
            player1.gainXp(11);
        }).toThrow('Points must be between 1 and 10');
    });
});