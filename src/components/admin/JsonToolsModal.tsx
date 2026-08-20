import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Tabs,
  Tab,
  Textarea,
  Button,
} from "@heroui/react";

import { saveDocument } from "../../services/firebaseService";

interface JsonToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  collectionName: string;
  data: any[];
  /** Optional reference data from the codebase (e.g. src/data/games.ts) that can be loaded into the import box as a starting point. */
  seedData?: any[];
  onImported: () => void;
}

const JsonToolsModal: React.FC<JsonToolsModalProps> = ({
  isOpen,
  onClose,
  collectionName,
  data,
  seedData,
  onImported,
}) => {
  const [importText, setImportText] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);

  const exportJson = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(exportJson);
    setStatus("Panoya kopyalandı.");
  };

  const handleDownload = () => {
    const blob = new Blob([exportJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${collectionName}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadSeed = () => {
    if (seedData) setImportText(JSON.stringify(seedData, null, 2));
    setStatus(null);
  };

  const handleImport = async () => {
    setStatus(null);

    let parsed: any[];

    try {
      parsed = JSON.parse(importText);
      if (!Array.isArray(parsed))
        throw new Error("JSON bir dizi (array) olmalı.");
    } catch (e: any) {
      setStatus(`Hata: geçersiz JSON — ${e.message}`);

      return;
    }

    const missingId = parsed.find((item) => !item?.id);

    if (missingId) {
      setStatus("Hata: listedeki her kayıt bir 'id' alanı içermelidir.");

      return;
    }

    setImporting(true);
    try {
      let count = 0;

      for (const item of parsed) {
        await saveDocument(collectionName, item.id, item);
        count++;
      }
      setStatus(`${count} kayıt içe aktarıldı / güncellendi.`);
      onImported();
    } catch (e: any) {
      setStatus(`İçe aktarma sırasında hata: ${e.message}`);
    } finally {
      setImporting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      scrollBehavior="inside"
      size="3xl"
      onOpenChange={onClose}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {collectionName} — JSON Araçları
            </ModalHeader>
            <ModalBody className="pb-6">
              <Tabs aria-label="JSON tabs">
                <Tab key="export" title="Dışa Aktar">
                  <div className="flex flex-col gap-3 mt-4">
                    <p className="text-sm text-foreground-500">
                      Bu koleksiyonun canlı Firestore&apos;daki güncel hâli.
                    </p>
                    <Textarea
                      isReadOnly
                      className="font-mono text-xs"
                      minRows={14}
                      value={exportJson}
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleCopy}>Panoya Kopyala</Button>
                      <Button variant="flat" onClick={handleDownload}>
                        .json Olarak İndir
                      </Button>
                    </div>
                  </div>
                </Tab>
                <Tab key="import" title="İçe Aktar">
                  <div className="flex flex-col gap-3 mt-4">
                    <p className="text-sm text-foreground-500">
                      Bir JSON dizisi yapıştırın. Her kayıt bu koleksiyonun
                      doküman yapısında olmalı ve bir <code>id</code> alanı
                      içermelidir. Var olan bir id ile eşleşen kayıtlar
                      güncellenir, yeni id&apos;ler yeni kayıt olarak eklenir.
                      Hiçbir kayıt otomatik silinmez.
                    </p>
                    {seedData && (
                      <Button size="sm" variant="flat" onClick={handleLoadSeed}>
                        Koddaki seed verisini yükle ({seedData.length} kayıt)
                      </Button>
                    )}
                    <Textarea
                      className="font-mono text-xs"
                      minRows={14}
                      placeholder='[ { "id": "...", ... } ]'
                      value={importText}
                      onChange={(e) => setImportText(e.target.value)}
                    />
                    <Button
                      color="primary"
                      isDisabled={!importText.trim()}
                      isLoading={importing}
                      onClick={handleImport}
                    >
                      İçe Aktar
                    </Button>
                  </div>
                </Tab>
              </Tabs>
              {status && <p className="text-sm mt-3">{status}</p>}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default JsonToolsModal;
