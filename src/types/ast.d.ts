
declare type ASTModifiers = { [key: string]: boolean };
declare type ASTIfCondition = { exp?: string; block: ASTElement };
declare type ASTIfConditions = Array<ASTIfCondition>;

declare type ASTElementHandler = {
  value: string;
  params?: Array<any>;
  modifiers?: ASTModifiers;
};

declare type ASTElementHandlers = {
  [key: string]: ASTElementHandler | Array<ASTElementHandler>;
};

declare type ASTDirective = {
  name: string;
  rawName: string;
  value: string;
  arg?: string;
  modifiers?: ASTModifiers;
};

declare type ASTNode = ASTElement | ASTText | ASTExpression;

declare type ASTElement = {
  type: 1;
  tag: string;
  attrsList: Array<{ name: string; value: any }>;
  attrsMap: { [key: string]: any };
  parent: ASTElement | null;
  children: Array<ASTNode>;

  processed?: true;

  static?: boolean;
  staticRoot?: boolean;
  staticInFor?: boolean;
  staticProcessed?: boolean;
  hasBindings?: boolean;

  text?: string;
  attrs?: Array<{ name: string; value: any }>;
  props?: Array<{ name: string; value: string }>;
  plain?: boolean;
  pre?: true;
  ns?: string;

  component?: string;
  inlineTemplate?: true;
  transitionMode?: string | null;
  slotName?: string;
  slotTarget?: string;
  slotScope?: string;
  scopedSlots?: { [name: string]: ASTElement };

  ref?: string;
  refInFor?: boolean;

  if?: string;
  ifProcessed?: boolean;
  elseif?: string;
  else?: true;
  ifConditions?: ASTIfConditions;

  for?: string;
  forProcessed?: boolean;
  key?: string;
  alias?: string;
  iterator1?: string;
  iterator2?: string;

  staticClass?: string;
  classBinding?: string;
  staticStyle?: string;
  styleBinding?: string;
  events?: ASTElementHandlers;
  nativeEvents?: ASTElementHandlers;

  transition?: string | true;
  transitionOnAppear?: boolean;

  model?: {
    value: string;
    callback: string;
    expression: string;
  };

  directives?: Array<ASTDirective>;

  forbidden?: true;
  once?: true;
  onceProcessed?: boolean;
  wrapData?: (code: string) => string;
  wrapListeners?: (code: string) => string;

  // 2.4 ssr optimization
  ssrOptimizability?: number;

  // weex specific
  appendAsTree?: boolean;
};

declare type ASTExpression = {
  type: 2;
  expression: string;
  text: string;
  tokens: Array<string | Object>;
  static?: boolean;
  // 2.4 ssr optimization
  ssrOptimizability?: number;
};

declare type ASTText = {
  type: 3;
  text: string;
  static?: boolean;
  isComment?: boolean;
  // 2.4 ssr optimization
  ssrOptimizability?: number;
};
