
declare type SFCBlock = {
    type: string;
    content: string;
    attrs: {
        [attribute:string]: string
    };
    start?: number;
    end?: number;
    lang?: string;
    src?: string;
    scoped?: boolean;
    module?: string | boolean;
  };

declare type SFCDescriptor = {
    template?: SFCBlock;
    script?: SFCBlock;
    styles: Array<SFCBlock>;
    customBlocks: Array<SFCBlock>;
};
