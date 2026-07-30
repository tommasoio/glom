# Architecture

```
            index.ts
                │
                ▼
      DashboardService
        │      │      │
        ▼      ▼      ▼
 Metrics  Statistics  Charts
        │
        ▼
   Sample Metrics
```

## Components

### DashboardService

Coordinates the monitoring process.

### MetricsService

Stores and manages conveyor metrics.

### StatisticsService

Calculates average speed, downtime and productivity.

### ChartService

Prepares datasets for visualization.

### Formatter

Formats output values.

### TimeUtils

Provides date and time utilities.
