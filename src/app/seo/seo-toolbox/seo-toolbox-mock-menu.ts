export const TOOLBOX_MOCK_MENU: ToolboxMenu[] = [
    {
        routerLink: '../toolbox-comparison',
        id: 'toolbox-comparison',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_content.png',
        h1: 'SEO.Content_comparison',
        p: 'SEO.Find_the_similarity_between_your_texts'
        // h1: 'CONTENT COMPARISON',
        // p: 'Find the similarity between your texts'
    },
    {
        routerLink: '../toolbox-export',
        id: 'toolbox-export',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_export.png',
        h1: 'SEO.Export_content',
        p: 'SEO.Export_the_title_meta_description_and_content_of_a_URL'
        // h1: 'EXPORT CONTENT',
        // p: 'Export the title, meta-description and content of a URL'
    },
    {
        routerLink: '../toolbox-webpage',
        id: 'toolbox-webpage',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_status.png',
        h1: 'SEO.WEBPAGE_STATUS',
        p: 'SEO.Check_the_status_of_a_URL'
        // h1: 'WEBPAGE STATUS',
        // p: 'Check the status of a URL'
    },
    {
        routerLink: '../toolbox-search',
        id: 'toolbox-search',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_code.png',
        h1: 'SEO.SEARCH_IN_CODE',
        p: 'SEO.Search_in_the_html_code_of_your_webpages'
        // h1: 'SEARCH IN CODE',
        // p: 'Search in the html code of your webpages'
    },
    {
        routerLink: '../toolbox-keyword-power',
        id: 'toolbox-keyword',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_keyword.png',
        h1: 'SEO.Keyword_power',
        p: 'SEO.Find_the_most_relevant_landing_pages_for_a_keyword'
        // h1: 'KEYWORD POWER',
        // p: 'Find the most relevant landing pages for a keyword'
    },
    {
        routerLink: '../toolbox-ranked',
        id: 'toolbox-ranked',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_ranked.png',
        h1: 'SEO.Get_ranked_pages',
        p: 'SEO.Check_the_SERP_data_for_a_keyword'
        // h1: 'GET RANKED PAGES',
        // p: 'Check the SERP data for a keyword'
    },
    {
        routerLink: '../toolbox-generate-sitemap',
        id: 'toolbox-generate-sitemap',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_sitemap.png',
        h1: 'SEO.GENERATE_SITEMAP',
        p: 'SEO.Generate_a_Sitemap_manually_and_or_automatically'
        // h1: 'GENERATE SITEMAP',
        // p: 'Generate a Sitemap manually and/or automatically'
    },
    {
        routerLink: '../toolbox-sitemap-urls',
        id: 'toolbox-sitemap-url',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_sitemap_url.png',
        h1: 'SEO.SITEMAP_URLS',
        p: 'SEO.Retrieve_the_URLs_from_a_Sitemap'
        // h1: 'SITEMAP URLS',
        // p: 'Retrieve the URLs from a Sitemap'
    },
    {
        routerLink: '../toolbox-redirection',
        id: 'toolbox-redirection',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_redirection.png',
        h1: 'SEO.REDIRECTION_SIMULATOR',
        p: 'SEO.Generate_right_syntax_for_redirection'
        // h1: 'REDIRECTION SIMULATOR',
        // p: 'Generate right syntax for redirection'
    },
    {
        routerLink: '../toolbox-301',
        id: 'toolbox-301',
        class: 'col-lg-4 col-sm-6 col-md-4 col-xs-12 width-content toolbox',
        src: './assets/images/tool_301.png',
        h1: 'SEO.301_REDIRECTION',
        p: 'SEO.Create_and_test_your_htaccess_file'
        // h1: '301 REDIRECTION',
        // p: 'Create and test your htaccess file'
    }

]

export class ToolboxMenu {
    routerLink: string;
    id: string;
    class: string;
    src: string;
    h1: string;
    p: string;
}