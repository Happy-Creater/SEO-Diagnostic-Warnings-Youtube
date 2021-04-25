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

// tslint:disable-next-line:class-name
export interface warningTable {
  warningTableList: warningTableItem[];
  hashCodeScanId: string;
}

// tslint:disable-next-line:class-name
export interface warningTableItem {
  tableName: string;
  severity: number;
  filename: string;
  keyReturnDetail: string;
  warningNumber: number;
  max: number;
  warningName: string;
  warningHelpMsg: string;
  recommendation: string;
  typeCategorie: string;
  status: number;
  category: string;
  evolution: number;
  trend: warningTrendItem[];
  details: string[];
  filterSetting: boolean;
  new: boolean;
}

// tslint:disable-next-line:class-name
export interface warningTrendItem {
  name: string;
  scanDate: string;
  value: number;
}

// tslint:disable-next-line:class-name
export interface pagedItem {
  severity: number;
  tableName: string;
  warningNumber: number;
  warningName: string;
  warningHelpMsg: string;
  recommendation: string;
  typeCategorie: string;
  status: number;
  category: string;
  evolution: number;
  new: boolean;
  trend: warningTrendItem[];
  details: string[];
  setBold: boolean;
  smallGraphOption: object;
  showRecomendation: boolean;
  percentage: any;
  filename: string;
  showDetails: boolean;
  hideRecommendation: boolean;
  hideDetails: boolean;
  problemTooltip: string;
}

// tslint:disable-next-line:class-name
export interface labelItem {
  prop: string;
  label: string;
  value: any;
  toggled: boolean;
}

// tslint:disable-next-line:class-name
export interface chartTypeItem {
  label: string;
  isActive: boolean;
}

