import { ReactNode, CSSProperties } from 'react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    overlayColor?: string;
    modalStyle?: CSSProperties;
    overlayStyle?: CSSProperties;
}