//module app.services {
//    interface IExample {
//        title: string;
//    }
//    class Example implements IExample {
//        constructor(public title: string) {  }
//    }
//    interface IPainter {
//        name: string;
//        style: string;
//        examples: IExample[];
//    }
//    class Painter implements IPainter {
//        name: string;
//        style: string;
//        examples: IExample[];
//        constructor(painter: IPainter) {
//            this.name = painter.name;
//            this.style = painter.style;
//            this.examples = painter.examples;
//        }
//    }
//    interface IDataService {
//        getPainters(): ng.resource.IResourceClass<IPainter[]>;
//    }
//    export class DataService {
//        static $inject = ["$resource"];
//        constructor(private $resource: ng.resource.IResourceService) { }
//        getPainters(): ng.resource.IResourceClass<IPainter[]> {
//            return this.$resource<IPainter[]>("/JSON/famousPainters.json");
//        }
//    }
//    angular
//        .module("services")
//        .service("dataService", DataService);
//}  
//# sourceMappingURL=dataService.js.map