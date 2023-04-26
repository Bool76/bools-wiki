# Predictive | Calculations

Summary - This section is dedicated toward Predictive related calculations

<br>

### Estimates

#### 3 Point Estimates

| Type                  | Calculation                                     |
| --------------------- | ----------------------------------------------- |
| Triangular Estimates  | (Pessimistic + Most Likely + Optimistic) / 3    |
| Beta (Pert) Estimates | (Pessimistic + 4(Most Likely) + Optimistic) / 6 |
| Standard Deviation    | (Pessimistic - Optimistic) / 6                  |

<br>

### Project Budget

| Type                       | Calculation                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Work Package Cost Estimate | Sum of all Activites (for specific work package) + Activity Contingency Reserve (for those activies) |
| Controlled Accounts        | Sum of all Work Package Cost Estimates + Contingency Reserve                                         |
| Cost Baseline              | Sum of Control Accounts                                                                              |
| Project Budget             | Cost Baseline + Management Reserve                                                                   |

<br>

### Project Schedule Network Diagram

| Type                | Calculation                           |
| ------------------- | ------------------------------------- |
| Total Float (Slack) | Late Finish (LF) - Early Finish (EF)  |
| Free Float          | Smallest ES of Successor - Current EF |
| Early Finish        | ES + Duration - 1                     |
| Late Start          | LF - Duration + 1                     |

<br>
