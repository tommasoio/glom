import { ConveyorMetrics } from "../models/ConveyorMetrics";
import { sampleMetrics } from "../data/sampleMetrics";

export class MetricsService {

    private metrics: ConveyorMetrics[] =
        [...sampleMetrics];

    public latest(): ConveyorMetrics {

        return this.metrics[
            this.metrics.length - 1
        ];

    }

    public history(): ConveyorMetrics[] {

        return this.metrics;

    }

    public add(metric: ConveyorMetrics): void {

        this.metrics.push(metric);

    }

}
