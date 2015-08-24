var app;
(function (app) {
    var Painter;
    (function (Painter) {
        var PainterController = (function () {
            function PainterController() {
            }
            PainterController.prototype.controller = function () {
                this.name = "emilio";
            };
            return PainterController;
        })();
        angular
            .module("famousPainters")
            .controller("PainterController", PainterController);
    })(Painter = app.Painter || (app.Painter = {}));
})(app || (app = {}));
//# sourceMappingURL=painterController.js.map