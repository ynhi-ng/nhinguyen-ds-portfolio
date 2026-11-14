---
title: "NBA Players — Exploratory Analysis"
excerpt: "Player and season-level NBA EDA — HTML findings report planned for portfolio readers."
date: 2025-08-20
status: complete
category: eda
tools: "Python, Jupyter, pandas, Chart.js"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/nba_players"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/nba_players"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Findings report (`index.html`)]({{ page.demo_url }})

## Problem & context

What patterns appear in NBA player careers and season performance when we join
biographical attributes with season-level stats?

## Data & methodology

- `players.csv` and `seasons.csv` cleaned and explored in a Jupyter notebook
- Preparation / overview, then analysis sections on performance patterns
- Portfolio-facing HTML findings report with position-mix chart

## Limits & next steps

- Notebook is complete but heavy (inline figures); use `index.html` for sharing
- Next: minute-filtered efficiency charts and era comparisons on the report
