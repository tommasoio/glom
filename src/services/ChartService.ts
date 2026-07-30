import { ConveyorMetrics } from "../models/ConveyorMetrics";

export class ChartService {

    speedSeries(metrics: ConveyorMetrics[]): number[] {

        return metrics.map(

            metric => metric.speed

        );

    }

    productivitySeries(

        metrics: ConveyorMetrics[]

    ): number[] {

        return metrics.map(

            metric => metric.productivity

        );

    }

    downtimeSeries(

        metrics: ConveyorMetrics[]

    ): number[] {

        return metrics.map(

            metric => metric.downtime

        );

    }

}
