---
title: "Data wrangling before modelling"
excerpt: "Data wrangling is where many of an analysis's key decision are made. This post defines it and set out the steps I follow to keep those decisions visible & defensible."
categories:
  - data-wrangling
tags:
  - cleaning
  - pandas
  - R
  - methodology
---

## Summary

Data wrangling is usually described as a preparation that happens before any analysis. It is the stage where decisions that shape the result are made. 


## 1. Definition 

Data wrangling is the process of acquiring, cleaning, structuring and
enriching raw data into a form that can be used directly for analysis [1].
It is also known as data munging or remediation, and cleaning is only one
part of it [2]. The course I studied breaks it into eight tasks: discovery,
collection, pre-processing, cleaning, transformation, enrichment, validation
and storing [1]. The HBS Online description uses six steps: discovery,
structuring, cleaning, enriching, validating and publishing [2].

The motivation is stated that, analyses are only as reliable as the data behind them [2].

## 2. Objective 


| Wrangling decision | How it can affect inference |
|---|---|
| Dropping rows with missing values | Can bias the sample if missingness is not random |
| Imputing values | Can understate variance or hide a data collection fault |
| Removing outliers | Can delete a real effect, or keep an error that skew data distribution |
| Choosing the unit of a row | Changes what the model is actually predicting |
| Joining sources | Can duplicate or lose records and change group sizes |

There are also some practical obstacles: large volume, quality issues,
diverse sources, complex structures, a lack of standardisation, time cost,
and privacy and security [1]. These are the conditions under which
undocumented decisions pile up.

## 3. The protocol 

I organise the work around the question first, then apply the following steps:

1. **State the question and the unit of analysis.** Note down what each row represents,
  before touching the data. This is the discovery stage, where the data's suitability and quality are assessed [1].
2. **Record provenance.** Note the data source, access date and any licence or
   permission constraints. For example, listing ethics and privacy[1].
3. **Profile before changing anything.** Row counts, types, key uniqueness,
   missingness and impossible values. I use the validation categories: accuracy, consistency, completeness, range, format, uniqueness[1].
4. **Pre-specify cleaning rules.** Decide what counts as an error versus a
   rare value, and write down the rule before seeing its effect on the
   result.
5. **Transform and enrich with the question in mind.** Normalise, aggregate
   or bin only where the method needs it [1]; join other sources only where
   they add information the question requires [1][2].
6. **Validate the output.** Re-run the checks on the final table and compare
   against the raw data.
7. **Store and document process.** Save the result in a suitable
   format and make it available with its metadata [1][2].

## 4. Documentation and reproducibility

A wrangling decision is only defensible if someone else can see it: keeping track of validation issues and how they were resolved as part of validation [1]. In practice, I keep a short log in the repository or write down step by step process:

1. Before each cleaning step, count the rows and affected values.
2. Apply the rule.
3. Count again, and record the rule, the counts and the reason.


## 5. Threats to validity

Questions I ask before trusting a cleaned dataset: 

- **Selection:** did cleaning remove a non-random group of records?
- **Measurement:** were units, formats and encodings same across sources?
- **Leakage:** were any values learned from the full dataset before
  splitting? Steps that learn from data, such as imputation values or
  scaling, should be fitted on training data only.
- **Sensitivity:** do the main findings return the same result if I change a cleaning rule?


## 6. Limitations 

This post summarises two sources: a university course that I studied and one HBS
Online article. It does not review the entire scope on missing data or
data quality, so the validity points above are practical based on experience rather than
a literature-backed framework.

## Sources

1. University course.
2. Stobierski, T. (2021, updated 2023). [Data Wrangling: What It Is & Why
   It's Important](https://online.hbs.edu/blog/post/data-wrangling). Harvard
   Business School Online.