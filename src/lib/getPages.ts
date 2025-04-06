import fs from "node:fs";
export const getPages = () => {
  return fs
    .readdirSync("src/app", { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => folder.name)
    .filter(
      (folder) =>
        !folder.startsWith("(") && !folder.startsWith("_") && folder !== "og",
    );
};
