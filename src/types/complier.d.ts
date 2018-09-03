declare type CompilerOptions = {
  warn?: Function; // allow customizing warning in different environments; e.g. node
  modules?: Array<ModuleOptions>; // platform specific modules; e.g. style; class
  directives?: { [key: string]: Function }; // platform specific directives
  staticKeys?: string[]; // a list of AST properties to be considered static; for optimization
  preserveWhitespace?: boolean; // preserve whitespace between elements?
  optimize?: boolean; // optimize static content?

  // web specific
  expectHTML?: boolean; // only false for non-web builds
  isFromDOM?: boolean;
  shouldDecodeTags?: boolean;
  shouldDecodeNewlines?: boolean;
  shouldDecodeNewlinesForHref?: boolean;

  // runtime user-configurable
  delimiters?: [string, string]; // template delimiters
  comments?: boolean; // preserve comments in template

  // for ssr optimization compiler
  scopeId?: string;
};

declare type CompiledResult = {
  ast?: ASTElement;
  render: string;
  staticRenderFns: Array<string>;
  stringRenderFns?: Array<string>;
  errors?: Array<string>;
  tips?: Array<string>;
};

declare type ModuleOptions = {
  // transform an AST node before any attributes are processed
  // returning an ASTElement from pre/transforms replaces the element
  preTransformNode?: (el: ASTElement, options: ModuleOptions) => ASTElement | void;
  // transform an AST node after built-ins like v-if, v-for are processed
  transformNode?: (el: ASTElement, options: ModuleOptions) => ASTElement | void;
  // transform an AST node after its children have been processed
  // cannot return replacement in postTransform because tree is already finalized
  postTransformNode?: (el: ASTElement, options: ModuleOptions) => ASTElement | void;
  genData?: (el: ASTElement) => string; // generate extra data string for an element
  transformCode?: (el: ASTElement, code: string) => string; // further transform generated code for an element
  staticKeys?: Array<string>; // AST properties to be considered static
};
