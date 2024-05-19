import { Metadata } from "next";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
export const metadata: Metadata = {
  title: "Bookshelf - Aidan Loughney",
};
export default function Bookshelf() {
  return (
    <StandardLayout title={"Bookshelf"}>
      <Section>
        <p>
            My digital book shelf :)
        </p>
      </Section>
      <Section title="Read this year">under construction</Section>
      <Section title="Favorites">under construction</Section>
      <Section title="Reading list">under construction</Section>
    </StandardLayout>
  );
}
