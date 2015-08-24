var App;
(function (App) {
    var Painter;
    (function (Painter) {
        var Controller;
        (function (Controller) {
            var PaintersController = (function () {
                function PaintersController(painterDataService) {
                    var _this = this;
                    this.selectedPainter = null;
                    painterDataService.getAllPainters()
                        .then(function (painters) {
                        _this.painters = painters.famousPainters;
                    });
                }
                //painters: IPainter[] = [
                //    new Painter({
                //        name: "Michelangelo",
                //        style: "Renaissance",
                //        examples: ["David", "Sistine Chapel", "The Last Judgement"]
                //    }),
                //    new Painter({
                //        name: "Raphael",
                //        style: "Renaissance",
                //        examples: ["School at Athens", "Lucretia", "Saint George and the Dragon"]
                //    })
                //];
                PaintersController.$inject = ["PainterDataService"];
                return PaintersController;
            })();
            angular
                .module("famousPainters")
                .controller("PaintersController", PaintersController);
        })(Controller = Painter.Controller || (Painter.Controller = {}));
    })(Painter = App.Painter || (App.Painter = {}));
})(App || (App = {}));
//# sourceMappingURL=PainterController.js.map