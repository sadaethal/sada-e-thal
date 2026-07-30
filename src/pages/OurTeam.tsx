import { teamMembers } from '../data/mockData';

export default function OurTeam() {
  return (
    <div className="bg-neutral-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 uppercase tracking-tight">Our Team</h1>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600">
            Meet the dedicated professionals behind SADA-E-THAL® (Media Network), working tirelessly to bring you authentic stories and independent perspectives.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col bg-white border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full aspect-[3/4] bg-neutral-100 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/600x800/eeeeee/999999?text=${member.name.replace(' ', '+')}`;
                  }}
                />
              </div>
              <div className="p-6 text-center border-t-4 border-red-700 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 border-t border-l border-transparent hidden"></div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{member.name}</h3>
                <p className="text-red-700 font-bold text-sm uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
