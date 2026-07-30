import { MetricsService } from "./MetricsService";
import { StatisticsService } from "./StatisticsService";
import { ChartService } from "./ChartService";

export class DashboardService {

    private metrics = new MetricsService();

    private statistics =
        new StatisticsService();

    private charts =
        new ChartService();

    update(): void {

        console.log(

            "Dashboard refreshed."

        );

    }

    printReport(): void {

        const history =

            this.metrics.history();

        console.log(

            "Average speed:",

            this.statistics.averageSpeed(

                history

            )

        );

        console.log(

            "Average productivity:",

            this.statistics.averageProductivity(

                history

            )

        );

        console.log(

            "Downtime:",

            this.statistics.totalDowntime(

                history

            )

        );

        console.log(

            "Speed graph:",

            this.charts.speedSeries(

                history

            )

        );

    }

}
