var App;
(function (App) {
    var Painter;
    (function (Painter) {
        var Services;
        (function (Services) {
            var PainterDataService = (function () {
                function PainterDataService($http) {
                    this.$http = $http;
                }
                PainterDataService.prototype.getAllPainters = function () {
                    return this.$http.get('/JSON/famousPainters.json')
                        .then(function (response) {
                        return response.data;
                    });
                };
                PainterDataService.$inject = ["$http"];
                return PainterDataService;
            })();
            angular
                .module("famousPainters")
                .service('PainterDataService', PainterDataService);
        })(Services = Painter.Services || (Painter.Services = {}));
    })(Painter = App.Painter || (App.Painter = {}));
})(App || (App = {}));
//# sourceMappingURL=PainterDataService.js.map