import React, { useState } from "react";
import { Input, Textarea, Button, Tabs, Tab } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";

interface GameFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    onCancel: () => void;
}

const GameForm: React.FC<GameFormProps> = ({ initialData, onSubmit, onCancel }) => {
    const defaultData = {
        id: uuidv4(),
        translations: {
            tr: { title: "", description: "", featuresString: "", image: "", releaseDate: "", storeLinksString: "" },
            en: { title: "", description: "", featuresString: "", image: "", releaseDate: "", storeLinksString: "" }
        }
    };

    const getInitialState = () => {
        if (!initialData) return defaultData;

        const transObj: any = {
            tr: { title: "", description: "", featuresString: "", image: "", releaseDate: "", storeLinksString: "" },
            en: { title: "", description: "", featuresString: "", image: "", releaseDate: "", storeLinksString: "" }
        };

        if (Array.isArray(initialData.translations)) {
            initialData.translations.forEach((t: any) => {
                if (t.language === 'tr' || t.language === 'en') {
                    transObj[t.language] = {
                        title: t.title || "",
                        description: t.description || "",
                        featuresString: Array.isArray(t.features) ? t.features.join('\n') : "",
                        image: t.image || "",
                        releaseDate: t.releaseDate || "",
                        storeLinksString: Array.isArray(t.storeLinks) ? t.storeLinks.map((l: any) => `${l.name},${l.url}`).join('\n') : ""
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
            return {
                language: lang,
                title: trans.title,
                description: trans.description,
                image: trans.image,
                releaseDate: trans.releaseDate,
                features: trans.featuresString.split('\n').filter((f: string) => f.trim() !== ''),
                storeLinks: trans.storeLinksString.split('\n').filter((line: string) => line.trim() !== '').map((line: string) => {
                    const parts = line.split(',');
                    return { name: parts[0]?.trim() || '', url: parts[1]?.trim() || '' };
                })
            };
        });

        onSubmit(submissionData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Tabs aria-label="Language Tabs">
                <Tab key="tr" title="Türkçe">
                    <div className="flex flex-col gap-4 mt-4">
                        <Input label="Başlık (TR)" value={formData.translations.tr.title} onChange={(e) => handleTranslationChange("tr", "title", e.target.value)} isRequired />
                        <Textarea label="Açıklama (TR)" value={formData.translations.tr.description} onChange={(e) => handleTranslationChange("tr", "description", e.target.value)} isRequired />
                        <Textarea label="Özellikler (TR) - Her satır bir özellik" value={formData.translations.tr.featuresString} onChange={(e) => handleTranslationChange("tr", "featuresString", e.target.value)} isRequired />
                        <Input label="Görsel URL (TR)" value={formData.translations.tr.image} onChange={(e) => handleTranslationChange("tr", "image", e.target.value)} isRequired />
                        <Input label="Çıkış Tarihi (TR)" type="date" value={formData.translations.tr.releaseDate} onChange={(e) => handleTranslationChange("tr", "releaseDate", e.target.value)} isRequired />
                        <Textarea label="Mağaza Linkleri (TR) (Format: İsim,URL - Her satıra bir tane)" value={formData.translations.tr.storeLinksString} onChange={(e) => handleTranslationChange("tr", "storeLinksString", e.target.value)} />
                    </div>
                </Tab>
                <Tab key="en" title="English">
                    <div className="flex flex-col gap-4 mt-4">
                        <Input label="Title (EN)" value={formData.translations.en.title} onChange={(e) => handleTranslationChange("en", "title", e.target.value)} isRequired />
                        <Textarea label="Description (EN)" value={formData.translations.en.description} onChange={(e) => handleTranslationChange("en", "description", e.target.value)} isRequired />
                        <Textarea label="Features (EN) - Each line a feature" value={formData.translations.en.featuresString} onChange={(e) => handleTranslationChange("en", "featuresString", e.target.value)} isRequired />
                        <Input label="Image URL (EN)" value={formData.translations.en.image} onChange={(e) => handleTranslationChange("en", "image", e.target.value)} isRequired />
                        <Input label="Release Date (EN)" type="date" value={formData.translations.en.releaseDate} onChange={(e) => handleTranslationChange("en", "releaseDate", e.target.value)} isRequired />
                        <Textarea label="Store Links (EN) (Format: Name,URL - Each line one store)" value={formData.translations.en.storeLinksString} onChange={(e) => handleTranslationChange("en", "storeLinksString", e.target.value)} />
                    </div>
                </Tab>
            </Tabs>

            <div className="flex justify-end gap-2 mt-4">
                <Button color="danger" variant="light" onClick={onCancel}>İptal</Button>
                <Button color="primary" type="submit">Kaydet</Button>
            </div>
        </form>
    );
};

export default GameForm;
