import { getAllBlogs } from '../utils/blogs';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Opinion() {
  const allBlogs = getAllBlogs();
  const opinionPosts = allBlogs.filter(
    (blog) => blog.category === 'opinion'
  );

  return (
    <div className="bg-neutral-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">Editorials &amp; Opinions</h1>
          <div className="w-24 h-1 bg-red-700 mb-6"></div>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Independent thought, critical analysis, and perspectives from our editors and guest contributors on the issues shaping our world today.
          </p>
        </div>

        {/* Opinion Posts */}
        {opinionPosts.length > 0 ? (
          <div className="space-y-12">
            {opinionPosts.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row bg-white border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center border-l-4 border-transparent group-hover:border-red-700 transition-colors">
                    <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
                      <span className="text-red-700">Opinion</span>
                      <span>&bull;</span>
                      <span>{formattedDate}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-red-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 text-base mb-6 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-6">
                      <span className="text-red-700 font-semibold text-sm flex items-center group-hover:text-red-600 transition-colors">
                        Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      {post.external_link && (
                        <span className="text-xs text-neutral-400 font-medium bg-neutral-100 px-3 py-1 rounded-full">
                          External link available
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-neutral-200">
            <div className="text-6xl mb-6">✍️</div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">No Opinion Posts Yet</h2>
            <p className="text-neutral-500 max-w-sm mx-auto">
              Opinion posts will appear here once they are published in the CMS with the "Opinion / Editorial" category.
            </p>
            <Link to="/" className="inline-flex items-center mt-8 text-red-700 font-semibold hover:text-red-800 transition-colors">
              <ArrowRight size={16} className="mr-2 rotate-180" /> Back to Home
            </Link>
          </div>
        )}
        
      </div>
    </div>
  );
}
