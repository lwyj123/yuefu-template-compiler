declare module 'he' {
    export function encode(str: string): string;
    export function decode(str: string): string;
    export function escape(str: string): string;
    export function unescape(str: string): string;
  }