---
permalink: /projects/
title: "Projects"
layout: single
classes: wide
author_profile: true
---

Hands-on pattern mining, exploratory analysis, and visual dashboards. Every case study details the core problem, methodology & models, and limitations.

{% assign projects = site.projects | sort: "date" | reverse %}

<ul class="project-index">
  {% for project in projects %}
    <li class="project-index__item">
      {% if project.visual_image %}
        <a class="project-index__thumb" href="{{ project.url | relative_url }}">
          <img src="{{ project.visual_image | relative_url }}" alt="">
        </a>
      {% endif %}
      <div class="project-index__body">
        <h2 class="project-index__title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          {% if project.status %}<span class="taxonomy__count">{{ project.status }}</span>{% endif %}
        </h2>
        {% if project.excerpt %}
          <p>{{ project.excerpt | markdownify | strip_html | truncate: 180 }}</p>
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
