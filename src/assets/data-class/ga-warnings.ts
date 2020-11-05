export class GaWarningsData {

    CATEGORY_CONFIGURATION = 'Configuration';
    CATEGORY_DATA_INTEGRITY = 'Data integrity';
    CATEGORY_LEGAL = 'Legal';
    CATEGORY_TRACKING_CODE = 'Tracking code';

    public warningMappingData = {
        duplicate_transactions_warning: { name: "Duplicate transactions", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        pii_in_url_warning: { name: "Personally identifiable information (PII) in URLs", severity: 9, category: this.CATEGORY_LEGAL, warningHelpMsg: "" },
        search_engines_affecting_data_warning: { name: "Search engines affecting the data", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        custom_alerts_warning: { name: "Custom alerts not created", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        content_grouping_disabled_warning: { name: "Content grouping disabled", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        goal_conversion_issues_warning: { name: "Goal conversion issues", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        smart_goal_not_available_warning: { name: "Smart goal not available", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        smart_goal_disabled_warning: { name: "Smart goal disabled", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        appearance_of_a_traffic_peak_warning: { name: "Appearance of a traffic peak", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        slash_and_SlashIndexHtml_tracked_separately_warning: { name: "'/' and '/index.html' tracked separately", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        enhanced_ecommerce_disabled_warning: { name: "Enhanced ecommerce disabled", severity: 9, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        enhanced_ecommerce_steps_not_created_warning: { name: "Enhanced ecommerce steps not created", severity: 9, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        ecommerce_conversion_issues_warning: { name: "Ecommerce conversion issues", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        absence_of_annotations_warning: { name: "Absence of annotations", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        site_search_disabled_warning: { name: "Site search disabled", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        redundant_views_warning: { name: "Redundant views", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        bot_filtering_disabled_warning: { name: "Bot filtering disabled", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        misconfigured_site_search_warning: { name: "Misconfigured site search", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        missing_views_warning: { name: "Missing views", severity: 9, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        google_ads_manual_tagging_warning: { name: "Google Ads manual tagging", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        audiences_not_configured_warning: { name: "Audiences not configured", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        absence_of_sessions_on_a_property_warning: { name: "Absence of sessions on a property", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        incorrect_content_grouping_warning: { name: "Incorrect content grouping", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        incorrect_time_zone_warning: { name: "Incorrect time zone", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        custom_channel_grouping_not_configured_warning: { name: "Custom channel grouping not configured", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        enable_demographics_and_interests_reports_warning: { name: "Enable Demographics & Interests Reports", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        internal_agency_ips_not_filtered_warning: { name: "Internal / Agency IP’s not filtered", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        url_rewriting_unrealized_warning: { name: "URL rewriting unrealized", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        industry_category_not_specified_warning: { name: "Industry category not specified", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        no_link_search_console_warning: { name: "No link Search Console", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        important_number_of_notset_source_warning: { name: "Important number of (not set) for the dimension « Source »", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        issues_with_discrepancies_between_google_ads_clicks_and_analytics_sessions_warning: { name: "Issues with discrepancies between Google Ads clicks and Analytics sessions", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_other_channelgrouping_warning: { name: "Important number of (Other) for the dimension « Channel grouping »", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_hostname_warning: { name: "Important number of (not set) for the dimension « Hostname »", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_landingpage_warning: { name: "Important number of (not set) for the dimension « Landing page »", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        no_link_adwords_warning: { name: "No link AdWords", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        high_monthly_hit_volume_warning: { name: "High monthly hit volume for the property", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        view_without_objectives_warning: { name: "View without objectives", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        goal_funnels_not_specified_warning: { name: "Goal funnels not specified", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        self_referrals_warning: { name: "Self-referrals", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        high_direct_traffic_warning: { name: "High direct traffic", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        social_referrals_warning: { name: "Social referrals", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        email_referrals_warning: { name: "Email referrals", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        property_without_raw_data_warning: { name: "Property without raw data", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        hostname_spam_warning: { name: "Hostname spam", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_campaigns_warning: { name: "Duplicate campaigns", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        no_campaign_tagging_warning: { name: "No campaign tagging", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        duplicate_page_urls_with_trailing_slash_warning: { name: "Duplicate Page URLs with Trailing Slash", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        absence_of_sessions_on_a_view_warning: { name: "Absence of sessions on a view", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        high_bounces_rates_warning: { name: "High bounce rates", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        low_bounces_rates_warning: { name: "Low bounce rates", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        user_id_disabled_warning: { name: "User-ID disabled", severity: 5, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        payment_gateway_referrals_warning: { name: "Payment gateway referrals", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        data_not_collected_for_rmktg_or_ad_warning: { name: "Data not collected for remarketing or advertising", severity: 7, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        duplicate_sources_warning: { name: "Duplicate sources", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_hostname_warning: { name: "Duplicate hostname", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_search_keyword_warning: { name: "Duplicate search keyword (site search)", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_event_category_warning: { name: "Duplicate event category", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_event_action_warning: { name: "Duplicate event action", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_event_label_warning: { name: "Duplicate event label", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        duplicate_mediums_warning: { name: "Duplicate mediums", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        disabled_ecommerce_warning: { name: "Disabled ecommerce", severity: 9, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        no_events_configured_warning: { name: "No events configured", severity: 9, category: this.CATEGORY_CONFIGURATION, warningHelpMsg: "" },
        important_number_of_notset_productname_warning: { name: "Important number of (not set) for the dimension « Product »", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_productlistname_warning: { name: "Important number of (not set) for the dimension « Product list name »", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_medium_warning: { name: "Important number of (not set) for the dimension « Medium »", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_eventcategory_warning: { name: "Important number of (not set) for the dimension « Event category »", severity: 9, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_eventaction_warning: { name: "Important number of (not set) for the dimension « Event action »", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        important_number_of_notset_eventlabel_warning: { name: "Important number of (not set) for the dimension « Event label »", severity: 7, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        website_accessed_using_both_www_and_nonwww: { name: "Website accessed using both www. and non www.", severity: 5, category: this.CATEGORY_DATA_INTEGRITY, warningHelpMsg: "" },
        tag_manager_not_present_warning: { name: "Tag Manager not present or incomplete", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        tag_manager_script_not_placed_in_the_head_warning: { name: "Tag Manager (script) not placed in the <head>", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        tag_manager_no_script_not_placed_in_the_body_warning: { name: "Tag Manager (noscript) not placed in the <body>", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        no_triggering_of_default_events_gtm_warning: { name: "No triggering of default events (GTM)", severity: 7, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        sends_data_to_ga_without_gtm_warning: { name: "Sends data to GA without GTM", severity: 7, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        late_launch_of_ga_script_warning: { name: "Late launch of GA script", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        old_version_of_the_ga_script_warning: { name: "Old version of the GA script", severity: 7, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        doubleclick_not_present_warning: { name: "DoubleClick not present", severity: 7, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        unsecured_transmission_of_data_warning: { name: "Unsecured transmission of data", severity: 9, category: this.CATEGORY_LEGAL, warningHelpMsg: "" },
        ip_addresses_not_anonymized_warning: { name: "IP addresses not anonymized", severity: 9, category: this.CATEGORY_LEGAL, warningHelpMsg: "" },
        improper_ga_cookies_warning: { name: "Improper GA cookies", severity: 9, category: this.CATEGORY_LEGAL, warningHelpMsg: "" },
        multiple_tags_warning: { name: "Multiple tags", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        ga_tag_not_found_warning: { name: "GA tag not found", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" },
        ga_tag_not_found_mobile_warning: { name: "GA tag not found on the mobile", severity: 9, category: this.CATEGORY_TRACKING_CODE, warningHelpMsg: "" }
    };

    evaluateData() {
        let warnings = [];
        for (let warning in this.warningMappingData) {
            warnings.push({
                key: warning,
                name: this.warningMappingData[warning].name,
                severity: this.warningMappingData[warning].severity,
                warningHelpMsg: this.warningMappingData[warning].warningHelpMsg,
                category: this.warningMappingData[warning].category
            });
        }
        warnings.sort(function (a, b) {
            return b.severity - a.severity;
        });
        return warnings;
    }

}