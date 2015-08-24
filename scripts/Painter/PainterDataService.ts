module App.Painter.Services {

    import IPainter = App.Painter.IPainter;

    export interface IPainterDataService {
        getAllPainters(): ng.IPromise<IPainters>;
    }

    export interface IPainters {
        famousPainters: IPainter[];
    }

    class PainterDataService implements IPainterDataService {
        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
        }

        getAllPainters(): ng.IPromise<IPainters> {
            return this.$http.get('/JSON/famousPainters.json')
                .then((response: ng.IHttpPromiseCallbackArg<IPainters>) => {
                    return response.data;
                });
        }
    }

    angular
        .module("famousPainters")
        .service('PainterDataService', PainterDataService);

}