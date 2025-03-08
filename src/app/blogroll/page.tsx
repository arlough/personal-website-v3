import { Metadata } from "next";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
import ExtLink from "../../components/atoms/ExtLink";

export const metadata: Metadata = {
  title: "Blogroll - Aidan Loughney",
};
export default function Blogroll() {
  return (
    <StandardLayout title={"Blogroll"}>
      <Section title="My favorite blogs that I subscribe to">
        <ul>
          <li>
            Reboot - <ExtLink href="https://joinreboot.org">website</ExtLink>{" "}
            <ExtLink href="https://joinreboot.org/feed">feed</ExtLink>
          </li>
          <li>
            Jasmine Sun - <ExtLink href="https://jasmi.news">website</ExtLink>{" "}
            <ExtLink href="https://jasmi.news/feed">feed</ExtLink>
          </li>
          <li>
            Maggie Appleton -{" "}
            <ExtLink href="https://maggieappleton.com">website</ExtLink>{" "}
            <ExtLink href="https://maggieappleton.com/rss.xml">feed</ExtLink>
          </li>
          <li>
            Uses This - <ExtLink href="https://usesthis.com">website</ExtLink>{" "}
            <ExtLink href="https://usesthis.com/feed.atom">feed</ExtLink>
          </li>
          <li>
            Bookbear - <ExtLink href="https://www.avabear.xyz">website</ExtLink>{" "}
            <ExtLink href="https://www.avabear.xyz/feed">feed</ExtLink>
          </li>
          <li>
            Works in Progress -{" "}
            <ExtLink href="https://worksinprogress.co">website</ExtLink>{" "}
            <ExtLink href="https://www.worksinprogress.news/feed">feed</ExtLink>
          </li>
        </ul>
      </Section>
    </StandardLayout>
  );
}
