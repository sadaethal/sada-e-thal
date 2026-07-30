import { mockEditorials } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export default function Opinion() {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">Editorials & Opinions</h1>
          <div className="w-24 h-1 bg-red-700 mb-6"></div>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Independent thought, critical analysis, and perspectives from our editors and guest contributors on the issues shaping our world today.
          </p>
        </div>

        {/* Editorial List */}
        <div className="space-y-12">
          {mockEditorials.map((editorial) => (
            <a 
              key={editorial.id} 
              href={editorial.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row bg-white border border-neutral-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img 
                  src={editorial.imageUrl} 
                  alt={editorial.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center border-l-4 border-transparent group-hover:border-red-700 transition-colors">
                <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  <span className="text-red-700">Opinion</span>
                  <span>&bull;</span>
                  <span>{editorial.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-red-700 transition-colors">
                  {editorial.title}
                </h2>
                <p className="text-neutral-600 text-base mb-6 leading-relaxed max-w-2xl">
                  {editorial.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
                       <img src={`https://placehold.co/100x100/eeeeee/999999?text=${editorial.author.charAt(0)}`} alt={editorial.author} />
                    </div>
                    <span className="font-semibold text-neutral-900">{editorial.author}</span>
                  </div>
                  <span className="text-red-700 font-semibold text-sm flex items-center group-hover:text-red-600 transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
}
