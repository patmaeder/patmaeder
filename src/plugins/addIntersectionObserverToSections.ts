// @ts-nocheck
import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import { customAlphabet } from "nanoid";

export const addIntersectionObserverToSections: RehypePlugin = (
  options?: any,
) => {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName != "section") return;

      const heading = node.children[0];

      heading.properties["x-ref"] =
        "heading_" + customAlphabet("abcdefghijklmnopqrstuvwxyz", 6)();

      node.properties["x-intersect:enter"] =
        `$store.inView.add($refs.${heading.properties["x-ref"]}.id)`;
      node.properties["x-intersect:leave"] =
        `$store.inView.delete($refs.${heading.properties["x-ref"]}.id)`;
    });
  };
};
