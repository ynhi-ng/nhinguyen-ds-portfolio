---
title: "Student Stress Analysis"
excerpt: "Survey EDA, group tests, and association rules — plus an interactive stress dashboard."
date: 2025-10-15
status: complete
category: dashboard
tools: "R, R Markdown, Chart.js, Shiny"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/student_stress"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/student_stress"
visual_image: "/assets/images/projects/student-stress.png"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Dashboard]({{ page.demo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="Student stress dashboard">
  <figcaption class="project-visual__caption">Interactive dashboard — stress distribution, gender, coping, correlations (<code>student_stress/index.html</code>).</figcaption>
</figure>
{% else %}
<p>Dashboard: <code>student_stress/index.html</code> (optional Shiny <code>app.R</code>).</p>
{% endif %}

## Problem & context

What factors relate to students' reported mental stress levels, and how do coping
mechanisms and demographics show up in survey data?

## Data & methodology

- Survey tables kept local (see README); companion UK survey analyses
- EDA, correlations, t-tests / ANOVA, association rules
- Chart.js dashboard (+ optional Shiny filters)

## Limits & next steps

- Self-reported survey data; associations are not causal
- Dashboard uses pre-aggregated exports; extend filters as needed
