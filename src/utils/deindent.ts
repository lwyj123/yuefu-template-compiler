const splitRE = /\r?\n/g;
const emptyRE = /^\s*$/;
const needFixRE = /^(\r?\n)*[\t\s]/;

/**
 * 反缩进函数
 * 将换行空白符进行删除和转化成只包含\t\n的字符串
 *
 * @export
 * @param {string} str
 * @returns
 */
export default function deindent (str: string) {
  if (!needFixRE.test(str)) {
    return str;
  }
  let lines = str.split(splitRE);
  let min = Infinity;
  let type;
  let cur;
  let c;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (!emptyRE.test(line)) {
      if (!type) {
        c = line.charAt(0);
        if (c === ' ' || c === '\t') {
          type = c;
          cur = count(line, type);
          if (cur < min) {
            min = cur;
          }
        } else {
          return str;
        }
      } else {
        cur = count(line, type);
        if (cur < min) {
          min = cur;
        }
      }
    }
  }
  return lines.map(function (line) {
    return line.slice(min);
  }).join('\n');
}

function count (line, type) {
  let i = 0;
  while (line.charAt(i) === type) {
    i++;
  }
  return i;
}
