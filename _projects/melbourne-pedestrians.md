---
title: "Melbourne Pedestrian Traffic"
excerpt: "API ingest and quality checks for City of Melbourne hourly pedestrian counts — EDA still in progress."
date: 2026-07-20
status: in-progress
category: eda
tools: "Python, requests, pandas"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/melbourne_peds_traffic"
---

**Status:** In progress · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }})

## Problem & context

How can we reliably pull and quality-check hourly foot-traffic counts from the
City of Melbourne Open Data API before building trend or event analysis?

## Data & methodology

- Per-sensor API queries with pagination (page size 100) under the API row cap
- Retry / backoff; raw parquet saved before cleaning
- Parsing notebook: timestamps, duplicates, nulls, missing-hour detection

## Limits & next steps

- Ingestion + parsing done; fuller EDA and storytelling not finished
- Expand sensors / date range; publish a public summary when analysis lands
