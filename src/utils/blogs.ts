import fm from 'front-matter';

export interface BlogPost {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
  body: string;
}

export function getAllBlogs(): BlogPost[] {
  // Read all markdown files in the content/blogs directory
  const modules = import.meta.glob('../../content/blogs/*.md', { query: '?raw', import: 'default', eager: true });
  
  const blogs = Object.entries(modules).map(([_, content]) => {
    // We cast content to string because we imported it as raw
    const parsed = fm<Omit<BlogPost, 'body'>>(content as string);
    return {
      ...parsed.attributes,
      body: parsed.body,
    };
  });
  
  // Sort by date descending
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const blogs = getAllBlogs();
  return blogs.find(blog => blog.slug === slug);
}
