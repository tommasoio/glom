export class TimeUtils {

    static now(): string {

        return new Date().toLocaleString();

    }

    static timestamp(): number {

        return Date.now();

    }

}
