---
layout: default
title: "Теги"
permalink: /tags/
---

<div class="panel tag-archive">
  <h1>Теги</h1>

  {% if site.tags.size > 0 %}
    {% for tag in site.tags %}
      <section class="tag-group" id="{{ tag[0] | slugify }}">
        <h2>{{ tag[0] }}</h2>

        <div class="posts">
          {% for post in tag[1] %}
            <article class="tag-post">
              <div class="meta">
                {{ post.date | date: "%d.%m.%Y" }}
                {% if post.version %} · {{ post.version }}{% endif %}
              </div>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              {% if post.excerpt %}
                <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
              {% endif %}
            </article>
          {% endfor %}
        </div>
      </section>
    {% endfor %}
  {% else %}
    <p>Тегов пока нет.</p>
  {% endif %}
</div>
