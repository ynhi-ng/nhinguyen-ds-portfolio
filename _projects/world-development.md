---
title: "World Development Indicators — EDA"
excerpt: "Exploratory analysis of development and FDI trends across countries and regions."
date: 2025-06-01
status: complete
category: eda
tools: "R, R Markdown, ggplot2, dplyr"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/world_development"
# visual_image: /assets/images/projects/world-development.png
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="World development EDA report">
  <figcaption class="project-visual__caption">R Markdown report visuals — knit <code>world_development.rmd</code>.</figcaption>
</figure>
{% else %}
<p>Final product: knit the R Markdown report. Add a screenshot to <code>assets/images/projects/world-development.png</code>.</p>
{% endif %}

## Problem & context

How do key development indicators — especially foreign direct investment — vary
across countries and regions, and what patterns show up in exploratory views of
World Bank–style series?

## Data & methodology

- World Bank Open Data / WDI and FDI tables (kept local; see project README citation)
- R Markdown report with dplyr transforms and ggplot2 visuals

## Limits & next steps

- Exploratory only; not a causal ranking of countries
- Could add interactive maps or a shorter public HTML summary later
