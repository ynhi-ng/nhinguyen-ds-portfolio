---
title: "Student Stress Analysis"
excerpt: "Survey EDA plus a peer-recommendation prototype — transparent first-line support with a path to professional help."
date: 2025-10-15
status: complete
category: dashboard
tools: "R, R Markdown, Chart.js, Shiny"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/student_stress"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/student_stress"
visual_image: "/assets/images/projects/student-stress.png"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Dashboard]({{ page.demo_url }}) · [Recommendation prototype](https://github.com/ynhi-ng/data-mining-projects/blob/main/student_stress/recommend.html)

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="Student stress recommendation prototype">
  <figcaption class="project-visual__caption">Peer recommendation prototype — similar-profile coping cards + professional referral (<code>recommend.html</code>).</figcaption>
</figure>
{% else %}
<p>Prototype: <code>student_stress/recommend.html</code> · exploration dashboard: <code>index.html</code>.</p>
{% endif %}

## Problem & context

What factors relate to students' reported mental stress levels, and how can we
surface transparent, peer-based first-line coping ideas — with a clear path to
professional help if someone is still struggling?

## Data & methodology

- Survey tables kept local (see README); companion UK survey analyses
- EDA, correlations, t-tests / ANOVA, association rules
- Chart.js exploration dashboard + **recommendation prototype** that ranks
  Social Support / Physical Activities / Meditation among similar-stress peers

## Limits & next steps

- Self-reported survey data; rates are descriptive, not causal or clinical advice
- Prototype uses simple cohort filters; next step could be richer similarity matching
