import { EventItem } from "../types";

type Props = {
  event: EventItem;
  onClick: () => void;
};

export default function EventMarker({ event, onClick }: Props) {
  return (
    <article className="timeline-event" onClick={onClick}>
      <h2>
        <time>{event.year}</time> - {event.title}
      </h2>
      <figure>
        <img src={event.imageURL} alt={event.title} />
        <figcaption>{event.category}</figcaption>
      </figure>
    </article>
  );
}