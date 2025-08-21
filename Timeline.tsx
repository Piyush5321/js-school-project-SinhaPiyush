import EventMarker from "./EventMarker";
import { EventItem } from "../types";

type Props = {
  events: EventItem[];
  onSelect: (event: EventItem) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  return (
    <section id="timeline">
      {events.map((ev, idx) => (
        <EventMarker key={idx} event={ev} onClick={() => onSelect(ev)} />
      ))}
    </section>
  );
}