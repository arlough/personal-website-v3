import { Metadata } from "next";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
export const metadata: Metadata = {
  title: "About - Aidan Loughney",
};
export default function About() {
  return (
    <StandardLayout title={"About"}>
        <p>
        under construction
        </p>
    </StandardLayout>
  );
}
