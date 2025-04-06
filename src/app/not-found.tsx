import { Link } from "next-view-transitions";
import InlineLink from "../components/atoms/InlineLink";

export default function NotFound() {
  return (
    <div className="flex justify-center font-bold">
      <div className="flex flex-col items-center font-bold space-y-4">
        <h1 className="text-3xl">404 - Page Not Found</h1>
        <p className="text-lg">Where were you trying to go 🤨</p>
        <div>
          <InlineLink href={""}>I&aposm feeling lucky</InlineLink> ·{" "}
          <InlineLink href={"directory"}>Directory</InlineLink>
        </div>
      </div>
    </div>
  );
}
