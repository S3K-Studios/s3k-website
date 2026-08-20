import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";

interface DataFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const DataFormModal: React.FC<DataFormModalProps> = ({
    isOpen,
    onClose,
    title,
    children
}) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} size="3xl" scrollBehavior="inside">
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody className="pb-6">
                            {children}
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default DataFormModal;
