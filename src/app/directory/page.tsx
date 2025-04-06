import getUrl from "../../lib/getUrl";
import InlineLink from "../../components/atoms/InlineLink";
import { getPages } from "../../lib/getPages";

export default function Directory() {
  const pages = getPages();
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
