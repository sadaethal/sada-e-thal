import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllTeamMembers } from '../utils/team';
import { Search, User, ChevronRight } from 'lucide-react';

export default function TeamPage() {
  const [query, setQuery] = useState('');
  const members = getAllTeamMembers();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    return members.filter(
      (m) =>
        m.name?.toLowerCase().includes(q) ||
        m.registration_number?.toLowerCase().includes(q)
    );
  }, [query, members]);

  return (
    <div className="bg-neutral-50 min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">Our Team</h1>
          <div className="w-24 h-1 bg-red-700 mb-6"></div>
          <p className="text-lg text-neutral-600 leading-relaxed">
            The people who power SADA-E-THAL® Media Network. Search by name or registration number.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
          <input
            id="team-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or registration number (e.g. stmn001)..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-neutral-300 focus:border-red-700 focus:ring-2 focus:ring-red-100 outline-none text-neutral-900 placeholder-neutral-400 text-sm transition-all duration-200 rounded-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors text-sm font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-neutral-500 font-medium">
          {query
            ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${query}"`
            : `${members.length} member${members.length !== 1 ? 's' : ''} total`}
        </div>

        {/* Member List */}
        {members.length === 0 ? (
          <div className="text-center py-24 bg-white border border-neutral-200">
            <User size={48} className="mx-auto text-neutral-300 mb-4" />
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">No Team Members Yet</h2>
            <p className="text-neutral-500 max-w-sm mx-auto">
              Team members will appear here once they are added in the CMS admin panel.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 bg-white border border-neutral-200">
            <Search size={36} className="mx-auto text-neutral-300 mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">No results found</h2>
            <p className="text-neutral-500 text-sm">Try searching with a different name or registration number.</p>
            <button
              onClick={() => setQuery('')}
              className="mt-4 text-red-700 font-semibold text-sm hover:text-red-800 transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="divide-y divide-neutral-200 border border-neutral-200 bg-white">
            {filtered.map((member) => (
              <Link
                key={member.slug}
                to={`/team/${member.slug}`}
                className="group flex items-center gap-4 px-5 py-4 hover:bg-red-50 transition-colors duration-150"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.onerror = null;
                        t.src = `https://placehold.co/100x100/eeeeee/999999?text=${encodeURIComponent(member.name?.charAt(0) || '?')}`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-200">
                      <User size={20} className="text-neutral-400" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="text-base font-bold text-neutral-900 group-hover:text-red-700 transition-colors truncate">
                      {member.name}
                    </span>
                    {member.designation && (
                      <>
                        <span className="text-neutral-400 font-medium hidden sm:inline">—</span>
                        <span className="text-sm text-neutral-600 font-medium truncate">{member.designation}</span>
                      </>
                    )}
                  </div>
                  {member.registration_number && (
                    <p className="text-xs text-neutral-400 mt-0.5 font-mono tracking-wide">
                      {member.registration_number}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={18}
                  className="flex-shrink-0 text-neutral-300 group-hover:text-red-700 group-hover:translate-x-0.5 transition-all duration-150"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
