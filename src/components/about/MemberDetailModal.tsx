import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TeamMemberTranslation } from "@/types/team-member";

interface MemberDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: (TeamMemberTranslation & { id: string }) | null;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ isOpen, onClose, member }) => {
    if (!member) return null;

    const colorMap: Record<string, string> = {
        blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
        green: "text-green-500 bg-green-500/10 border-green-500/20",
        orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    };

    const accentColor = colorMap[member.themeColor] || colorMap.blue;

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            size="5xl"
            scrollBehavior="inside"
            backdrop="blur"
            classNames={{
                base: "bg-white dark:bg-[#0f1115] border border-slate-200 dark:border-slate-800",
                header: "border-b border-slate-200 dark:border-slate-800",
                backdrop: "bg-[#0b0c10]/80 backdrop-blur-md",
            }}
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 py-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${accentColor} border`}>
                                    <Icon icon="material-symbols:person" className="text-3xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold dark:text-white">{member.name}</h2>
                                    <p className="text-primary font-medium tracking-wide uppercase text-sm">
                                        {member.class} • LVL {member.level}
                                    </p>
                                </div>
                            </div>
                        </ModalHeader>
                        <ModalBody className="py-8 pb-12">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                {/* Left Column: Portrait & Stats */}
                                <div className="lg:col-span-4 flex flex-col gap-6">
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                                        <img
                                            src={`https://img.heroui.chat/image/game?w=800&h=1000&u=${member.imageId}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                            <p className="text-white/80 text-sm italic font-medium">"{member.specialAbility}"</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-[#1a202c]/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                                            <Icon icon="material-symbols:star" className="text-primary" />
                                            Attributes
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Favorite Game</p>
                                                <p className="text-sm font-bold dark:text-white">{member.favoriteGame}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Current Role</p>
                                                <p className="text-sm font-bold dark:text-white">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Bio & Experience */}
                                <div className="lg:col-span-8 flex flex-col gap-10">
                                    <section>
                                        <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${accentColor.split(' ')[0]}`}>
                                            <Icon icon="material-symbols:history_edu" />
                                            Biography
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                            {member.bio}
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 ${accentColor.split(' ')[0]}`}>
                                            <Icon icon="material-symbols:work-outline" />
                                            Experience Log
                                        </h3>
                                        <div className="space-y-6">
                                            {member.experience.map((exp, idx) => (
                                                <div key={idx} className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800">
                                                    <div className={`absolute left-[-9px] top-0 size-4 rounded-full bg-white dark:bg-[#0f1115] border-2 ${accentColor.split(' ')[2]}`} />
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[11px] font-bold text-slate-400">{exp.period}</span>
                                                        <h4 className="font-bold dark:text-white">{exp.title} @ <span className="text-primary">{exp.company}</span></h4>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{exp.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 ${accentColor.split(' ')[0]}`}>
                                            <Icon icon="material-symbols:bolt" />
                                            Skill Tree
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                                            {member.skills.map((skill, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm font-bold dark:text-white">{skill.name}</span>
                                                        <span className="text-xs font-bold text-slate-400">{skill.level} XP</span>
                                                    </div>
                                                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-primary rounded-full transition-all duration-1000`}
                                                            style={{ width: `${skill.level}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default MemberDetailModal;
