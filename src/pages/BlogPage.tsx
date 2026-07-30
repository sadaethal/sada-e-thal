import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../utils/blogs';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 text-neutral-900 px-4">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-neutral-600 mb-8">The blog post you are looking for does not exist.</p>
        <Link to="/" className="text-red-700 font-semibold flex items-center hover:text-red-800 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative bg-neutral-900">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-4xl mx-auto">
          <div className="text-red-500 text-sm font-bold uppercase tracking-wider mb-4">Blog</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{blog.title}</h1>
          <p className="text-neutral-300 text-sm font-medium">{formattedDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="markdown-body text-neutral-800 leading-relaxed space-y-6 text-lg
          [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-neutral-900
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-neutral-900
          [&>p]:mb-6
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2
          [&>blockquote]:border-l-4 [&>blockquote]:border-red-700 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-neutral-600 [&>blockquote]:my-6
          [&>a]:text-red-700 [&>a]:underline [&>a]:hover:text-red-800
        ">
          <ReactMarkdown>{blog.body}</ReactMarkdown>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <Link to="/" className="inline-flex items-center text-neutral-600 hover:text-red-700 transition-colors font-semibold">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
