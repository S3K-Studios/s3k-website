import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMemberTranslation } from '../types/team-member';
import { collections } from '../services/firebaseService';
import { useData } from '../context/DataContext';

export const useTeamMembers = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'tr';
    const { teamMembers: rawMembers, loading: dataLoading, error: dataError, refreshData } = useData();

    useEffect(() => {
        if (rawMembers.length === 0 && !dataLoading[collections.TEAM_MEMBERS]) {
            refreshData(collections.TEAM_MEMBERS);
        }
    }, [rawMembers.length, dataLoading, refreshData]);

    const localizedMembers = useMemo(() => {
        return rawMembers.map((item: any) => {
            const trans = item.translations?.find((t: any) => t.language === currentLang) ||
                item.translations?.find((t: any) => t.language === 'tr') ||
                item.translations?.[0] || {};
            return { id: item.id, ...trans };
        });
    }, [rawMembers, currentLang]);

    return {
        teamMembers: localizedMembers as (TeamMemberTranslation & { id: string })[],
        loading: dataLoading[collections.TEAM_MEMBERS] ?? true,
        error: dataError[collections.TEAM_MEMBERS]
    };
};
