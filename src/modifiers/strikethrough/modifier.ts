import ModifierRequest from "@/constants/interfaces/ModifierRequest";

const STRIKETHROUGH_CODE = 822;

export default function modify(request: ModifierRequest) {
  const strike = String.fromCharCode(STRIKETHROUGH_CODE);

  const matches = request.text.match(/./g);
  // strike must be after every char, and join just adds it in between. So we must add one to the end
  return matches.join(strike) + strike;
}
