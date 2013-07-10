describe("E2E: Testing Routes", function() {
    beforeEach(function() {
        browser().navigateTo('/');
    });

    describe("List Route:", function() {
        it('should redirect to the search route upon entering the index route', function() {
            expect(browser().location().url()).toBe('/search/list');
        });

        it('should have the right text on the page', function () {
            expect(element('.intro').text()).toMatch(/List/)
        });
    });
});