import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-red-700 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About Us</h1>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
              We are a dedicated media network committed to highlighting stories that matter, fostering independent thought, and amplifying voices from the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-8">
            <div className="prose prose-lg max-w-none prose-neutral">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                SADA-E-THAL® (Media Network) is not your traditional news outlet. We are a minimalist, content-focused platform designed to curate personal blogs, share impactful external media, and provide a space for authentic visual storytelling through photos and media posts. Our goal is to cut through the noise and deliver meaningful content in a clean, distraction-free environment.
              </p>

              <h2 className="text-3xl font-bold text-neutral-900 mb-6 mt-12">What We Do</h2>
              <ul className="space-y-4 mb-8 text-neutral-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-red-700 rounded-full flex-shrink-0"></span>
                  <span><strong>Personal Blogs:</strong> We publish and curate deep-dive personal essays and blogs that reflect authentic experiences and independent perspectives.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-red-700 rounded-full flex-shrink-0"></span>
                  <span><strong>Media Sharing:</strong> We curate and share important links, including social media posts, documentaries, and external articles that align with our editorial values.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2.5 mr-3 bg-red-700 rounded-full flex-shrink-0"></span>
                  <span><strong>Visual Storytelling:</strong> Our platform highlights powerful photography and media posts that tell stories words cannot express.</span>
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 mt-12">Join Our Network</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Whether you are an independent writer, a visual artist, or simply a reader looking for a cleaner, more focused media experience, we welcome you to SADA-E-THAL.
              </p>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm border-t-4 border-t-red-700">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Leadership</h3>
              <p className="text-neutral-600 text-sm mb-6">
                Our platform is guided by a team of dedicated professionals committed to media integrity.
              </p>
              <Link to="/our-team" className="inline-flex items-center text-red-700 font-semibold hover:text-red-800 transition-colors">
                Meet the Team <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="bg-neutral-900 text-white p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-4 text-sm text-neutral-300">
                <li>
                  <strong className="block text-neutral-100 mb-1">Email</strong>
                  <a href="mailto:sadaethalmedianetwork@gmail.com" className="hover:text-red-400 transition-colors">sadaethalmedianetwork@gmail.com</a>
                </li>
                <li>
                  <strong className="block text-neutral-100 mb-1">Phone</strong>
                  +92 3038163022
                </li>
                <li>
                  <strong className="block text-neutral-100 mb-1">Address</strong>
                  Lilla Interchange, Toba, Pind Dadan Khan, District Jhelum
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
