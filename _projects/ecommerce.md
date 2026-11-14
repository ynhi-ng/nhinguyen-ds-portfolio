---
title: "E-Commerce Sales Report"
excerpt: "Customer segmentation and a product recommender for a UK online retailer, published as an interactive HTML report."
date: 2025-10-01
status: complete
category: eda
tools: "Python, scikit-learn, pandas, Chart.js"
repo_url: "https://github.com/ynhi-ng/data-mining-projects/tree/main/ecommerce"
demo_url: "https://github.com/ynhi-ng/data-mining-projects/blob/main/ecommerce/index.html"
---

**Status:** Complete · **Tools:** {{ page.tools }}

[View code]({{ page.repo_url }}){% if page.demo_url %} · [Report files]({{ page.demo_url }}){% endif %}

## Problem & context

A UK gift retailer left a year of transaction logs. Who are the customers, which
products drive revenue, and can we recommend related items from descriptions alone?

## Data & methodology

- UCI Online Retail (Dec 2010–Dec 2011); cleaned to ~391k line items
- K-means on RFM-style features for customer segments
- TF-IDF + cosine similarity recommender on product text
- Static interactive report powered by Chart.js (`index.html` + `data.js`)

## Limits & next steps

- Single retailer and time window; segments may not transfer
- Report is portfolio-ready; live personalization is out of scope
