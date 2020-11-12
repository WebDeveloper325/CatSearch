export type StringOrNull = string | null;

// TODO: this can be more typed
export type Countries = string[];

// TODO: We can have list of patterns or define them ourselves
export type Patterns = string[];

// TODO: We can have the specific coat type
export type Coats = string[];

/**
 * Cat Interface that shows which attributes cat can have
 */
export interface CatInterface {
  breed: string;
  country: StringOrNull;
  origin: StringOrNull;
  coat: StringOrNull;
  pattern: StringOrNull;
}

/**
 * Cat Query Interface that shows which queries cat controller should handle
 */
export interface CatQueryInterface {
  breed?: string;
  countries?: Countries;
  origin?: string;
  coats?: Coats;
  patterns?: Patterns;
  offset?: number;
  limit?: number;
}

/** Cat Result Interface that has the additional info called similarity */
export interface CatSearchResultInterface extends CatInterface {
  similarity: number;
}
