import { Section } from "../../components/layouts/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
export default function Bookshelf() {
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
