import { Metadata } from "next";
import { BlockQuote } from "../../components/atoms/BlockQuote";
import ExtLink from "../../components/atoms/ExtLink";
export const metadata: Metadata = {
  title: "Colophon",
};
export default function Colophon() {
  return (
    <article className="space-y-1">
      <h1>Colophon</h1>
      <p>
        You may be asking yourself &quot;Wait what&apos;s this page for?&quot;
        In short, you can think of this page as a mixture of a credits page
        and a how it was built page. Or as{" "}
        <ExtLink href="https://indieweb.org/colophon">indieweb</ExtLink>{" "}
        describes it...
      </p>
      <BlockQuote citation={"https://indieweb.org/colophon"}>
        &quot;A colophon is a page or section, like a footer, of a site that
        describes how the site is made, with what tools, supporting what
        technologies.&quot;
      </BlockQuote>

      <h2 className="mt-4">How it was made</h2>
      <p>
        This site was built with{" "}
        <ExtLink href="https://nextjs.org/">Next.js</ExtLink>, styled with{" "}
        <ExtLink href="https://tailwindcss.com/">Tailwind</ExtLink>, and
        deployed on <ExtLink href="https://vercel.com/">Vercel</ExtLink>
      </p>
      <h2 className="mt-4">Inspirations</h2>
      <ul>
        <li>
          I&apos;m using Apple&apos;s New York font which was inspired by this{" "}
          <ExtLink href="https://matthew-jackson.com/blog/using-apples-new-york-font-in-css/">
            blog post
          </ExtLink>
        </li>
        <li>
          Finally, the concept of this page is inspired by{" "}
          <ExtLink href="https://maggieappleton.com/colophon">
            Maggie Appleton&apos;s site colophon
          </ExtLink>
        </li>
      </ul>
    </ article>
  );
}
