
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

const buildRegex = delimiters => {
  const open = delimiters[0].replace(regexEscapeRE, '\\$&');
  const close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
};

type TextParseResult = {
  expression: string,
  tokens: Array<string | { '@binding': string }>
};

export function parseText (
  text: string,
  delimiters?: [string, string]
): TextParseResult | null {
  const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  const tokens = [];
  const rawTokens = [];
  let lastIndex = tagRE.lastIndex = 0;
  let match = tagRE.exec(text);
  let index;
  let tokenValue;
  while (match) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    const exp = match[1].trim();
    // TODO: 这里为了获取exp的名字加了两个'，后面参考vue的实现？
    tokens.push(`_s('${exp}')`);
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;

    match = tagRE.exec(text);
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens,
  };
}
