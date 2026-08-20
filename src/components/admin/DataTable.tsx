import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Button
} from "@heroui/react";
import React from "react";

interface DataTableProps {
    columns: { key: string; label: string }[];
    data: any[];
    onEdit: (item: any) => void;
    onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, onEdit, onDelete }) => {
    const getValue = (item: any, key: string) => {
        if (item[key] !== undefined) return item[key];
        if (item.translations && Array.isArray(item.translations)) {
            const tr = item.translations.find((t: any) => t.language === 'tr') || item.translations[0];
            if (tr && tr[key] !== undefined) return tr[key];
        }
        return "";
    };

    return (
        <Table aria-label="Admin Data Table">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data}>
                {(item: any) => (
                    <TableRow key={item.id}>
                        {(columnKey) => {
                            const val = getValue(item, columnKey.toString());
                            return (
                                <TableCell>
                                    {columnKey === "actions" ? (
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="flat" onClick={() => onEdit(item)}>
                                                Düzenle
                                            </Button>
                                            <Button size="sm" color="danger" variant="flat" onClick={() => onDelete(item.id)}>
                                                Sil
                                            </Button>
                                        </div>
                                    ) : (
                                        // Basit string/number alanları göster, obje/array ise JSON.stringify
                                        typeof val === 'object' ? JSON.stringify(val) : String(val)
                                    )}
                                </TableCell>
                            );
                        }}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default DataTable;
