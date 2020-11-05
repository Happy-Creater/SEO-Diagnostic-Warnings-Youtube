'use strict';
import { environment } from '../../environments/environment';

export const loginUrl: string = environment.loginUrl;
export const OAUTH2_URL: string = environment.OAUTH2_URL;
export const OAUTH2_USERNAME: string = environment.OAUTH2_USERNAME;
export const OAUTH2_PASSWORD: string = environment.OAUTH2_PASSWORD;
export const BASE_SERVICE_URL: string = environment.BASE_SERVICE_URL;
export const SEA_VERSION: string = environment.SEA_VERSION;
export const MOBILE_WARNING_SERVICE_URL: string = "https://cluster-mobilewarning.monetoring.com";
export const API_CENTER_LOAD_BALANCE: string = "https://cluster-api-center.monetoring.com";
export const BACKGROUND_CENTER_LOAD_BALANCE: string = "https://cluster-background-center.monetoring.com";
export const API_M = "https://api.monetoring.com";

export const SERVICES = {
    "user_manager": `${BASE_SERVICE_URL}/WebServiceMonetoringUserManager`,
    "seo_warning": `${BASE_SERVICE_URL}/New2WebServiceSeoWarning`,
    "mobile_warning_excel": `${MOBILE_WARNING_SERVICE_URL}/WarningMobileExcelMicroservice`,
    "seo_staging_warning": `${BASE_SERVICE_URL}/New2WebServiceSeoStagingWarnings`,
    "setting_crawler": `${API_M}/New2WebServiceSettingCrawler`,
    "setting_warning": `${BASE_SERVICE_URL}/New2WebServiceSettingWarning`,
    "website_manager": `${BASE_SERVICE_URL}/WebServiceMonetoringWebsiteManager`,
    "SEA": `${API_M}/WebServiceMonetoringSEA/${SEA_VERSION}`,
    "resource_download": `${BASE_SERVICE_URL}/New2WebServiceResource`,
    "ranged_pages": `${BASE_SERVICE_URL}/New2WebServiceSeoGetRankPage`,
    "keyword_power": `${BASE_SERVICE_URL}/New2WebServiceSeoKeywordPower`,
    "webpage_status": `${BASE_SERVICE_URL}/New2WebServiceSeoWebPageStatus`,
    "Redirection301": `${BASE_SERVICE_URL}/New2WebServiceSeo301Redirection`,
    "DATA": `${BASE_SERVICE_URL}/WebServiceMonetoringDATA`,
    "data_report_webpagemon": `${BASE_SERVICE_URL}/New2WebServiceDataWebpageMonetoring`,
    "data_channels": `${BASE_SERVICE_URL}/New2WebServiceDataChannels`,
    "data_seo": `${API_M}/data-seo-webservice/RELEASE`,
    "data_studio": `${BASE_SERVICE_URL}/New2WebServiceDataStudio`,
    "data_ga_warnings": `${BASE_SERVICE_URL}/New2WebServiceDataGaWarnings`,
    "setting_keyword": `${BASE_SERVICE_URL}/New2WebServiceSettingKeywordIdentification`,
    "seo_detox": `${BASE_SERVICE_URL}/New2WebServiceSeoDetox`,
    "seo_backlink": `${BASE_SERVICE_URL}/New2WebServiceSeoBacklink`,
    "seo_keyword": `${BASE_SERVICE_URL}/New2WebServiceSeoKeyword`,
    "SEO": `${API_M}/New2WebServiceSeoOverview`,
    "setting_seo": `${BASE_SERVICE_URL}/New2WebServiceSettingSeo`,
    "benchmark_chart": `${API_M}/new2webserviceseobenchmarkchart/1.0`,
    "benchmark_ranking_compare": `${API_M}/new2webserviceseobenchmarkrankingcomparison/1.0`,
    "benchmark_instant": `${BASE_SERVICE_URL}/New2WebServiceSeoBenchmarkInstantBenchmark`,
    "manage_ip": `${BASE_SERVICE_URL}/New2WebServiceSettingIpAddress`,
    "manage_user": `${API_M}/New2WebServiceSettingUsers/1.0`,
    "manage_website": `${API_M}/New2WebServiceSettingWebSite`,
    "manage_email": `${BASE_SERVICE_URL}/New2WebServiceSettingEmail`,
    "seo_linkbuilding": `${API_M}/New2WebServiceSeoLinkBuilding`,
    "seo_opt_landing_pages": `${BASE_SERVICE_URL}/New2WebServiceSeoOptimizeLandingPages`,
    "seo_opt_landing_pages_topic_detection": `${BASE_SERVICE_URL}/New2WebServiceSeoOptimizeLandingPagesTopicDetection`,
    "seo_opt_new_pages": `${BASE_SERVICE_URL}/New2WebServiceSeoOptimizeNewPagesV2`,
    "setting_data": `${BASE_SERVICE_URL}/New2WebServiceSettingData`,
    "logs_overview": `${BASE_SERVICE_URL}/New2WebServiceLogsOverview`,
    "logs_botsanalysis": `${BASE_SERVICE_URL}/New2WebServiceLogsBotsAnalysis`,
    "export_content": `${BASE_SERVICE_URL}/New2WebServiceSeoExportContent`,
    "seo_innerlinks": `${BASE_SERVICE_URL}/New2WebServiceSeoInnerLinks`,
    "setting_server": `${BASE_SERVICE_URL}/New2WebServiceSettingServer`,
    "setting_warning_log": `${BASE_SERVICE_URL}/New2WebServiceSettingWarningLog`,
    "logs_warning": `${BASE_SERVICE_URL}/New2WebServiceLogWarning`,
    "generate_sitemap": `${BASE_SERVICE_URL}/New2WebServiceSeoToolboxGenerateSitemap`,
    "manage_calendar": `${BASE_SERVICE_URL}/New2WebServiceManageCalendar`,
    "content_compare": `${BASE_SERVICE_URL}/New2WebServiceSeoContentComparison`,
    "sitemap_url": `${BASE_SERVICE_URL}/New2WebServiceSeoToolboxSitemapURL`,
    "seo_validate_landing_pages": `${BASE_SERVICE_URL}/New2WebServiceSeoValidateLandingPages`,
    "staging_301_redirection": `${BASE_SERVICE_URL}/New2WebServiceSeoStaging301Redirection`,
    "simulator": `${BASE_SERVICE_URL}/New2WebServiceSeoRedirectionSimulator`,
    "topic_brand": `${BASE_SERVICE_URL}/New2WebServiceSeoOptimizeLandingPagesTopicDetectionBrand`,
    "global_view_score": `${BASE_SERVICE_URL}/New2WebServiceGlobalViewScore`,
    "search_in_code": `${BASE_SERVICE_URL}/New2WebServiceSeoToolboxSearchInCode`,
    "seo_piracy": `${BASE_SERVICE_URL}/New2WebServiceSeoPiracy`,
    "manage_questions_comments": `${BASE_SERVICE_URL}/New2WebServiceManageQuestionsComments`,
    "mobile_first_overview": `${BASE_SERVICE_URL}/New2WebServiceSeoMobileFirstOverview`,
    "mobile_first_mobile_friendly": `${BASE_SERVICE_URL}/New2WebServiceSeoMobileFirstMobileFriendly`,
    "seo_geoloc_rank": `${API_M}/New2WebServiceSeoGeolocRank`,
    "youtube_opt_rank_checker": `${BASE_SERVICE_URL}/RankCheckerYoutube`,
    "youtube_seo": `${API_M}/youtubeseo/1.0`,
    "youtube_seo_benchmark": `${API_M}/new2webserviceseoyoutubekeywordsbenchmark/1.0`,
    "youtube_excel": `${API_CENTER_LOAD_BALANCE}:1023/warningyoutubeexcelmicroservice`, //<<Have to add swagger first, before convert to API-M
    "youtube_opt_new_videos": `${BASE_SERVICE_URL}/New2WebServiceYoutubeOptOptimizeNewVideosV2`,
    "youtube_rank_checker": `${BASE_SERVICE_URL}/New2WebServiceYoutubeRankChecker`,
    "no_regression": `${API_M}/new2webserviceseoregression/1.0`,
    "logs": `${BASE_SERVICE_URL}/New2WebServiceLogs`,
    "seo_gmb": `${API_M}/new2webserviceseogooglemybusiness`,
    "setting_warning_gmb": `${BASE_SERVICE_URL}/New2WebServiceSettingWarningGMB`,
    "piracy_content_duplication_backend": `${API_M}/duplicate_external_text_backend/1.0`,
    "piracy_content_duplication_interface": `${API_M}/duplicate_external_text/1.0`,
    "new_benchmark_overview": `${API_M}/new2webservicedocseobenchmarkoverview/1.0`,
    "global_search_vision": `${API_M}/New2WebServiceGlobalSearchVision`,
    "seo_loading_time": `${API_M}/new2webserviceseoloadingtime/1.0`,
    "geoloc_rank_overview": `${API_M}/New2WebServiceGeolocRankOverview`,
    "guestblogging_frontend": `${API_M}/guestblogging-frontend/1.0`,
    "seo_opt_landing_pages_video": `${API_M}/Fractal_SEO`,
    "seo_opt_landing_pages_image": `${API_M}/Fractal_Image`,
    "seo_opt_landing_pages_question": `${API_M}/Fractal_Question`,
    "topic_detection_finding_components": `${API_M}/TopicDetectionFindingComponents/1.0`,
    "offline_comparison": `${API_M}/offline_comparison`,
    // "guestblogging_frontend": `${BASE_SERVICE_URL}/guestblogging-frontend`
};

export const MONETORING_TYPE: string = environment.MONETORING_TYPE; // test, demo, normal
