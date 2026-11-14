---
permalink: /posts/
title: "Posts"
layout: archive
author_profile: true
---

Short analyses of news and data stories I'm following — a place to practice
clear, evidence-based writing alongside the project portfolio.

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date: "%B %-d, %Y" }} · {{ post.excerpt | strip_html | truncate: 180 }}</p>
{% endfor %}
