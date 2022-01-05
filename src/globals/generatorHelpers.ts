import { LinkInstance, LinkExtraction } from "@/constants/interfaces/Links";

function getLinks(str: string) {
  const matches = str.match(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  );
  let indices: LinkInstance[] = [];
  if (matches != null) {
    for (let i = 0; i < matches.length; i++) {
      indices.push({
        index: str.indexOf(matches[i]),
        length: matches[i].length,
      });
    }
  }
  return indices;
}

function extractLinks(str: string): LinkExtraction {
  const links = getLinks(str);
  const textParts = [];
  const extractedLinks = [];
  let endOfLastLink = 0;

  for (const link of links) {
    textParts.push(str.substring(endOfLastLink, link.index));
    endOfLastLink = link.index + link.length;
    extractedLinks.push(str.substring(link.index, endOfLastLink));
  }
  textParts.push(str.substring(endOfLastLink, str.length));
  return { textParts, extractedLinks };
}

function insertLinks(textParts: string[], linksToInsert: string[]) {
  let result = [];
  for (let i = 0; i < linksToInsert.length; i++) {
    result.push(textParts[i], linksToInsert[i]);
  }
  result.push(textParts[textParts.length - 1]);
  return result.join("");
}

function getKeyByValue(value: string, map: Record<string, string>) {
  return Object.keys(map).find((key) => map[key] === value);
}

export { getKeyByValue, getLinks, extractLinks, insertLinks };
