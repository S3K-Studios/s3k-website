import React, { useState } from "react";
import { Input, Textarea, Button, Tabs, Tab } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";

interface SimpleContentFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    onCancel: () => void;
    fieldsConfig: { name: string; label: string; type?: "number" | "text" }[];
    translatableFieldsConfig: { name: string; label: string; type?: "textarea" | "text" }[];
}

const SimpleContentForm: React.FC<SimpleContentFormProps> = ({
    initialData,
    onSubmit,
    onCancel,
    fieldsConfig,
    translatableFieldsConfig
}) => {
    const defaultData = {
        id: uuidv4(),
        translations: {
            tr: {
                ...Object.fromEntries(translatableFieldsConfig.map(f => [f.name, ""])),
                ...Object.fromEntries(fieldsConfig.map(f => [f.name, ""]))
            },
            en: {
                ...Object.fromEntries(translatableFieldsConfig.map(f => [f.name, ""])),
                ...Object.fromEntries(fieldsConfig.map(f => [f.name, ""]))
            }
        }
    };

    const getInitialState = () => {
        if (!initialData) return defaultData;

        const transObj: any = {
            tr: {
                ...Object.fromEntries(translatableFieldsConfig.map(f => [f.name, ""])),
                ...Object.fromEntries(fieldsConfig.map(f => [f.name, ""]))
            },
            en: {
                ...Object.fromEntries(translatableFieldsConfig.map(f => [f.name, ""])),
                ...Object.fromEntries(fieldsConfig.map(f => [f.name, ""]))
            }
        };

        if (Array.isArray(initialData.translations)) {
            initialData.translations.forEach((t: any) => {
                if (t.language === 'tr' || t.language === 'en') {
                    translatableFieldsConfig.forEach(cfg => {
                        transObj[t.language][cfg.name] = t[cfg.name] || "";
                    });
                    fieldsConfig.forEach(cfg => {
                        transObj[t.language][cfg.name] = t[cfg.name] || "";
                    });
                }
            });
        }

        return {
            id: initialData.id,
            translations: transObj
        };
    };

    const [formData, setFormData] = useState(getInitialState());

    const handleTranslationChange = (lang: string, field: string, value: string) => {
        setFormData((prev: any) => ({
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const submissionData = { id: formData.id, translations: [] as any[] };

        submissionData.translations = Object.keys(formData.translations).map(lang => {
            const trans = formData.translations[lang];
            const langData: any = { language: lang };
            translatableFieldsConfig.forEach(cfg => {
                langData[cfg.name] = trans[cfg.name];
            });
            fieldsConfig.forEach(cfg => {
                langData[cfg.name] = trans[cfg.name];
            });
            return langData;
        });

        onSubmit(submissionData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Tabs aria-label="Language Tabs">
                {["tr", "en"].map(lang => (
                    <Tab key={lang} title={lang.toUpperCase()}>
                        <div className="flex flex-col gap-4 mt-4">
                            {translatableFieldsConfig.map(cfg => (
                                cfg.type === "textarea" ? (
                                    <Textarea
                                        key={cfg.name}
                                        label={`${cfg.label} (${lang})`}
                                        value={formData.translations[lang][cfg.name] || ""}
                                        onChange={(e) => handleTranslationChange(lang, cfg.name, e.target.value)}
                                        isRequired
                                    />
                                ) : (
                                    <Input
                                        key={cfg.name}
                                        label={`${cfg.label} (${lang})`}
                                        value={formData.translations[lang][cfg.name] || ""}
                                        onChange={(e) => handleTranslationChange(lang, cfg.name, e.target.value)}
                                        isRequired
                                    />
                                )
                            ))}
                            {fieldsConfig.map(cfg => (
                                <Input
                                    key={cfg.name}
                                    label={`${cfg.label} (${lang})`}
                                    name={cfg.name}
                                    type={cfg.type || "text"}
                                    value={formData.translations[lang][cfg.name] || ""}
                                    onChange={(e) => handleTranslationChange(lang, cfg.name, e.target.value)}
                                    isRequired
                                />
                            ))}
                        </div>
                    </Tab>
                ))}
            </Tabs>

            <div className="flex justify-end gap-2 mt-4">
                <Button color="danger" variant="light" onClick={onCancel}>İptal</Button>
                <Button color="primary" type="submit">Kaydet</Button>
            </div>
        </form>
    );
};

export default SimpleContentForm;
