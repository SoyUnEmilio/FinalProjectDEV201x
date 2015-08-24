module App.Painter {
    export interface IPainter {
        name: string;
        style: string;
        examples: string[];
    }

    export class Painter implements IPainter {
        name: string;
        style: string;
        examples: string[];

        constructor(painter: IPainter) {
            this.name = painter.name;
            this.style = painter.style;
            this.examples = painter.examples;
        }

    }
} 