import { useParams, Link } from 'react-router-dom';
import { getTeamMemberBySlug } from '../utils/team';
import { ArrowLeft, User, CreditCard, Phone, Briefcase, MapPin, Hash } from 'lucide-react';

export default function TeamMemberPage() {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getTeamMemberBySlug(slug) : undefined;

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 text-neutral-900 px-4">
        <User size={64} className="text-neutral-300 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
        <p className="text-neutral-600 mb-8">The team member you are looking for does not exist.</p>
        <Link to="/team" className="text-red-700 font-semibold flex items-center hover:text-red-800 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Team
        </Link>
      </div>
    );
  }

  const detailRows = [
    {
      icon: <Briefcase size={18} className="text-red-700" />,
      label: 'Designation',
      value: member.designation,
    },
    {
      icon: <Hash size={18} className="text-red-700" />,
      label: 'Registration Number',
      value: member.registration_number,
      mono: true,
    },
    {
      icon: <CreditCard size={18} className="text-red-700" />,
      label: 'CNIC',
      value: member.cnic,
      mono: true,
    },
    {
      icon: <Phone size={18} className="text-red-700" />,
      label: 'Phone',
      value: member.phone,
    },
    {
      icon: <MapPin size={18} className="text-red-700" />,
      label: 'Location',
      value: member.location,
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
      {/* Top back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/team"
          className="inline-flex items-center text-sm text-neutral-500 hover:text-red-700 font-semibold transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Our Team
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white border border-neutral-200 overflow-hidden">

          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row border-b-4 border-red-700">
            {/* Profile Image */}
            <div className="sm:w-56 md:w-64 flex-shrink-0 bg-neutral-100">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 sm:h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.onerror = null;
                    t.src = `https://placehold.co/400x500/eeeeee/999999?text=${encodeURIComponent(member.name?.charAt(0) || '?')}`;
                  }}
                />
              ) : (
                <div className="w-full h-64 sm:h-full flex items-center justify-center bg-neutral-200">
                  <User size={64} className="text-neutral-400" />
                </div>
              )}
            </div>

            {/* Name & Reg */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-neutral-900 text-white">
              <div className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">
                SADA-E-THAL® Team Member
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                {member.name}
              </h1>
              {member.designation && (
                <p className="text-neutral-300 text-lg font-medium mb-4">{member.designation}</p>
              )}
              {member.registration_number && (
                <div className="inline-flex items-center gap-2 bg-red-700/20 border border-red-700/40 px-4 py-2 mt-2 w-fit">
                  <Hash size={14} className="text-red-400" />
                  <span className="text-red-300 font-mono font-bold tracking-widest text-sm">
                    {member.registration_number}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Detail Rows */}
          <div className="divide-y divide-neutral-100">
            {detailRows.map(({ icon, label, value, mono }) =>
              value ? (
                <div key={label} className="flex items-start gap-4 px-6 md:px-10 py-5">
                  <div className="flex-shrink-0 mt-0.5">{icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">{label}</p>
                    <p className={`text-neutral-900 text-base font-semibold ${mono ? 'font-mono tracking-wider' : ''}`}>
                      {value}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
