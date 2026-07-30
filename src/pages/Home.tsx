import { ArrowRight } from 'lucide-react';
import { mockEditorials, teamMembers } from '../data/mockData';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../utils/blogs';

export default function Home() {
  const blogs = getAllBlogs();
  const hasBlogs = blogs.length > 0;
  const featuredBlog = hasBlogs ? blogs[0] : null;
  const gridBlogs = hasBlogs ? blogs.slice(1) : [];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Main Content Area */}
      {hasBlogs ? (
        <>
          {/* Hero Section */}
          <section className="bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
              {featuredBlog && (
                <Link 
                  to={`/blog/${featuredBlog.slug}`}
                  className="group flex flex-col md:flex-row relative"
                >
                  <div className="w-full md:w-2/3 h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
                    <img 
                      src={featuredBlog.image} 
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="w-full md:w-1/3 bg-neutral-900 text-white p-8 md:p-12 flex flex-col justify-center border-l-4 border-red-700">
                    <div className="uppercase tracking-wider text-xs font-bold text-red-500 mb-4">
                      Blog &bull; Featured
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 group-hover:text-red-400 transition-colors">
                      {featuredBlog.title}
                    </h1>
                    <p className="text-neutral-300 text-base leading-relaxed mb-8 border-l border-neutral-700 pl-4">
                      {featuredBlog.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-red-500 group-hover:text-white transition-colors">
                      <span>READ MORE</span>
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </section>

          {/* Blog Grid Section */}
          <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12 border-b border-neutral-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 relative">
                Latest Content
                <span className="absolute -bottom-[17px] left-0 w-1/3 h-1 bg-red-700"></span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridBlogs.map((blog) => {
                const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });

                return (
                <Link 
                  key={blog.slug} 
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col bg-white border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="w-full h-56 md:h-64 overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      Blog
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs text-neutral-500 mb-3">{formattedDate}</span>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-red-700 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-6 flex-grow">
                      {blog.excerpt}
                    </p>
                    <span className="text-red-700 text-sm font-semibold inline-flex items-center group-hover:text-neutral-900 transition-colors mt-auto">
                      Read full post <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Link>
              )})}
            </div>
          </section>
        </>
      ) : (
        /* Fallback if no blogs */
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Welcome to SADA-E-THAL</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our content feed is currently being updated. In the meantime, get to know the team behind the network.
            </p>
          </div>
          <div className="flex justify-center mb-12">
            <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-2">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 shadow-sm border border-neutral-100 flex flex-col items-center text-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-neutral-50">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/400x400/eeeeee/999999?text=${member.name.charAt(0)}`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-red-700 font-semibold text-sm uppercase tracking-wider mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Editorials & Opinions Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-neutral-700 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold relative">
              Editorials & Opinions
              <span className="absolute -bottom-[17px] left-0 w-1/3 h-1 bg-red-600"></span>
            </h2>
            <Link to="/opinion" className="text-neutral-400 hover:text-white transition-colors text-sm font-semibold flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {mockEditorials.map((editorial) => (
              <a 
                key={editorial.id} 
                href={editorial.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row bg-neutral-800 border border-neutral-700 hover:border-red-600 transition-colors overflow-hidden"
              >
                <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img 
                    src={editorial.imageUrl} 
                    alt={editorial.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">
                    Opinion
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-red-400 transition-colors">
                    {editorial.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                    {editorial.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-semibold">{editorial.author}</span>
                    <span>{editorial.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
