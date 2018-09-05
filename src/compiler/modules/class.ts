import {
  getAndRemoveAttr,
  getBindingAttr,
} from '../helpers';

function transformNode (el: ASTElement, options: CompilerOptions) {
  const staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  const classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el: ASTElement): string {
  let data = '';
  if (el.staticClass) {
    data += `staticClass:${el.staticClass},`;
  }
  if (el.classBinding) {
    // TODO: 这里也hack了一下
    data += `class:'${el.classBinding}',`;
  }
  return data;
}

export default {
  staticKeys: ['staticClass'],
  transformNode,
  genData,
};
