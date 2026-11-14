---
permalink: /projects/
title: "Projects"
layout: single
classes: wide
author_profile: true
---

Data mining and visualization work. Each page covers **problem & context**,
**data & methodology**, and **limits & next steps**. Code lives in the
[data-mining-projects](https://github.com/ynhi-ng/data-mining-projects) repo.

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
