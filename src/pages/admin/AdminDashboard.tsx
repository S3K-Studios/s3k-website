import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Button } from "@heroui/react";
import DataTable from "../../components/admin/DataTable";
import DataFormModal from "../../components/admin/DataFormModal";
import { collections, fetchCollectionData, saveDocument, deleteDocument } from "../../services/firebaseService";
import { useData } from "../../context/DataContext";

// Forms
import BlogForm from "../../components/admin/forms/BlogForm";
import GameForm from "../../components/admin/forms/GameForm";
import TeamMemberForm from "../../components/admin/forms/TeamMemberForm";
import SimpleContentForm from "../../components/admin/forms/SimpleContentForm";

type ActiveTab = string;

const AdminDashboard: React.FC = () => {
    const history = useHistory();
    const { refreshData } = useData();
    const [activeTab, setActiveTab] = useState<ActiveTab>(collections.BLOGS);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);

    useEffect(() => {
        loadData();
    }, [activeTab]);

    const loadData = async () => {
        setLoading(true);
        try {
            const fetchedData = await fetchCollectionData(activeTab);
            setData(fetchedData);
        } catch (error) {
            console.error("Veri yüklenirken hata:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            history.push("/admin/login");
        } catch (error) {
            console.error("Çıkış yapılırken hata:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Bu öğeyi silmek istediğinize emin misiniz?")) {
            try {
                await deleteDocument(activeTab, id);
                await refreshData(activeTab); // Invalidate global cache
                loadData();
            } catch (error) {
                console.error("Silme hatası:", error);
            }
        }
    };

    const handleSave = async (formData: any) => {
        try {
            await saveDocument(activeTab, formData.id, formData);
            await refreshData(activeTab); // Invalidate global cache
            setIsModalOpen(false);
            loadData();
        } catch (error) {
            console.error("Kaydetme hatası:", error);
        }
    };

    const openForm = (item: any = null) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const getColumns = () => {
        switch (activeTab) {
            case collections.BLOGS: return [{ key: "id", label: "ID" }, { key: "date", label: "Tarih" }, { key: "author", label: "Yazar" }, { key: "actions", label: "İşlemler" }];
            case collections.GAMES: return [{ key: "id", label: "ID" }, { key: "releaseDate", label: "Çıkış" }, { key: "actions", label: "İşlemler" }];
            case collections.TEAM_MEMBERS: return [{ key: "id", label: "ID" }, { key: "actions", label: "İşlemler" }];
            case collections.ABOUT_TIMELINE: return [{ key: "id", label: "ID" }, { key: "year", label: "Yıl" }, { key: "actions", label: "İşlemler" }];
            case collections.ABOUT_VALUES: return [{ key: "id", label: "ID" }, { key: "icon", label: "İkon" }, { key: "actions", label: "İşlemler" }];
            case collections.WHY_CHOOSE_US: return [{ key: "id", label: "ID" }, { key: "icon", label: "İkon" }, { key: "actions", label: "İşlemler" }];
            case collections.AUDIT_LOGS: return [
                { key: "timestamp", label: "Tarih" },
                { key: "adminId", label: "Admin ID" },
                { key: "action", label: "İşlem" },
                { key: "collectionName", label: "Koleksiyon" },
                { key: "documentId", label: "Kayıt ID" }
            ];
            default: return [{ key: "id", label: "ID" }, { key: "actions", label: "İşlemler" }];
        }
    };

    const renderForm = () => {
        switch (activeTab) {
            case collections.BLOGS: return <BlogForm initialData={editingItem} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />;
            case collections.GAMES: return <GameForm initialData={editingItem} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />;
            case collections.TEAM_MEMBERS: return <TeamMemberForm initialData={editingItem} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)} />;
            case collections.ABOUT_TIMELINE:
                return <SimpleContentForm
                    initialData={editingItem} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)}
                    fieldsConfig={[{ name: 'year', label: 'Yıl' }]}
                    translatableFieldsConfig={[{ name: 'title', label: 'Başlık', type: 'text' }, { name: 'desc', label: 'Açıklama', type: 'textarea' }, { name: 'badge', label: 'Rozet Metni', type: 'text' }]}
                />;
            case collections.ABOUT_VALUES:
                return <SimpleContentForm
                    initialData={editingItem} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)}
                    fieldsConfig={[{ name: 'icon', label: 'İkon (örn: material-symbols:groups)' }, { name: 'percentage', label: 'Yüzde' }, { name: 'colorClass', label: 'Renk Class (bg-blue-500)' }, { name: 'iconBgClass', label: 'İkon Arka Plan Class' }]}
                    translatableFieldsConfig={[{ name: 'title', label: 'Başlık', type: 'text' }, { name: 'desc', label: 'Açıklama', type: 'textarea' }]}
                />;
            case collections.WHY_CHOOSE_US:
                return <SimpleContentForm
                    initialData={editingItem} onSubmit={handleSave} onCancel={() => setIsModalOpen(false)}
                    fieldsConfig={[{ name: 'icon', label: 'İkon (örn: lucide:wand-2)' }]}
                    translatableFieldsConfig={[{ name: 'title', label: 'Başlık', type: 'text' }, { name: 'desc', label: 'Açıklama', type: 'textarea' }]}
                />;
            default: return <div>Form bulunamadı</div>;
        }
    }

    return (
        <div className="flex h-screen bg-content2">
            <div className="w-64 bg-content1 border-r border-divider h-full p-4 flex flex-col">
                <h2 className="text-xl font-bold mb-8">S3K Admin</h2>
                <nav className="flex-grow flex flex-col gap-2">
                    {Object.entries(collections).map(([key, val]) => (
                        <Button
                            key={val}
                            className="justify-start"
                            variant={activeTab === val ? "solid" : "light"}
                            color={activeTab === val ? "primary" : "default"}
                            onClick={() => setActiveTab(val as ActiveTab)}
                        >
                            {key.replace('_', ' ')}
                        </Button>
                    ))}
                </nav>
                <Button color="danger" variant="flat" onClick={handleLogout}>
                    Çıkış Yap
                </Button>
            </div>

            <div className="flex-1 p-8 overflow-y-auto w-full">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold uppercase">{activeTab.replace('_', ' ')} Yönetimi</h1>
                    {activeTab !== collections.AUDIT_LOGS && (
                        <Button color="primary" onClick={() => openForm(null)}>Yeni Ekle</Button>
                    )}
                </div>

                {loading ? (
                    <div>Yükleniyor...</div>
                ) : activeTab === collections.AUDIT_LOGS ? (
                    <div className="bg-content1 rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full divide-y border-divider">
                            <thead className="bg-content2">
                                <tr>
                                    {getColumns().map(col => <th key={col.key} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{col.label}</th>)}
                                </tr>
                            </thead>
                            <tbody className="bg-content1 divide-y divide-divider">
                                {[...data].sort((a, b) => {
                                    const timeA = a.timestamp?.seconds ? a.timestamp.seconds * 1000 : new Date(a.timestamp || 0).getTime();
                                    const timeB = b.timestamp?.seconds ? b.timestamp.seconds * 1000 : new Date(b.timestamp || 0).getTime();
                                    return timeB - timeA;
                                }).map(row => {
                                    const dateStr = row.timestamp?.seconds
                                        ? new Date(row.timestamp.seconds * 1000).toLocaleString("tr-TR")
                                        : row.timestamp ? new Date(row.timestamp).toLocaleString("tr-TR") : "Bilinmiyor";

                                    return (
                                        <tr key={row.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{dateStr}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm opacity-70" title={row.adminId}>
                                                {row.adminId ? `${row.adminId.substring(0, 8)}...` : "System"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary">{row.action}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{row.collectionName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm opacity-70">{row.documentId || "-"}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {data.length === 0 && <div className="p-8 text-center opacity-50">Log bulunamadı.</div>}
                    </div>
                ) : (
                    <DataTable
                        columns={getColumns()}
                        data={data}
                        onEdit={openForm}
                        onDelete={handleDelete}
                    />
                )}
            </div>

            {isModalOpen && (
                <DataFormModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={editingItem ? "Düzenle" : "Yeni Ekle"}
                >
                    {renderForm()}
                </DataFormModal>
            )}
        </div>
    );
};

export default AdminDashboard;
