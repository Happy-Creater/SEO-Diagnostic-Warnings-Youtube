// tslint:disable-next-line:class-name
export interface ytScore {
  [key: string]: ytScoreItem;
}

// tslint:disable-next-line:class-name
export interface ytScoreItem {
  channelTechnicalYoutubeScore: number;
  playlistTechnicalYoutubeScore: number;
  videosTechnicalYoutubeScore: number;
  globalTechnicalYouTubeScore: number;
}

// tslint:disable-next-line:class-name
export interface ytWarningProblem {
  date: string;
  nbrWarnings: number;
  nbrWarningsCumulated: number;
  nbrProblem: number;
  categories: warningCategory[];
}

// tslint:disable-next-line:class-name
export interface warningCategory {
  categoryName: string;
  nbrWarning: number;
  percentWarning: number;
  nbrProblem: number;
  percentProblem: number;
}
