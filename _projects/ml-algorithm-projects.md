---
title: "ML Algorithm Projects"
excerpt: "Grouped supervised-learning work: forum content classification and a Kaggle exam-score prediction challenge."
date: 2025-11-01
status: complete
category: ml
tools: "R, caret, glmnet, xgboost"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/ml_algorithm_projects"
# visual_image: /assets/images/projects/ml-algorithms.png
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View group folder]({{ page.repo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="ML algorithm projects">
  <figcaption class="project-visual__caption">Notebook / model outputs for classification and exam-score prediction.</figcaption>
</figure>
{% else %}
<p>Final products live in the notebooks under <code>ml_algorithm_projects/</code>. Add a composite screenshot when ready.</p>
{% endif %}

## Problem & context

Two supervised-learning pieces live together as **ML algorithm projects**:

1. **Content-relevant classification** — label forum posts as content-relevant or
   not from paired feature/label tables (train / validation / test).
2. **Kaggle exam-score prediction** — regress student exam scores with LASSO and
   XGBoost, evaluated by RMSE.

## Data & methodology

- Classification: join feature/label CSVs on `Unique_ID` (data kept local)
- Prediction: one-hot encode; LASSO + XGBoost; RMSE (train/test kept local; see README)

## Limits & next steps

- Challenge / forum datasets are task-specific
- Add a short model-card (metrics, class balance, feature importance) per subproject
