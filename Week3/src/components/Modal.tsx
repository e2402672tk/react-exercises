import type { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4">
        
        <button onClick={onClose}>X</button>

        {children}

      </div>
    </div>
  );
}