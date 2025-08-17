import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderEvents(events: EventData[], timeline: HTMLElement, modal: HTMLElement, modalContent: HTMLElement): void {
  events.forEach(event => {
    const article = document.createElement("article");
    article.classList.add("timeline-event");

    article.innerHTML = `
      <h2><time>${event.year}</time> - ${event.title}</h2>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}">
        <figcaption>${event.category}</figcaption>
      </figure>
    `;

    article.addEventListener("click", () => openModal(event, modal, modalContent));

    timeline.appendChild(article);
  });
}
