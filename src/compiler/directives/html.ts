import { addProp } from '../helpers';

export default function html (el: ASTElement, dir: ASTDirective) {
  if (dir.value) {
    // TODO: 这里为了获取exp的名字加了两个'，后面参考vue的实现？
    addProp(el, 'innerHTML', `_s('${dir.value}')`);
  }
}
