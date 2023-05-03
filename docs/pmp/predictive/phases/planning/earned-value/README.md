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

**Budget After Completion (BAC)** - The total budget that has been estimated for all the work

> e.g. The project budget is $40k

**Actual Cost (AC)** - Cost incurred for work performed [dollars]

> e.g. $20k has been spent

**Cost Variance (CV)** - Project status in terms of cost - ADD MORE TO THIS? [calculation]

> May's budget is $500. $300 has been spent for May. What's the budget status?

**Estimate AT Completion (EAC)** - For a project that’s already underway, what is the forecast of the TOTAL project cost AT the end of a project [calculation]

> The project budget is $10k. One item cost increased $2000. What is the new total cost for this project?

**Estimate TO Completion (ETC)** - At a given time during the project, how much does it cost TO complete the project (ie - Remaining costs) [calculation]

> $10k has already been spent of a $20k budget. An additional $2k is expect in addition to the original budget. How much will it take to complete the project?

**Variance at Completion (VAC)** - A projection of the budget surplus or deficit [calcaulation]

> tbd

**Cost Performance Index (CPI)** - A measure of cost efficiency of budgeted resources [calculation]

> tbd

<br><br>

### Work / Value Key Concepts

**Planned Value (PV)** - Work that should have been completed (planned work) by a specific point in the schedule [percentage]

> At this time 75% of the work should be completed

**Earned Value (EV)** - The amount of work that has actually been completed so far [percentage]

> 55% of the work is completed of the expected 75% during this time of the project

**Schedule Variance (SV)** - Project status in terms of schedule [calculation]

> Are you ahead or behind schedule if you've completed 75% of the expected 65% of the work?

**Schedule Performance Index (SPI)** - A measure of schedule efficiency. Earned value to planned value. Remember: Value = Work [calculation]

> tbd

**To Complete Performance Index (TCPI)** - Measure of cost performance (work performance?) that must be achieved w/ the remaining resources in order to meet goals (calculation)  
¡WARNING! Might not be related to "Work"

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

| Type                         | Calculation     | Result Definitions                                                              | Notes                                                              |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Cost Variance (CV)           | EV - AC         | Under Budget<br>On Budget                                                       |                                                                    |
| Variance at Completion (VAC) | BAC - EAC (???) | Under Budget -> Postive<br>On Budget -> Equals Zero<br>Under Budget -> Negative |                                                                    |
| Cost Performance Index (CPI) | EV / AC         | Under Budget -> Greater 1<br>On Budget -> Equal 1<br>Under Budget -> Less 1     |                                                                    |
| Estimate AT Completion (EAC) | BAC / CPI       |                                                                                 | If CPI is expected to be the same for the remainder of the project |
|                              | BAC + AC - EV   |                                                                                 | If future work will be at planned rate                             |
| Estimate TO Completion (ETC) | EAC - AC        |                                                                                 |                                                                    |
|                              | BAC - EV        |                                                                                 |                                                                    |

<br>

#### Work / Value Calculations

| Type                                 | Calculation         | Result Definitions                                                                      | Notes                                         |
| ------------------------------------ | ------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------- |
| Schedule Variance (SV)               | EV - PV             | Ahead Schedule -> Positive<br>On Schedule -> Equals Zero<br>Behind Schedule -> Negative |                                               |
| Schedule Performance Index (SPI)     | EV / PV             | Ahead Schedule -> Greater 1<br>On Schedule -> Equal 1<br>Behind Schedule -> Less 1      |                                               |
| To Complete Performance Index (TCPI) | (BAC-EV) / (BAC-AC) |                                                                                         | ¡WARNING! - There's 2nd calculation. Need it? |
