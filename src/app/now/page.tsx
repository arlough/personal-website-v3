import { Metadata } from "next";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Now",
};
export default function Now() {
  return (
    <article>
      <h1>Now</h1>
      <h3>What I&apos;m up to right now.</h3>
      <div className="mt-4 self-start md:w-1/2 w-full">
        <Card title="2024-7-13">
          <ul>
            <li>Working at SoFi, learning about web development</li>
            <li>Visiting National parks and exploring SLC & Utah ⛰️</li>
            <li>Trying new hobbies - currently trying bouldering</li>
          </ul>
        </Card>
      </div>
    </article>
  );
}
