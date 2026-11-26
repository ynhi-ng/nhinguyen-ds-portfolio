---
permalink: /projects/
title: "Projects"
layout: single
classes: wide
author_profile: true
---

Hands-on pattern mining, exploratory analysis, and visual dashboards. Every case study details the core problem, methodology & models, and limitations.

{% assign projects = site.projects | sort: "date" | reverse %}
{% assign complete_projects = projects | where: "status", "complete" %}
{% assign ml_projects = complete_projects | where: "category", "ml" %}
{% assign wip_projects = projects | where: "status", "in-progress" %}

<p class="archive__subtitle">EDA / Analysis Projects</p>
<ul class="project-index">
  {% for project in complete_projects %}
    {% unless project.category == "ml" %}
      <li class="project-index__item">
        {% if project.visual_image %}
          <a class="project-index__thumb" href="{{ project.url | relative_url }}">
            <img src="{{ project.visual_image | relative_url }}" alt="">
          </a>
        {% endif %}
        <div class="project-index__body">
          <h2 class="project-index__title">
            <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          </h2>
          {% if project.excerpt %}
            <p>{{ project.excerpt | markdownify | strip_html | truncate: 180 }}</p>
          {% endif %}
        </div>
      </li>
    {% endunless %}
  {% endfor %}
</ul>

{% if ml_projects.size > 0 %}
<p class="archive__subtitle">Machine Learning Projects</p>
<ul class="project-index">
  {% for project in ml_projects %}
    <li class="project-index__item">
      <div class="project-index__body">
        <h2 class="project-index__title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        </h2>
        {% if project.excerpt %}
          <p>{{ project.excerpt | markdownify | strip_html | truncate: 180 }}</p>
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

{% if wip_projects.size > 0 %}
<p class="archive__subtitle">In progress projects</p>
<ul class="project-index">
  {% for project in wip_projects %}
    <li class="project-index__item">
      {% if project.visual_image %}
        <a class="project-index__thumb" href="{{ project.url | relative_url }}">
          <img src="{{ project.visual_image | relative_url }}" alt="">
        </a>
      {% endif %}
      <div class="project-index__body">
        <h2 class="project-index__title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          <span class="taxonomy__count">in-progress</span>
        </h2>
        {% if project.excerpt %}
          <p>{{ project.excerpt | markdownify | strip_html | truncate: 180 }}</p>
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
{% endif %}
