function multiply(x, y) {
    return x * y;
}

describe('My first Karma test', function() {
    it('should be true', function() {
        expect(true).toEqual(true);
    });

    it('should be false', function() {
        expect(false).toEqual(false);
    });

    it('should multiply 2 on 2', function() {
        expect(multiply(2, 2)).toEqual(4);
    });
});