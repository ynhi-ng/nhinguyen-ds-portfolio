---
title: "LearnPlatform — Digital Learning EDA"
excerpt: "2020 K–12 digital engagement around COVID — products, locales, and equity gaps, with an HTML findings report."
date: 2025-09-01
status: complete
category: eda
tools: "Python, Jupyter, pandas"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/learnplatform_data"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/learnplatform_data"
visual_image: "/assets/images/projects/learnplatform.png"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Findings report]({{ page.demo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="LearnPlatform findings report">
  <figcaption class="project-visual__caption">HTML findings report — timing, products, and equity signals (<code>learnplatform_data/index.html</code>).</figcaption>
</figure>
{% else %}
<p>Findings report: <code>learnplatform_data/index.html</code>.</p>
{% endif %}

## Problem & context

This project answers these questions: How did digital learning engagement change through the 2020 COVID outbreak, which products led, and how does engagement relate to district demographics?

## Data & methodology

- LearnPlatform / Kaggle digital-learning challenge data
- Weekday vs weekend; pre- vs post-outbreak; product leaders; demographic correlations
- HTML findings report summarizing notebook conclusions

## Limits & next steps

- Observational district aggregated report only
- Next: export more chart aggregates into interactive report panels
