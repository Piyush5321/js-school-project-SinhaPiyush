document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  // Fetch and render events
  fetch("data/events.json")
    .then(response => response.json())
    .then(events => {
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

        // Click to open modal
        article.addEventListener("click", () => {
          modalContent.innerHTML = `
            <span id="modal-close" style="cursor:pointer;float:right;font-size:20px;">&times;</span>
            <h2>${event.year} - ${event.title}</h2>
            <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%;border-radius:10px;">
            <p>${event.description}</p>
            <small><em>Category: ${event.category}</em></small>
          `;
          modal.style.display = "block";

          // Close modal
          modalContent.querySelector("#modal-close").addEventListener("click", () => {
            modal.style.display = "none";
          });
        });

        timeline.appendChild(article);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
