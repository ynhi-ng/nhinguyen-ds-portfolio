---
title: "Data Journalism Dashboard"
excerpt: "RShiny data story dashboard exploration of media/GenAI themes — volume, topic mix, growth, and correlations."
date: 2025-06-15
status: complete
category: dashboard
tools: "R, Shiny, plotly, DT"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/data_journalism_dashboard"
visual_image: /assets/images/projects/data-journalism.png
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="Data journalism dashboard">
  <figcaption class="project-visual__caption">RShiny dashboard — GenAI theme volume, growth, and correlations.</figcaption>
</figure>
{% else %}
<p>Final product: RShiny app (<code>dashboard.R</code>).</p>
{% endif %}

## Problem & context

How did AI / GenAI themes evolve in media coverage: in volume, topic mix, and
relationship to GenAI milestone events. Audience: journalists who cover the technical segment.

## Data & methodology

- Pre-aggregated chart CSVs 
- RShiny dashboard (`dashboard.R`) for interactive charts and tables

## Limits & next steps

- Upstream article corpus / NLP code not shipped in this folder
- Local RShiny run only
- Hosting a live demo page would improve this project further
