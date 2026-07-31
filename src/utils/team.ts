import fm from 'front-matter';

export interface TeamMember {
  name: string;
  cnic: string;
  phone: string;
  designation: string;
  location: string;
  registration_number: string;
  image: string;
  slug: string;
}

export function getAllTeamMembers(): TeamMember[] {
  const modules = import.meta.glob('../../content/team/*.md', { query: '?raw', import: 'default', eager: true });

  const members = Object.entries(modules).map(([_, content]) => {
    const parsed = fm<Omit<TeamMember, never>>(content as string);
    return {
      ...parsed.attributes,
    } as TeamMember;
  });

  // Sort by registration_number ascending (stmn001, stmn002, ...)
  return members.sort((a, b) => {
    const numA = parseInt((a.registration_number || '').replace(/\D/g, ''), 10) || 0;
    const numB = parseInt((b.registration_number || '').replace(/\D/g, ''), 10) || 0;
    return numA - numB;
  });
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return getAllTeamMembers().find((m) => m.slug === slug);
}
