---
permalink: /posts/
title: "Posts"
layout: archive
author_profile: true
---

Notes on data science concepts, model explorations, and analytical takeaways: a dedicated blog for evidence-based technical writing and reflection.

{% for post in site.posts %}
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date: "%B %-d, %Y" }} · {{ post.excerpt | strip_html | truncate: 180 }}</p>
{% endfor %}
