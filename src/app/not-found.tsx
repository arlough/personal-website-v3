import InlineLink from "../components/atoms/InlineLink";
import { getPages } from "../lib/getPages";
import getUrl from "../lib/getUrl";

export default function NotFound() {
  const pages = getPages();
  const randomPageHref = getUrl(
    pages[Math.floor(Math.random() * pages.length)],
  );
  return (
    <div className="flex justify-center font-bold">
      <div className="flex flex-col items-center font-bold space-y-4">
        <h1 className="text-3xl">404 - Page Not Found</h1>
        <p className="text-lg">Where were you trying to go 🤨</p>
        <div>
          <InlineLink href={randomPageHref}>I&#39;m feeling lucky</InlineLink> ·{" "}
          <InlineLink href={"directory"}>Directory</InlineLink>
        </div>
      </div>
    </div>
  );
}
