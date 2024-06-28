export interface Film {
  data: { mainSearch: MainSearch };
}

export interface MainSearch {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  entity: Entity;
}

interface Entity {
  episodes: null;
  id: string;
  originalTitleText: TitleText;
  primaryImage: Image;
  principalCredits: Credit[];
  releaseDate: ReleaseDate;
  releaseYear: YearRange;
  series: null;
  titleText: TitleText;
  titleType: TitleType;
}

interface TitleText {
  text: string;
  isOriginalTitle: boolean;
}

interface Image {
  __typename: string;
  id: string;
  url: string;
  height: number;
  width: number;
}

interface Credit {
  // Define properties of Credit here
}

interface ReleaseDate {
  __typename: string;
  month: number;
  day: number;
  year: number;
  country: any; // Define country type if available
}

interface YearRange {
  __typename: string;
  year: number;
  endYear: number | null;
}

interface TitleType {
  __typename: string;
  id: string;
}
