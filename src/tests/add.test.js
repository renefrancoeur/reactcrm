//use of Jest https://jestjs.io/docs/en/getting-started  under API reference Globals and Expect

const add = (a,b) => a+b;
const generateGreeting = (name = 'Anonymous') =>`Hello ${name}!`;

test('Should add 2 numbers', ()=> {
    const result = add(3,4);
    expect(result).toBe(7);
    });

test('Should render proper string', ()=> {
        const result = generateGreeting('Rene');
        expect(result).toBe('Hello Rene!');
    });

    test('Should render proper greeting with no name', ()=> {
        const result = generateGreeting();
        expect(result).toBe('Hello Anonymous!');
    });