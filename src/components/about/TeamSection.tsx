import React from "react";
import { useTranslation } from "react-i18next";
import { useTeamMembers } from "../../hooks/useTeamMembers";

import TeamMemberCard from "./TeamMemberCard";
import MemberDetailModal from "./MemberDetailModal";

const TeamSection: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = React.useState<any | null>(null);

  const { teamMembers, loading } = useTeamMembers();

  return (
    <section id="team" className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-4xl">group</span>
            {t("about.characterSelect")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t("about.characterSelectDesc")}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id || index}
              index={index}
              member={member as any}
              onClick={() => setSelectedMember(member as any)}
            />
          ))}
        </div>
      )}

      <MemberDetailModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </section>
  );
});

TeamSection.displayName = "TeamSection";

export default TeamSection;
