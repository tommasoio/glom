import { ConveyorMetrics } from "../models/ConveyorMetrics";

export class StatisticsService {

    averageSpeed(metrics: ConveyorMetrics[]): number {

        if (metrics.length === 0) {

            return 0;

        }

        const total = metrics.reduce(

            (sum, item) => sum + item.speed,

            0

        );

        return total / metrics.length;

    }

    averageProductivity(

        metrics: ConveyorMetrics[]

    ): number {

        if (metrics.length === 0) {

            return 0;

        }

        return metrics.reduce(

            (sum, item) =>

                sum + item.productivity,

            0

        ) / metrics.length;

    }

    totalDowntime(

        metrics: ConveyorMetrics[]

    ): number {

        return metrics.reduce(

            (sum, item) =>

                sum + item.downtime,

            0

        );

    }

}
