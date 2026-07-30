export class Formatter {

    static percent(value: number): string {

        return value.toFixed(2) + "%";

    }

    static speed(value: number): string {

        return value.toFixed(1) + " m/min";

    }

    static minutes(value: number): string {

        return value + " min";

    }

}
