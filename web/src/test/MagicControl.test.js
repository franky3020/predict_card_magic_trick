const magicControl = require("../MagicControl");
const magicControl2 = require("../MagicControl");

test('magicControl', () => {
    expect(magicControl).toBe(magicControl2);
    expect(magicControl.canStartShow).toBe(false);

    magicControl2.canStartShow = true;
    expect(magicControl.canStartShow).toBe(true);
});

