---
title: "ML Algorithm Projects"
excerpt: "Grouped supervised-learning work: forum content classification and a Kaggle exam-score prediction challenge."
date: 2025-11-01
status: complete
category: ml
tools: "R, caret, glmnet, xgboost"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/ml_algorithm_projects"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View group folder]({{ page.repo_url }})

## Problem & context

Two supervised-learning pieces live together as **ML algorithm projects**:

1. **Content-relevant classification** — label forum posts as content-relevant or
   not from paired feature/label tables (train / validation / test).
2. **Kaggle exam-score prediction** — regress student exam scores with LASSO and
   XGBoost, evaluated by RMSE, with submission CSVs.

## Data & methodology

- Classification: join `forum_ind_*` / `forum_dep_*` on `Unique_ID`; clean
  duplicates and missing labels; prepare splits
- Prediction: one-hot encode categoricals; 70/30 holdout; LASSO (`lambda.1se`)
  and XGBoost parameter sweeps; RMSE metric

## Limits & next steps

- Challenge / forum datasets are task-specific; limited external generalization
- Could add a short model-card (metrics, class balance, feature importance) per subproject
