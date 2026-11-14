---
title: "Broadway Box Office Dashboard"
excerpt: "Shiny dashboard of weekly Broadway grosses (2005–2025), including the COVID collapse and recovery."
date: 2025-08-01
status: complete
category: dashboard
tools: "R, Shiny, plotly, dplyr"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/broadway_data"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }})

## Problem & context

Journalists and analysts need a fast way to see which Broadway shows lead the
week, how full houses are running, and how the market moved over two decades —
especially through the 2020 shutdown and recovery.

## Data & methodology

- Weekly box office grosses (2005–present), cleaned for closed weeks, missing
  financials, and bad ticket-price values
- Shiny app: current-week snapshot, top-10 charts, leaderboard, trend explorer

## Limits & next steps

- Weekly aggregates only; no ticket-level microdata
- Local Shiny run today; a hosted demo URL would help sharing
