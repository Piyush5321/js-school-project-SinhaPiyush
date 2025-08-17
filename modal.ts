import { EventData } from "./types.js";

export function openModal(event: EventData, modal: HTMLElement, modalContent: HTMLElement): void {
  modalContent.innerHTML = `
    <span id="modal-close" style="cursor:pointer;float:right;font-size:20px;">&times;</span>
    <h2>${event.year} - ${event.title}</h2>
    <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%;border-radius:10px;">
    <p>${event.description}</p>
    <small><em>Category: ${event.category}</em></small>
  `;
  modal.style.display = "block";

  modalContent.querySelector("#modal-close")?.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

export function setupModalClose(modal: HTMLElement): void {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
