import { Metadata } from "next";
import { Section } from "../../components/layouts/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
import ExtLink from "../../components/atoms/ExtLink";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Now",
};
export default function Now() {
  return (
    <StandardLayout title={"Now"}>
      <Section>
        What I&apos;m up to right now... updated infrequently
        <br />
        Inspired by the{" "}
        <ExtLink href="https://nownownow.com/about">now page movement</ExtLink>
      </Section>
      <div className="self-start md:w-1/2 w-full">
        <Card title="2024-7-13">
          <ul>
            <li>
              Working at SoFi, learning a lot about web development
            </li>
            <li>Visiting National parks and exploring SLC & Utah ⛰️</li>
            <li>Trying new hobbies - currently trying bouldering</li>
          </ul>
        </Card>
      </div>
    </StandardLayout>
  );
}
