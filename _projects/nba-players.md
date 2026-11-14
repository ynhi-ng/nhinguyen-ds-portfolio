---
title: "NBA Players — Exploratory Analysis"
excerpt: "Player and season-level NBA EDA with an HTML findings report for portfolio readers."
date: 2025-08-20
status: complete
category: eda
tools: "Python, Jupyter, pandas, Chart.js"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/nba_players"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/nba_players"
visual_image: "/assets/images/projects/nba-players.png"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Findings report]({{ page.demo_url }})

## Final visual

{% if page.visual_image %}
<figure class="project-visual">
  <img src="{{ page.visual_image | relative_url }}" alt="NBA players findings report">
  <figcaption class="project-visual__caption">HTML findings report — headline stats and position mix (<code>nba_players/index.html</code>).</figcaption>
</figure>
{% else %}
<p>Findings report: <code>nba_players/index.html</code>.</p>
{% endif %}

## Problem & context

What patterns appear in NBA player careers and season performance when we join
biographical attributes with season-level stats?

## Data & methodology

- Player and season tables explored in Jupyter (CSV kept local; see README for source notes)
- Preparation / overview, then analysis sections on performance patterns
- Portfolio-facing HTML findings report with position-mix chart

## Limits & next steps

- Notebook is heavy with inline figures; use `index.html` for sharing
- Next: minute-filtered efficiency charts and era comparisons on the report
