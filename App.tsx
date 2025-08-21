import { useEffect, useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import FilterPanel from "./components/FilterPanel";
import type { EventItem } from "./types";

export default function App() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <FilterPanel />
        <Timeline events={events} onSelect={setActiveEvent} />
        {activeEvent && (
          <EventModal event={activeEvent} onClose={() => setActiveEvent(null)} />
        )}
      </main>
    </>
  );
}