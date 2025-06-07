import { Metadata } from "next";
import { Section } from "../../components/layouts/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Now",
};
export default function Now() {
  return (
    <StandardLayout title={"Now"}>
      <Section>What I&apos;m up to right now.</Section>
      <div className="self-start md:w-1/2 w-full">
        <Card title="2024-7-13">
          <ul>
            <li>Working at SoFi, learning about web development</li>
            <li>Visiting National parks and exploring SLC & Utah ⛰️</li>
            <li>Trying new hobbies - currently trying bouldering</li>
          </ul>
        </Card>
      </div>
    </StandardLayout>
  );
}
