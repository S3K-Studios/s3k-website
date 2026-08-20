import React, { useState } from "react";
import { Input, Textarea, Button, Checkbox, Tabs, Tab } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";

interface BlogFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    onCancel: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ initialData, onSubmit, onCancel }) => {
    const defaultData = {
        id: uuidv4(),
        translations: {
            tr: { title: "", contentString: "", date: new Date().toISOString().split("T")[0], author: "", readingTime: "", isFeatured: false },
            en: { title: "", contentString: "", date: new Date().toISOString().split("T")[0], author: "", readingTime: "", isFeatured: false }
        }
    };

    const getInitialState = () => {
        if (!initialData) return defaultData;

        const transObj: any = {
            tr: { title: "", contentString: "", date: "", author: "", readingTime: "", isFeatured: false },
            en: { title: "", contentString: "", date: "", author: "", readingTime: "", isFeatured: false }
        };

        if (Array.isArray(initialData.translations)) {
            initialData.translations.forEach((t: any) => {
                if (t.language === 'tr' || t.language === 'en') {
                    transObj[t.language] = {
                        title: t.title || "",
                        contentString: Array.isArray(t.content)
                            ? t.content.map((c: any) => c.text).join('\n')
                            : "",
                        date: t.date || new Date().toISOString().split("T")[0],
                        author: t.author || "",
                        readingTime: t.readingTime || "",
                        isFeatured: t.isFeatured || false
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

    const handleTranslationChange = (lang: string, field: string, value: any) => {
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

        submissionData.translations = Object.keys(formData.translations).map(lang => ({
            language: lang,
            title: formData.translations[lang].title,
            content: formData.translations[lang].contentString.split('\n').filter((p: string) => p.trim() !== '').map((text: string) => ({ type: 'paragraph', text })),
            date: formData.translations[lang].date,
            author: formData.translations[lang].author,
            readingTime: formData.translations[lang].readingTime,
            isFeatured: formData.translations[lang].isFeatured
        }));

        onSubmit(submissionData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Tabs aria-label="Language Tabs">
                <Tab key="tr" title="Türkçe">
                    <div className="flex flex-col gap-4 mt-4">
                        <Input
                            label="Başlık (TR)"
                            value={formData.translations.tr.title}
                            onChange={(e) => handleTranslationChange("tr", "title", e.target.value)}
                            isRequired
                        />
                        <Textarea
                            label="İçerik Paragrafları (TR) - Her satır bir paragraf"
                            minRows={5}
                            value={formData.translations.tr.contentString}
                            onChange={(e) => handleTranslationChange("tr", "contentString", e.target.value)}
                            isRequired
                        />
                        <div className="flex gap-4">
                            <Input label="Tarih (TR)" type="date" value={formData.translations.tr.date} onChange={e => handleTranslationChange("tr", "date", e.target.value)} isRequired />
                            <Input label="Yazar (TR)" value={formData.translations.tr.author} onChange={e => handleTranslationChange("tr", "author", e.target.value)} isRequired />
                        </div>
                        <div className="flex gap-4 items-center">
                            <Input label="Okuma Süresi (TR) (örn: 5 dk)" value={formData.translations.tr.readingTime} onChange={e => handleTranslationChange("tr", "readingTime", e.target.value)} isRequired />
                            <Checkbox isSelected={formData.translations.tr.isFeatured} onValueChange={(checked) => handleTranslationChange("tr", "isFeatured", checked)}>
                                Öne Çıkan (Featured)
                            </Checkbox>
                        </div>
                    </div>
                </Tab>
                <Tab key="en" title="English">
                    <div className="flex flex-col gap-4 mt-4">
                        <Input
                            label="Title (EN)"
                            value={formData.translations.en.title}
                            onChange={(e) => handleTranslationChange("en", "title", e.target.value)}
                            isRequired
                        />
                        <Textarea
                            label="Content Paragraphs (EN) - Each line is a paragraph"
                            minRows={5}
                            value={formData.translations.en.contentString}
                            onChange={(e) => handleTranslationChange("en", "contentString", e.target.value)}
                            isRequired
                        />
                        <div className="flex gap-4">
                            <Input label="Date (EN)" type="date" value={formData.translations.en.date} onChange={e => handleTranslationChange("en", "date", e.target.value)} isRequired />
                            <Input label="Author (EN)" value={formData.translations.en.author} onChange={e => handleTranslationChange("en", "author", e.target.value)} isRequired />
                        </div>
                        <div className="flex gap-4 items-center">
                            <Input label="Reading Time (EN) (e.g. 5 min)" value={formData.translations.en.readingTime} onChange={e => handleTranslationChange("en", "readingTime", e.target.value)} isRequired />
                            <Checkbox isSelected={formData.translations.en.isFeatured} onValueChange={(checked) => handleTranslationChange("en", "isFeatured", checked)}>
                                Öne Çıkan (Featured)
                            </Checkbox>
                        </div>
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

export default BlogForm;
