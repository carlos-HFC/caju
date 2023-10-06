import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen?: boolean;
  onClose?(): void;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  title?: string;
  children?: React.ReactNode;
}

export function Modal(props: ModalProps) {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => document.removeEventListener('keydown', closeModal);
  });

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [props.isOpen]);

  const closeModal = useCallback(
    (event: KeyboardEvent) => {
      if (event?.key === 'Escape') {
        return props?.onClose && props?.onClose();
      }
    },
    [],
  );

  return (
    props.isOpen && ReactDOM.createPortal(
      <div
        onClick={() => props.onClose && props.onClose()}
        className="c-modal"
        role="dialog"
        tabIndex={-1}
        aria-labelledby={props["aria-labelledby"]}
        aria-describedby={props["aria-describedby"]}
        aria-hidden={props.isOpen ? 'false' : "true"}
        aria-modal={props.isOpen && 'true'}
      >
        <div className="c-modal-content" onClick={e => e.stopPropagation()}>
          <div className="c-modal-header">
            <Icon name="close" aria-label="Fechar" onClick={() => props.onClose && props.onClose()} />
          </div>
          <div className="c-modal-body">
            <div className="c-modal-title" id={props["aria-labelledby"]}>
              {props.title}
            </div>
            <div className="c-modal-description" id={props["aria-describedby"]}>
              {props.children}
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}