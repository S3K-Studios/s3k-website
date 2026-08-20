import React from "react";
import { TeamMemberTranslation } from "@/types/team-member";

const TeamMemberCard: React.FC<{
  index: number;
  member: TeamMemberTranslation & { id: string };
  onClick: () => void;
}> = React.memo(({ member, onClick }) => (
  <div
    onClick={onClick}
    className="character-card group relative flex flex-col bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-[#2d3748] rounded-2xl overflow-hidden h-full cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
  >
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-800">
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
        style={{
          backgroundImage: `url(https://img.heroui.chat/image/game?w=600&h=800&u=${member.imageId})`
        }}
      />
      {/* Layered Feathering for seamless transition - shifted lower */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[20px] pointer-events-none z-0"
        style={{
          maskImage: 'linear-gradient(to top, black 0%, black 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)'
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #1a202c 0%, #1a202c 30%, rgba(26, 32, 44, 0.8) 70%, transparent 100%)'
        }}
      />
      <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded shadow-lg backdrop-blur-sm">
        LVL {member.level}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1 gap-4 -mt-12 relative z-10">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm uppercase tracking-wider">
          {member.class}
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <div className="bg-slate-100 dark:bg-[#111318] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">terminal</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Special Ability
            </span>
          </div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {member.specialAbility}
          </p>
        </div>
        <div className="bg-slate-100 dark:bg-[#111318] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">favorite</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Favorite Game
            </span>
          </div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {member.favoriteGame}
          </p>
        </div>
      </div>
    </div>
  </div>
));

TeamMemberCard.displayName = "TeamMemberCard";

export default TeamMemberCard;
