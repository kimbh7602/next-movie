interface IGenre {
  id: number;
  name: string;
}

interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ICountry {
  iso_3166: string;
  name: string;
}

interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: Array<IGenre>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ICompany>;
  production_countries: Array<ICountry>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<ILanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
