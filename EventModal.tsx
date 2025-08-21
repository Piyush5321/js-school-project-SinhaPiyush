import { createPortal } from "react-dom";
import { EventItem } from "../types";

type Props = {
  event: EventItem;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: Props) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={{ float: "right" }}>
          &times;
        </button>
        <h2>
          {event.year} - {event.title}
        </h2>
        <img src={event.imageURL} alt={event.title} style={{ maxWidth: "100%" }} />
        <p>{event.description}</p>
        <small><em>Category: {event.category}</em></small>
      </div>
    </div>,
    modalRoot
  );
}