describe('equal', function() {
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