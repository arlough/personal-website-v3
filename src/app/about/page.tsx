import { Metadata } from "next";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
export const metadata: Metadata = {
  title: "About - Aidan Loughney",
};
export default function About() {
  return (
    <StandardLayout title={"About"}>
        <Section>
        Hi! I’m a Software Engineer at SoFi in Borrow. Before SoFi, I was a student at the University of Michigan where I graduated with a degree in Computer Science. Previously, I interned at Amazon where I worked on a team in S3.

If you want to know more about me or chat, drop me a message at <a  className="underline hover:text-hover" href="mailto:loughneyaidan@gmail.com">loughneyaidan@gmail.com</a>
        </Section>
    </StandardLayout>
  );
}
