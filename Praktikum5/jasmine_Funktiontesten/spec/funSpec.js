
describe('findTag', function() {
    let { findTag } = require('../index');
    let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt elit ipsum, vitae egestas nibh commodo id. Vivamus nec purus faucibus, laoreet nunc a, venenatis velit. In aliquet molestie nunc, sed pharetra turpis semper vel. Praesent hendrerit tortor quis turpis tempor, eget tempor nibh sollicitudin. Mauris auctor diam ut odio vulputate hendrerit. Fusce ultrices nunc a nisl tincidunt elementum. Phasellus et mattis nisi, in malesuada felis. Maecenas id leo ut est sodales euismod at at purus. In blandit imperdiet hendrerit. Donec sed consectetur elit, vitae venenatis orci. Nullam in viverra eros, vitae lobortis purus.';

    it("Zeigt Tag", function () {
        expect(findTag("<header>Text</header")).toEqual("header");
        expect(findTag("blabla <br> blabla")).toEqual("br");
    });

    it("Zeigt kein Tag", function () {
        expect(findTag("Text</header")).toBeUndefined();
    });
});


describe('fibonacci', function() {
    const { fibonacci } = require('../index');

    it('Richtiges Resultat wird augegeben', function() {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(3)).toEqual(2);
        expect(fibonacci(4)).toEqual(3);
        expect(fibonacci(5)).toEqual(5);
        expect(fibonacci(6)).toEqual(8);
        expect(fibonacci(7)).toEqual(13);
        expect(fibonacci(8)).toEqual(21);
        expect(fibonacci(9)).toEqual(34);
        expect(fibonacci(10)).toEqual(55);
    });

    it('Gibt das richtige Resultat aus n = 20', function() {
        expect(fibonacci(20)).toEqual(6765);
    });

    it('Gibt das richtige Resultat aus n = 30', function() {
        expect(fibonacci(30)).toEqual(832040);
    });
});

describe('equal', function() {
    const { equal } = require('../index');

    it('TRUE wird zurückgegeben', function() {
        expect(equal(3, 3)).toBeTrue();
        expect(equal(3.1414, 3.1414)).toBeTrue();
        expect(equal('arslasel', 'arslasel')).toBeTrue();
        expect(equal('ZHAW Zürich', 'ZHAW Zürich')).toBeTrue();
        expect(equal(true, true)).toBeTrue();
        expect(equal(false, false)).toBeTrue();
    });

    it('Objekte werden verglichen, gibt TRUE zurück', function() {
        expect(equal({}, {})).toBeTrue();
        expect(equal({ test: 5 }, { test: 5  })).toBeTrue();
    });

    it('Ungleiche Typen werden verglichen, gibt FALSE zurück', function() {
        expect(equal(1, 3)).toBeFalse();
        expect(equal('selim', 'arslan')).toBeFalse();
        expect(equal(true, false)).toBeFalse();
    });

    it('Ungleiche Objekte werden verglichen, gibt FALSE zurück', function() {
        expect(equal({}, { test: 1 })).toBeFalse();
        expect(equal({ x: 123 }, { y: 567 })).toBeFalse();
    });
});

