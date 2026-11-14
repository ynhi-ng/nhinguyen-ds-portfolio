---
title: "Student Stress Analysis"
excerpt: "Survey EDA, group tests, and association rules on student stress and coping — dashboard planned next."
date: 2025-10-15
status: complete
category: dashboard
tools: "R, R Markdown, Chart.js, Shiny"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/student_stress"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/student_stress"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Dashboard (`index.html`)]({{ page.demo_url }})

## Problem & context

What factors relate to students' reported mental stress levels, and how do coping
mechanisms and demographics show up in survey data?

## Data & methodology

- Student stress survey tables plus a UK student survey companion analysis
- EDA, correlations, t-tests / ANOVA, stress categories
- Association rules linking stress-related items to coping strategies
- Interactive static dashboard (Chart.js) plus optional Shiny filters (`app.R`)

## Limits & next steps

- Self-reported survey data; associations are not causal
- Dashboard uses pre-aggregated exports; extend with more filters as needed
