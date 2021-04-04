'use strict';
import { environment } from '../../environments/environment';

export const loginUrl: string = environment.loginUrl;
export const OAUTH2_URL: string = environment.OAUTH2_URL;
export const OAUTH2_USERNAME: string = environment.OAUTH2_USERNAME;
export const OAUTH2_PASSWORD: string = environment.OAUTH2_PASSWORD;
export const BASE_SERVICE_URL: string = environment.BASE_SERVICE_URL;
export const SEA_VERSION: string = environment.SEA_VERSION;
export const API_M = 'https://api.monetoring.com';

export const SERVICES = {
  'user_manager': `${BASE_SERVICE_URL}/WebServiceMonetoringUserManager`,
  'setting_crawler': `${API_M}/New2WebServiceSettingCrawler`,
  'website_manager': `${BASE_SERVICE_URL}/WebServiceMonetoringWebsiteManager`,
  'SEA': `${API_M}/WebServiceMonetoringSEA/${SEA_VERSION}`,
  'resource_download': `${BASE_SERVICE_URL}/New2WebServiceResource`,
  'DATA': `${BASE_SERVICE_URL}/WebServiceMonetoringDATA`,
  'seo_backlink': `${BASE_SERVICE_URL}/New2WebServiceSeoBacklink`,
  'manage_website': `${API_M}/New2WebServiceSettingWebSite`,
  'seo_opt_landing_pages': `${BASE_SERVICE_URL}/New2WebServiceSeoOptimizeLandingPages`,
  'setting_server': `${BASE_SERVICE_URL}/New2WebServiceSettingServer`,
  'manage_calendar': `${BASE_SERVICE_URL}/New2WebServiceManageCalendar`,
  'manage_questions_comments': `${BASE_SERVICE_URL}/New2WebServiceManageQuestionsComments`,
  'logs': `${BASE_SERVICE_URL}/New2WebServiceLogs`,
  'seo_gmb': `${API_M}/new2webserviceseogooglemybusiness`,
  'piracy_content_duplication_interface': `${API_M}/duplicate_external_text/1.0`,
  'global_search_vision': `${API_M}/New2WebServiceGlobalSearchVision`,
  'offline_comparison': `${API_M}/offline_comparison`,
  'manage_user': `${API_M}/New2WebServiceSettingUsers/1.0`,
  'youtube_seo_warning': `${API_M}/youtubeseowarning/1.0/new`
};

export const MONETORING_TYPE: string = environment.MONETORING_TYPE; // test, demo, normal
