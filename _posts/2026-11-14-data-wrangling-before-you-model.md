---
title: "Data wrangling before you model"
excerpt: "Most analysis time is spent cleaning and reshaping tables. Here is a practical checklist I use before any dashboard, EDA report, or model."
categories:
  - data-wrangling
tags:
  - cleaning
  - pandas
  - R
  - methodology
---

Before a chart looks convincing — or a model looks “smart” — the table usually
needs work. Data wrangling is that unglamorous middle: checking what you
actually received, fixing types and missingness, and shaping rows so the
question is answerable.

This post is a short field guide from projects on this site (retail
transactions, survey extracts, API pulls). It is not a library tutorial; it is
the order I try not to skip.

## 1. Name the grain

Ask: **what does one row mean?**

- One order line? One customer-day? One sensor-hour?
- If two tables disagree on grain, joins will silently multiply rows.

In the e-commerce work, raw rows were invoice lines. Customer segmentation only
made sense after aggregating to **customer**-level features. In Melbourne
pedestrian data, the grain is **sensor × hour** — duplicates and missing hours
only show up once that is explicit.

## 2. Validate before you impute

A useful first pass:

1. Row count, column list, dtypes  
2. Primary-key uniqueness (or a composite key)  
3. Missingness by column (and by time, if the data is a panel)  
4. Impossible values (negative prices, hours outside 0–23, ages < 0)

Only then decide what to drop, flag, or fill. Filling first often hides the bug.

## 3. Separate “broken” from “sparse”

Missing is not always the same problem:

- **Broken:** field should exist (e.g. closed Broadway weeks with junk prices) →
  correct or exclude with a rule you can defend  
- **Sparse:** true absence (a student skipped an optional item) → keep as its
  own signal or model missingness explicitly

Write the rule in the README. Future you will thank present you.

## 4. Reshape to the question

Wrangling is often a reshape, not a formula:

- Long → wide (or the reverse) for the chart you need  
- Window features (recency, rolling means) for behavior  
- Train / validation / test **splits after** cleaning, with the same recipes
  applied to each fold

For ML pieces under [ML Algorithm Projects]({{ '/projects/ml-algorithm-projects/' | relative_url }}),
feature tables and labels had to align on `Unique_ID` before any classifier
mattered. The join *is* the wrangling.

## 5. Leave a breadcrumb trail

For portfolio and collaboration:

- Keep raw files local (or cited); commit code that reproduces the clean table  
- Export only the aggregates a report needs (`data.js`, chart CSVs)  
- Note source + access date in the project README

That habit is why this site can show methods without shipping every CSV.

## A minimal checklist

| Step | Done when… |
|------|------------|
| Grain | You can finish the sentence “one row = …” |
| Keys | Dupes and orphan IDs are counted |
| Types | Dates are dates; categories are not floats |
| Quality rules | Written down, not only in your head |
| Output | A clean table or aggregate that answers the question |

## What I’m watching next

I’m collecting short notes when news stories lean on “the data shows…” claims —
often the weak point is wrangling: wrong grain, silent missingness, or a chart
built on an unstated filter. If you have a public dataset where cleaning changed
the headline, I’d like to write that up next.

---

*Related projects:* [E-Commerce Sales Report]({{ '/projects/ecommerce/' | relative_url }}),
[Melbourne Pedestrian Traffic]({{ '/projects/melbourne-pedestrians/' | relative_url }}),
[Broadway Box Office]({{ '/projects/broadway-box-office/' | relative_url }}).
