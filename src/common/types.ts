export type Language = 'en' | 'pt-BR';
export type WindowBound = {
  width: number;
  height: number;
};

export interface StoreInterface {
  language: Language;
  windowBounds: WindowBound;
}
