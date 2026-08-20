import React, { useState } from "react";
import { Input, Textarea, Button, Tabs, Tab, Divider, Card, CardBody, Slider } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "@iconify/react";

interface TeamMemberFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    onCancel: () => void;
}

const EMPTY_TRANSLATION = {
    name: "",
    role: "",
    imageId: 1,
    specialAbility: "",
    favoriteGame: "",
    level: 50,
    class: "",
    bio: "",
    themeColor: "blue",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    languages: [],
    personal: {
        location: "",
        birthDate: "",
        militaryStatus: "",
        drivingLicense: "",
        email: "",
        phone: ""
    },
    interests: []
};

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ initialData, onSubmit, onCancel }) => {
    const getInitialState = () => {
        if (!initialData) {
            return {
                id: uuidv4(),
                translations: {
                    tr: { ...EMPTY_TRANSLATION, language: "tr" },
                    en: { ...EMPTY_TRANSLATION, language: "en" }
                }
            };
        }

        const transObj: any = {
            tr: { ...EMPTY_TRANSLATION, language: "tr" },
            en: { ...EMPTY_TRANSLATION, language: "en" }
        };

        if (Array.isArray(initialData.translations)) {
            initialData.translations.forEach((t: any) => {
                if (t.language === 'tr' || t.language === 'en') {
                    transObj[t.language] = {
                        ...EMPTY_TRANSLATION,
                        ...t,
                        personal: { ...EMPTY_TRANSLATION.personal, ...(t.personal || {}) },
                        education: Array.isArray(t.education) ? t.education : [],
                        experience: Array.isArray(t.experience) ? t.experience : [],
                        projects: Array.isArray(t.projects) ? t.projects : [],
                        skills: Array.isArray(t.skills) ? t.skills : [],
                        languages: Array.isArray(t.languages) ? t.languages : [],
                        interests: Array.isArray(t.interests) ? t.interests : [],
                    };
                }
            });
        }

        return {
            id: initialData.id,
            translations: transObj
        };
    };

    const [formData, setFormData] = useState(getInitialState());

    const updateField = (lang: string, field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            translations: {
                ...prev.translations,
                [lang]: {
                    ...prev.translations[lang],
                    [field]: value
                }
            }
        }));
    };

    const updatePersonalField = (lang: string, field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            translations: {
                ...prev.translations,
                [lang]: {
                    ...prev.translations[lang],
                    personal: {
                        ...prev.translations[lang].personal,
                        [field]: value
                    }
                }
            }
        }));
    };

    // --- List Helpers ---

    const addListItem = (lang: string, listField: string, newItem: any) => {
        setFormData(prev => ({
            ...prev,
            translations: {
                ...prev.translations,
                [lang]: {
                    ...prev.translations[lang],
                    [listField]: [...prev.translations[lang][listField], newItem]
                }
            }
        }));
    };

    const removeListItem = (lang: string, listField: string, index: number) => {
        setFormData(prev => ({
            ...prev,
            translations: {
                ...prev.translations,
                [lang]: {
                    ...prev.translations[lang],
                    [listField]: prev.translations[lang][listField].filter((_: any, i: number) => i !== index)
                }
            }
        }));
    };

    const updateListItem = (lang: string, listField: string, index: number, field: string, value: any) => {
        setFormData(prev => {
            const newList = [...prev.translations[lang][listField]];
            newList[index] = { ...newList[index], [field]: value };
            return {
                ...prev,
                translations: {
                    ...prev.translations,
                    [lang]: {
                        ...prev.translations[lang],
                        [listField]: newList
                    }
                }
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Convert keyed translations back to array format for storage
        const finalData = {
            id: formData.id,
            translations: [
                { ...formData.translations.tr, language: "tr" },
                { ...formData.translations.en, language: "en" }
            ]
        };
        onSubmit(finalData);
    };

    const renderListHeader = (title: string, onAdd: () => void) => (
        <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-lg">{title}</h4>
            <Button size="sm" color="primary" variant="flat" startContent={<Icon icon="lucide:plus" />} onClick={onAdd}>
                Ekle
            </Button>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-h-[80vh] overflow-y-auto px-1">
            <Tabs aria-label="Language selection" fullWidth color="primary" variant="bordered">
                {["tr", "en"].map(lang => (
                    <Tab key={lang} title={lang === "tr" ? "TURKISH (TR)" : "ENGLISH (EN)"}>
                        <div className="pt-4">
                            <Tabs aria-label={`${lang} content sections`} variant="underlined" color="secondary">
                                {/* TAB 1: GENERAL INFO */}
                                <Tab key="general" title="Genel">
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <Input label="İsim" isRequired value={formData.translations[lang].name} onChange={e => updateField(lang, "name", e.target.value)} />
                                        <Input label="Rol" isRequired value={formData.translations[lang].role} onChange={e => updateField(lang, "role", e.target.value)} />
                                        <Input label="Sınıf (Class)" placeholder="örn: Lead Developer, Architect" value={formData.translations[lang].class} onChange={e => updateField(lang, "class", e.target.value)} />
                                        <Input label="Tema Rengi" placeholder="blue, green, purple..." value={formData.translations[lang].themeColor} onChange={e => updateField(lang, "themeColor", e.target.value)} />
                                        <Input label="Avatar Image ID" type="number" min={1} max={10} value={formData.translations[lang].imageId} onChange={e => updateField(lang, "imageId", parseInt(e.target.value))} />
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm opacity-70">Level: {formData.translations[lang].level}</span>
                                            <Slider step={1} maxValue={100} minValue={1} value={formData.translations[lang].level} onChange={v => updateField(lang, "level", v)} />
                                        </div>
                                    </div>
                                    <Divider className="my-6" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="Özel Yetenek" placeholder="örn: Bug Squashing" value={formData.translations[lang].specialAbility} onChange={e => updateField(lang, "specialAbility", e.target.value)} />
                                        <Input label="Favori Oyun" value={formData.translations[lang].favoriteGame} onChange={e => updateField(lang, "favoriteGame", e.target.value)} />
                                    </div>
                                    <Textarea className="mt-4" label="Biyografi" minRows={3} value={formData.translations[lang].bio} onChange={e => updateField(lang, "bio", e.target.value)} />
                                </Tab>

                                {/* TAB 2: EXPERIENCE */}
                                <Tab key="experience" title="Deneyim">
                                    <div className="mt-4 flex flex-col gap-4">
                                        {renderListHeader("İş Deneyimleleri", () => addListItem(lang, "experience", { title: "", company: "", period: "", desc: "", location: "" }))}
                                        {formData.translations[lang].experience.map((exp: any, idx: number) => (
                                            <Card key={idx} shadow="sm">
                                                <CardBody className="grid grid-cols-2 gap-3 relative">
                                                    <Button isIconOnly size="sm" color="danger" variant="light" className="absolute top-2 right-2" onClick={() => removeListItem(lang, "experience", idx)}>
                                                        <Icon icon="lucide:trash-2" />
                                                    </Button>
                                                    <Input size="sm" label="Başlık" value={exp.title} onChange={e => updateListItem(lang, "experience", idx, "title", e.target.value)} />
                                                    <Input size="sm" label="Şirket" value={exp.company} onChange={e => updateListItem(lang, "experience", idx, "company", e.target.value)} />
                                                    <Input size="sm" label="Dönem" placeholder="örn: 2021 - Present" value={exp.period} onChange={e => updateListItem(lang, "experience", idx, "period", e.target.value)} />
                                                    <Input size="sm" label="Lokasyon" value={exp.location} onChange={e => updateListItem(lang, "experience", idx, "location", e.target.value)} />
                                                    <Textarea size="sm" className="col-span-2" label="Açıklama" value={exp.desc} onChange={e => updateListItem(lang, "experience", idx, "desc", e.target.value)} />
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </div>
                                </Tab>

                                {/* TAB 3: EDUCATION */}
                                <Tab key="education" title="Eğitim">
                                    <div className="mt-4 flex flex-col gap-4">
                                        {renderListHeader("Eğitim Bilgileri", () => addListItem(lang, "education", { degree: "", institution: "", period: "", location: "" }))}
                                        {formData.translations[lang].education.map((edu: any, idx: number) => (
                                            <Card key={idx} shadow="sm">
                                                <CardBody className="grid grid-cols-2 gap-3 relative">
                                                    <Button isIconOnly size="sm" color="danger" variant="light" className="absolute top-2 right-2" onClick={() => removeListItem(lang, "education", idx)}>
                                                        <Icon icon="lucide:trash-2" />
                                                    </Button>
                                                    <Input size="sm" label="Derece / Bölüm" value={edu.degree} onChange={e => updateListItem(lang, "education", idx, "degree", e.target.value)} />
                                                    <Input size="sm" label="Kurum" value={edu.institution} onChange={e => updateListItem(lang, "education", idx, "institution", e.target.value)} />
                                                    <Input size="sm" label="Dönem" value={edu.period} onChange={e => updateListItem(lang, "education", idx, "period", e.target.value)} />
                                                    <Input size="sm" label="Lokasyon" value={edu.location} onChange={e => updateListItem(lang, "education", idx, "location", e.target.value)} />
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </div>
                                </Tab>

                                {/* TAB 4: PROJECTS */}
                                <Tab key="projects" title="Projeler">
                                    <div className="mt-4 flex flex-col gap-4">
                                        {renderListHeader("Öne Çıkan Projeler", () => addListItem(lang, "projects", { name: "", desc: "" }))}
                                        {formData.translations[lang].projects.map((proj: any, idx: number) => (
                                            <Card key={idx} shadow="sm">
                                                <CardBody className="flex flex-col gap-2 relative">
                                                    <Button isIconOnly size="sm" color="danger" variant="light" className="absolute top-2 right-2" onClick={() => removeListItem(lang, "projects", idx)}>
                                                        <Icon icon="lucide:trash-2" />
                                                    </Button>
                                                    <Input size="sm" label="Proje Adı" value={proj.name} onChange={e => updateListItem(lang, "projects", idx, "name", e.target.value)} />
                                                    <Textarea size="sm" label="Açıklama" value={proj.desc} onChange={e => updateListItem(lang, "projects", idx, "desc", e.target.value)} />
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </div>
                                </Tab>

                                {/* TAB 5: SKILLS & LANGUAGES */}
                                <Tab key="skills" title="Yetenekler">
                                    <div className="mt-4 grid grid-cols-2 gap-8">
                                        <div className="flex flex-col gap-4">
                                            {renderListHeader("Teknik Yetenekler", () => addListItem(lang, "skills", { name: "", level: 80 }))}
                                            {formData.translations[lang].skills.map((skill: any, idx: number) => (
                                                <div key={idx} className="flex flex-col gap-1 p-2 border border-divider rounded-lg relative">
                                                    <Button isIconOnly size="sm" color="danger" variant="light" className="absolute -top-1 -right-1" onClick={() => removeListItem(lang, "skills", idx)}>
                                                        <Icon icon="lucide:x" />
                                                    </Button>
                                                    <Input size="sm" variant="underlined" label="Yetenek Adı" value={skill.name} onChange={e => updateListItem(lang, "skills", idx, "name", e.target.value)} />
                                                    <Slider size="sm" step={1} maxValue={100} minValue={1} value={skill.level} onChange={v => updateListItem(lang, "skills", idx, "level", v)} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            {renderListHeader("Diller", () => addListItem(lang, "languages", { name: "", level: "" }))}
                                            {formData.translations[lang].languages.map((lng: any, idx: number) => (
                                                <div key={idx} className="flex gap-2 items-end relative pb-2 border-b border-divider">
                                                    <Input size="sm" label="Dil" value={lng.name} onChange={e => updateListItem(lang, "languages", idx, "name", e.target.value)} />
                                                    <Input size="sm" label="Seviye" placeholder="C1, Anadil vb." value={lng.level} onChange={e => updateListItem(lang, "languages", idx, "level", e.target.value)} />
                                                    <Button isIconOnly size="sm" color="danger" variant="light" onClick={() => removeListItem(lang, "languages", idx)}>
                                                        <Icon icon="lucide:trash-2" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Tab>

                                {/* TAB 6: PERSONAL & INTERESTS */}
                                <Tab key="personal" title="Kişisel">
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        <Input label="Lokasyon" value={formData.translations[lang].personal.location} onChange={e => updatePersonalField(lang, "location", e.target.value)} />
                                        <Input label="Doğum Tarihi" placeholder="YYYY-MM-DD" value={formData.translations[lang].personal.birthDate} onChange={e => updatePersonalField(lang, "birthDate", e.target.value)} />
                                        <Input label="Askerlik Durumu" value={formData.translations[lang].personal.militaryStatus} onChange={e => updatePersonalField(lang, "militaryStatus", e.target.value)} />
                                        <Input label="Ehliyet" value={formData.translations[lang].personal.drivingLicense} onChange={e => updatePersonalField(lang, "drivingLicense", e.target.value)} />
                                        <Input label="E-Posta" value={formData.translations[lang].personal.email} onChange={e => updatePersonalField(lang, "email", e.target.value)} />
                                        <Input label="Telefon" value={formData.translations[lang].personal.phone} onChange={e => updatePersonalField(lang, "phone", e.target.value)} />
                                    </div>
                                    <Divider className="my-6" />
                                    {renderListHeader("İlgi Alanları", () => addListItem(lang, "interests", ""))}
                                    <div className="flex flex-wrap gap-2">
                                        {formData.translations[lang].interests.map((interest: string, idx: number) => (
                                            <div key={idx} className="flex items-center gap-1 bg-content2 px-2 py-1 rounded-full border border-divider">
                                                <input
                                                    className="bg-transparent text-sm focus:outline-none min-w-[80px]"
                                                    value={interest}
                                                    onChange={e => {
                                                        const newList = [...formData.translations[lang].interests];
                                                        newList[idx] = e.target.value;
                                                        updateField(lang, "interests", newList);
                                                    }}
                                                />
                                                <Button isIconOnly size="sm" variant="light" radius="full" onClick={() => removeListItem(lang, "interests", idx)}>
                                                    <Icon icon="lucide:x" className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Tab>
                ))}
            </Tabs>

            <Divider />

            <div className="flex justify-end gap-2 pb-4">
                <Button color="danger" variant="light" onClick={onCancel}>İptal</Button>
                <Button color="primary" type="submit">Değişiklikleri Kaydet</Button>
            </div>
        </form>
    );
};

export default TeamMemberForm;

