export function SkillTags({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
