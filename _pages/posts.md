---
permalink: /posts/
title: "Posts"
layout: archive
author_profile: true
---

Notes on data science concepts, model explorations, and analytical takeaways: a dedicated blog for evidence-based technical writing and reflection.

<ul class="posts-index">
{% for post in site.posts %}
  <li class="posts-index__item">
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
  </li>
{% endfor %}
</ul>
