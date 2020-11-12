import { ALL } from './constants';
import { StringOrNull, CatInterface, CatQueryInterface } from './types';

// TODO: Enhance the algorithm to calculate the similarity
// LOGIC improve: We need to calculate the weight more specifically
export class Cat {
  private _breed = '';
  private _country: StringOrNull;
  private _origin: StringOrNull;
  private _coat: StringOrNull;
  private _pattern: StringOrNull;

  /**
   * @constructor
   * @param cat - CatInterface
   */
  constructor(cat: CatInterface) {
    this._breed = cat.breed;
    this._country = cat.country;
    this._origin = cat.origin;
    this._coat = cat.coat;
    this._pattern = cat.pattern;
  }

  /**
   * @function findMatches
   * @param query - CatQueryInterface
   * @return similarity
   */
  public findMatches(query: CatQueryInterface): number {
    let similarity = 0;

    // If there is a match between breed, that's really good priority
    if (
      query.breed &&
      this._breed.toLowerCase().includes(query.breed.toLowerCase())
    ) {
      similarity += 5;
      // If the breed is perfect match, then it's the highest priority
      if (this._breed === query.breed) {
        similarity += 10;
      }
    }

    // If there is all in the countries query, then we can give only 1 similarity
    if (
      query.countries &&
      query.countries.some((country) => country.toLowerCase().includes(ALL))
    ) {
      similarity += 1;
    } else if (
      query.countries &&
      this._country &&
      query.countries.some((country) => country === this._country)
    ) {
      similarity += 3;
    }

    // If there is all in the patterns query, then we can give only 1 similarity
    if (
      query.patterns &&
      query.patterns.some((pattern) => pattern.toLowerCase().includes(ALL))
    ) {
      similarity += 1;
    }
    if (
      query.patterns &&
      this._pattern &&
      query.patterns.some((pattern) => pattern === this._pattern)
    ) {
      similarity += 2;
    }

    // If the origin is a match, we can give some similarity
    if (
      query.origin &&
      this._origin &&
      this._origin.toLowerCase().includes(query.origin.toLowerCase())
    ) {
      similarity += 2;
      // If the origin is good match, then we can give more priority
      if (this._origin === query.origin) {
        similarity += 2;
      }
    }

    // If there is a match between coat, we can give some priority
    if (
      query.coat &&
      this._coat &&
      this._coat.toLowerCase().includes(query.coat.toLowerCase())
    ) {
      similarity += 2;
      // If the coat is good match, then we can give more priority
      if (this._coat === query.coat) {
        similarity += 2;
      }
    }
    return similarity;
  }

  /**
   * @function setBreed
   * @param breed - string
   * @return Cat
   */
  public setBreed(breed: string): Cat {
    this._breed = breed;
    return this;
  }

  /**
   * @function setCountry
   * @param country - string or null
   * @return Cat
   */
  public setCountry(country: StringOrNull): Cat {
    this._country = country;
    return this;
  }

  /**
   * @function setOrigin
   * @param origin - string or null
   * @return Cat
   */
  public setOrigin(origin: StringOrNull): Cat {
    this._origin = origin;
    return this;
  }

  /**
   * @function setCoat
   * @param coat - string or null
   * @return Cat
   */
  public setCoat(coat: StringOrNull): Cat {
    this._coat = coat;
    return this;
  }

  /**
   * @function setPattern
   * @param pattern - string or null
   * @return Cat
   */
  public setPattern(pattern: StringOrNull): Cat {
    this._pattern = pattern;
    return this;
  }

  /**
   * @function toObject: converting CatModel to CatInterface
   * @return CatInterface
   */
  public toObject(): CatInterface {
    return {
      breed: this._breed,
      country: this._country,
      origin: this._origin,
      coat: this._coat,
      pattern: this._pattern,
    };
  }
}

/**
 * @class CatCollection: array of cats
 */
export class CatCollection {
  private _cats = [] as Cat[];

  constructor(cats: CatInterface[]) {
    this._cats = cats.map((cat) => new Cat(cat));
  }

  /** @return Cat[] */
  get cats(): Cat[] {
    return this._cats;
  }
}
