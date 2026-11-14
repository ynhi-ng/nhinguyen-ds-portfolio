---
title: "Melbourne Pedestrian Traffic"
excerpt: "API ingest and quality checks for City of Melbourne hourly pedestrian counts — EDA still in progress."
date: 2026-07-20
status: in-progress
category: eda
tools: "Python, requests, pandas"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/melbourne_peds_traffic"
# visual_image: /assets/images/projects/melbourne-pedestrians.png
---

**Status:** In progress · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="Melbourne pedestrian traffic">
  <figcaption class="project-visual__caption">Pipeline / EDA visual — to be added when the analysis summary ships.</figcaption>
</figure>
{% else %}
<p>In progress — final public visual will follow the EDA pass.</p>
{% endif %}

## Problem & context

How can we reliably pull and quality-check hourly foot-traffic counts from the
City of Melbourne Open Data API before building trend or event analysis?

## Data & methodology

- Per-sensor API queries with pagination under the API row cap
- Retry / backoff; raw parquet saved locally (not in git)
- Parsing notebook: timestamps, duplicates, nulls, missing-hour detection

## Limits & next steps

- Ingestion + parsing done; fuller EDA and storytelling not finished
- Expand sensors / date range; publish a public summary when analysis lands
