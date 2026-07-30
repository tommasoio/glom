import { StatisticsService } from "../src/services/StatisticsService";

describe("StatisticsService", () => {

    test("empty speed", () => {

        const service =

            new StatisticsService();

        expect(

            service.averageSpeed([])

        ).toBe(0);

    });

});
