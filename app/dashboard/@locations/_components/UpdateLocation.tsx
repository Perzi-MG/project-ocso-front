'use client';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import React from "react";
import { LuPenTool } from "react-icons/lu";

export default function UpdateLocation({ children }: { children: React.ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary" ><LuPenTool size="20"/></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
