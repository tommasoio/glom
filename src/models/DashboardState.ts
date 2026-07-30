import { ConveyorMetrics } from "./ConveyorMetrics";

export interface DashboardState {

    current: ConveyorMetrics;

    history: ConveyorMetrics[];

}
