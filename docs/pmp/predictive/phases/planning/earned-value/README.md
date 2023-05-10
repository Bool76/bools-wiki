# Planning | Earned Value

Overview - The **Earned Value** concept is centered around data-driven insights into the project progress and projections as measured against the original plans of timeline and costs

<br>

### Plans + Documents + Tools

| Plans                |
| -------------------- |
| Cost Management Plan |

<br>

| Documents |
| --------- |
| tbd       |

<br>

| Tools |
| ----- |
| tbd   |

<br><br>

### Cost Key Concepts

**Budget After Completion (BAC)** - The total budget estimated for a project [dollars]

> The total project budget is $40k

**Actual Cost (AC)** - Cost for work already completed [dollars]

> $20k has been spent so far

**Cost Variance (CV)** - When you want a budget status of your project. Look at the difference between earned value (work value) and the actual cost so far [calculation]

> REDO!

**Cost Performance Index (CPI)** - A ratio which tells you how well actual project performance and cost aligns with the planned cost and performance [calculation]

> REDO? The project budget is $25k. 55% of the project is complete. So far the project has cost $15k. What is the performance of the project?

**Estimate at Completion (EAC)** - For a project in progress, what's the forecasted total project cost AT the end of a project [calculation]

> REDO? The project budget is $10k. One item cost increased $2000. What is the new total cost for this project?

**Variance at Completion (VAC)** - At a given time during the project, what is the projected difference between the budgeted total project cost and the actual total cost [calcaulation]

> REDO? The project budget is $40k, the new estimated total project cost at completion is $55k. What is the VAC?

**Estimate to Completion (ETC)** - For a project in progress, how much does it cost TO complete the project (ie - Remaining costs) [calculation]

> REDO? $10k has already been spent of a $20k budget. An additional $2k is expect in addition to the original budget. How much will it take to complete the project?

<br><br>

### Value Key Concepts

**Planned Value (PV)** - A dollar value derived from a percent of work that SHOULD have been completed by a specific point in the schedule [dollar value from percentage]

> At this time 75% should be completed of a $10k budget. PV is .75 x 10,000 = $7500

**Earned Value (EV)** - A dollar value derived from a percent of work ACTUALLY completed by a specific point in the schedule [dollar value from percentage]

> At this time 55% was completed from a $10k budget. EV is .55 x 10,000 = $5500

**Schedule Variance (SV)** - Difference between the work value($) earned and the work value($) that was planned [calculation]

> You planned to have a work value of $10k complete. However you have $8k of work value complete. What can you say about your schedule?

**Schedule Performance Index (SPI)** - Like Schedule Variance, this assess schedule status, but as a ratio. It looks at earned work value vs planned work value. [calculation]

> tbd

**To Complete Performance Index (TCPI)** - A ratio measuring work value that must be achieved to meet either the goal of the BAC or the new EAC (calculation)

> tbd

<br><br>

### Clarifying Concepts

#### BAC vs EAC

Both are TOTAL project costs for different periods of the project.  
BAC is the cost that was authorized at the beginning of the project (original budget).  
EAC can change, depending on if costs change during the project. EAC is calculated at various moments throughout the project life cycle.

> :warning: **Important:** EAC could still equal BAC

#### "Variance"

When you see the word variance, think "difference"

<br><br>

### Calculations

#### Cost Calculations

| Type                         | Calculation     | Result Definitions                                          | Notes                                                |
| ---------------------------- | --------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| Cost Variance (CV)           | EV - AC         | > 0 (Under Budget)<br>= 0 (On Budget)<br>< 0 (Under Budget) |                                                      |
| Cost Performance Index (CPI) | EV / AC         | > 0 (Under Budget)<br>= 0 (On Budget)<br>< 0 (Under Budget) |                                                      |
| Estimate at Completion (EAC) | BAC / CPI       |                                                             | If Cost Performance Index is expected to be the same |
|                              | BAC + AC - EV   |                                                             | If future work will be at Planned Rate               |
| Variance at Completion (VAC) | BAC - EAC (???) | > 0 (Under Budget)<br>= 0 (On Budget)<br>< 0 (Under Budget) |                                                      |
| Estimate to Completion (ETC) | EAC - AC        |                                                             |                                                      |

<br>

#### Work / Value Calculations

| Type                                 | Calculation         | Result Definitions                                                 | Notes                                       |
| ------------------------------------ | ------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| Planned Value (PV)                   | % Planned x BAC     |                                                                    |                                             |
| Earned Value (EV)                    | % Completed x BAC   |                                                                    |                                             |
| Schedule Variance (SV)               | EV - PV             | > 0 (Ahead Schedule)<br>= 0 (On Schedule)<br>< 0 (Behind Schedule) |                                             |
| Schedule Performance Index (SPI)     | EV / PV             | > 0 (Ahead Schedule)<br>= 0 (On Schedule)<br>< 0 (Behind Schedule) |                                             |
| To Complete Performance Index (TCPI) | (BAC-EV) / (BAC-AC) | > 0 (More Difficult)<br>= 0 (No change)<br>< 0 (Less Difficult)    | Rate of work needed to follow original plan |
|                                      | (BAC-EV) / (EAC-AC) | > 0 (More Difficult)<br>= 0 (No change)<br>< 0 (Less Difficult)    | Rate of work needed to follow new EAC       |
