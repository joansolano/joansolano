---
title: My first Blog Post De lo que uno se tendrá que morir aveces
description: Learning how to use @nuxt/content to create blog
img: first-blog-post.jpg
alt: my first blog post
imgauthor: free-photos en Pixabay
author:
    name: JOAN SOLANO
    bio: Estudiante de ingeniería mecatrónica
    image: joansolano.jpg
---

# My first blog post

Welcome to my first blog post using content module

## This is a heading

This is some more info

## This is another heading

This is some more info

```javascript
Vue.directive('highlight', {
    inserted: function (el, binding, vnode) {
        let blocks = [...el.getElementsByTagName("code")]
        blocks.forEach(target => hljs.highlightBlock(target))
    }
})
```

```python
def suma(a, b):
    c = a + b
    return c

print(suma(5, 6))
```
