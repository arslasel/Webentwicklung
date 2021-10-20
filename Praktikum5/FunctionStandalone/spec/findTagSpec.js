describe('findTag', function() {
    let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt elit ipsum, vitae egestas nibh commodo id. Vivamus nec purus faucibus, laoreet nunc a, venenatis velit. In aliquet molestie nunc, sed pharetra turpis semper vel. Praesent hendrerit tortor quis turpis tempor, eget tempor nibh sollicitudin. Mauris auctor diam ut odio vulputate hendrerit. Fusce ultrices nunc a nisl tincidunt elementum. Phasellus et mattis nisi, in malesuada felis. Maecenas id leo ut est sodales euismod at at purus. In blandit imperdiet hendrerit. Donec sed consectetur elit, vitae venenatis orci. Nullam in viverra eros, vitae lobortis purus.';

    it('Findet Tag', function() {
        expect(findTag(`${loremIpsum}<hello>${loremIpsum}`)).toEqual('hello');
    });

    it('findet erster Tag, wenn mehrere Tags gemacht worden sind', function() {
        expect(findTag('<hello><world>TATA BLALA')).toEqual('hello');
    });

    it('Sollte kein Tag finden', function() {
        expect(findTag('<hello')).toBeUndefined();
        expect(findTag('hello>')).toBeUndefined();
        expect(findTag('hello')).toBeUndefined();
    });
});