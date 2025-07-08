export function renderTextWithBR(text) {
  return text.split(/(<br\s*\/?>)/g).map((part, index) => {
    if (/<br\s*\/?>/.test(part)) {
      return <br key={index} />;
    }
    return part;
  });
}

export const copyToClipboard = (text) => {
  try {
    navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
