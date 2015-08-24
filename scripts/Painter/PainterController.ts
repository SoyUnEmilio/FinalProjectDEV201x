module App.Painter.Controller {
    import IPainters = App.Painter.Services.IPainters;

    class PaintersController {
        selectedPainter: IPainter;
        painters: IPainter[];
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


        static $inject = ["PainterDataService"];
        constructor(
            painterDataService: App.Painter.Services.IPainterDataService) {
            this.selectedPainter = null;
            painterDataService.getAllPainters()
                .then((painters: IPainters): void => {
                    this.painters = painters.famousPainters;
                });
        }
    }

    angular
        .module("famousPainters")
        .controller("PaintersController", PaintersController);
} 