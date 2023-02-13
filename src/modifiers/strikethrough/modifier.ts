import ModifierRequest from "@/constants/interfaces/ModifierRequest";

const STRIKETHROUGH_CHAR = String.fromCharCode(822);

export default function modify(request: ModifierRequest) {
  const matches = request.text.match(/./g);
  // strike must be after every char, and join just adds it in between. So we must add one to the end
  return matches.join(STRIKETHROUGH_CHAR) + STRIKETHROUGH_CHAR;
}
