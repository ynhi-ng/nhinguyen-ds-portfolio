---
title: "LearnPlatform — Digital Learning EDA"
excerpt: "2020 K–12 digital engagement around COVID — products, locales, and equity gaps. HTML report planned."
date: 2025-09-01
status: complete
category: eda
tools: "Python, Jupyter, pandas"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/learnplatform_data"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/learnplatform_data"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}) · [Findings report (`index.html`)]({{ page.demo_url }})

## Problem & context

How did digital learning engagement change through the 2020 COVID outbreak, which
products led, and how does engagement relate to district demographics?

## Data & methodology

- Merge district engagement files; join product and district metadata
- Weekday vs weekend patterns; pre- vs post-outbreak engagement
- Product leaders (e.g. Google Docs / Classroom); correlations with Black/Hispanic
  share and free/reduced lunch
- HTML findings report summarizing notebook conclusions

## Limits & next steps

- Observational district aggregates; correlations ≠ causation
- Next: export chart aggregates from the notebook into interactive report panels
