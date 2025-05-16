'use client';
import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
    Image,
} from "@heroui/react";
import React, { ReactNode } from "react";

export default function CreateUser({ children, icon, photo }: { children: ReactNode, icon: ReactNode, photo: string | undefined}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Image className="object-cover" isZoomed classNames={{ img: "size-60" }} src={photo} onClick={onOpen} />
            <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-full">
                    {() => (
                        <>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
