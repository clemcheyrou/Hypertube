import React from 'react';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
};

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, className = '' }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
                className={`bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-full ${className}`}
            >
                {title && <div className="mb-4 text-lg font-semibold">{title}</div>}
                <div>{children}</div>
                <button
                    onClick={onClose}
                    className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};
