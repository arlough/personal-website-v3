import { Metadata } from "next";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
import { useEffect, useState } from "react";
export const metadata: Metadata = {
  title: "Bookshelf - Aidan Loughney",
};
export default function Bookshelf() {
  // const [currentlyReading, setCurrentlyReading] = useState([]);
  // const [recentlyRead, setRecentlyRead] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  // const [readingList, setReadingList] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('/api/data');
  //     const result = await response.json();
  //   }
  //   fetchData();
  // }, []);

  return (
    <StandardLayout title={"Bookshelf"}>
      <Section>
        <p>My digital book shelf 📚 :)</p>
      </Section>
      <Section title="Currently reading">under construction</Section>
      <Section title="Recently read">under construction</Section>
      <Section title="Favorites">under construction</Section>
      <Section title="Reading list">under construction</Section>
    </StandardLayout>
  );
}
