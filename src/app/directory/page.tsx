import fs from "node:fs";
import getUrl from "../../lib/getUrl";
import InlineLink from "../../components/atoms/InlineLink";

export default function Directory() {
  const pages = fs
    .readdirSync("src/app", { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => folder.name)
    .filter(
      (folder) =>
        !folder.startsWith("(") && !folder.startsWith("_") && folder !== "og",
    );
  return (
    <div className="flex justify-center ">
      <div className="flex justify-center space-x-6 ">
        {...pages.map((page) => (
          <InlineLink key="page" href={getUrl(page)}>
            {page}
          </InlineLink>
        ))}
      </div>
    </div>
  );
}
