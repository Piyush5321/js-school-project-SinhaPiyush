import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { setupModalClose } from "./modal.js";

document.addEventListener("DOMContentLoaded", async () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalContent = modal?.querySelector(".modal-content");

  if (!timeline || !modal || !modalContent) return;

  try {
    const events = await fetchEvents();
    renderEvents(events, timeline, modal, modalContent as HTMLElement);
    setupModalClose(modal);
  } catch (err) {
    console.error("Error loading events:", err);
  }
});
