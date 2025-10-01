# ron.wertlen.com

## Project with eleventy and Claude

See Claude.md for more detailed technical information.

It's a very simple website.

## Howto

```bash
# build the project and run the local webservice
npm run dev
open http://localhost:8080
```

Make any changes you need.

## Blog Posts

Blog posts use standard Eleventy conventions with frontmatter metadata:

### File Structure
- **Markdown files**: `src/blog/posts/1.md`, `src/blog/posts/2.md`, etc.
- **Associated images**: `src/images/1.png`, `src/images/2.jpg`, etc.

### Blog Post Format
Each blog post should be a markdown file with YAML frontmatter:

```yaml
---
layout: blog-post.njk
title: "Your Blog Post Title"
subtitle: "Optional subtitle"
excerpt: "Brief description for the overview page (150 chars recommended)"
date: 2025-01-15
tags: ["tag1", "tag2", "tag3"]
image: "1.png"
permalink: "/blog/your-post-slug/"
---

# Your Blog Post Title

Your markdown content here...
```

### Features
- **Automatic collections**: Posts are automatically collected and sorted by date
- **Individual post pages**: Each post gets its own page at the permalink URL
- **SEO-friendly**: Proper metadata, titles, and descriptions
- **Responsive design**: Works on all devices
- **Tagged content**: Support for categorization

### Deployment
```bash
# mirrors all the _site information to a host.
bash lftp.sh
```

