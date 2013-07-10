describe("E2E: Testing Routes", function() {
    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should have the right text', function() {
        expect(element('h1').text()).toMatch(/'Allo, 'Allo!/);
    });

});