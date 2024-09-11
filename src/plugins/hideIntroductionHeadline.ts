// @ts-nocheck
import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

export const hideIntroductionHeadline: RehypePlugin = (
  options?: any,
) => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName != "section") return;

      const heading = node.children[0];

      if (heading.children[0].value.toLowerCase() === "introduction") {
        heading.properties.className = (node.properties.className || []).concat(
          ["hidden"],
        );
        heading.properties["aria-hidden"] = true;
      }
    });
  };
};
