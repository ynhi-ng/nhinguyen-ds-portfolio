---
title: "Data Journalism Dashboard"
excerpt: "Shiny exploration of media/GenAI themes — volume, topic mix, growth, and correlations for story spotting."
date: 2025-06-15
status: complete
category: dashboard
tools: "R, Shiny, plotly, DT"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/data_journalism_dashboard"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }})

## Problem & context

How did AI / GenAI themes evolve in media coverage — in volume, topic mix, and
relationship to milestone events — in a form journalists can explore without
rerunning an NLP pipeline?

## Data & methodology

- Pre-aggregated CSV layers (monthly volume, indexed growth, theme shares,
  Jaccard similarity, rolling Pearson correlations, event response)
- Shiny dashboard (`dashboard.R`) for interactive charts and tables

## Limits & next steps

- Upstream article corpus / NLP code not shipped in this folder
- Hosting a live Shiny instance would improve demos
