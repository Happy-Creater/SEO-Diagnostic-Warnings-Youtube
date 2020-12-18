import { SeoYoutubeComponent } from "./seo-youtube.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SeoYoutubeOverviewComponent } from "./seo-youtube-overview/seo-youtube-overview.component";
import { SeoYoutubeBenchmarkComponent } from "app/seo/seo-youtube/seo-youtube-benchmark/seo-youtube-benchmark.component";
import { SeoYoutubeOptimizationNewVideosOptComponent } from "app/seo/seo-youtube/seo-youtube-optimization/seo-youtube-optimization-new-videos-opt/seo-youtube-optimization-new-videos-opt.component";
import { SeoYoutubeWarningsComponent } from "app/seo/seo-youtube/seo-youtube-warnings/seo-youtube-warnings.component";
import { SeoYoutubeKeywordRankCheckerComponent } from "./seo-youtube-keyword-rank-checker/seo-youtube-keyword-rank-checker.component";


const routes = [
	{
		path: '', component: SeoYoutubeComponent,
		children: [
			{ path: 'youtube-overview', component: SeoYoutubeOverviewComponent },
			{ path: 'youtube-warnings', component: SeoYoutubeWarningsComponent },
			{ path: 'youtube-keywords-rank-checker', component: SeoYoutubeKeywordRankCheckerComponent },
			{ path: 'youtube-optimization-new-videos-opt', component: SeoYoutubeOptimizationNewVideosOptComponent },
			{ path: 'youtube-benchmark', component: SeoYoutubeBenchmarkComponent },
			{ path: '**', redirectTo: 'youtube-overview' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SeoYoutubeRoutingModule { }
