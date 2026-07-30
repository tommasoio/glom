import { MetricsService } from "../src/services/MetricsService";

describe("MetricsService", () => {

    test("history should not be empty", () => {

        const service = new MetricsService();

        expect(

            service.history().length

        ).toBeGreaterThan(0);

    });

});
