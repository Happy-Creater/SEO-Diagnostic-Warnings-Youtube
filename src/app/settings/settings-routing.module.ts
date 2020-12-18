import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { SettingsCrawlerComponent } from './settings-crawler/settings-crawler.component';
import { SettingsComponent } from './settings.component';
import { SettingsSetComponent } from "./settings-set/settings-set.component";
import { SettingsKeywordsComponent } from "./settings-keywords/settings-keywords.component";
import { SettingsWarningsComponent } from "./settings-warnings/settings-warnings.component";
import { SettingsTutorialsComponent } from "./settings-tutorials/settings-tutorials.component";
import { SettingsConfigurationsComponent } from "./settings-configurations/settings-configurations.component";
import { SettingsConfigurationsWebsiteComponent } from './settings-configurations/settings-configurations-website/settings-configurations-website.component';
import { SettingsConfigurationsEmailComponent } from './settings-configurations/settings-configurations-email/settings-configurations-email.component';
import { SettingsConfigurationsCampignsComponent } from './settings-configurations/settings-configurations-campigns/settings-configurations-campigns.component';
import { SettingsConfigurationsIpAddressComponent } from './settings-configurations/settings-configurations-ip-address/settings-configurations-ip-address.component';
import { SettingsConfigurationsUsersComponent } from './settings-configurations/settings-configurations-users/settings-configurations-users.component';
import { SettingsConfigurationsServerComponent } from './settings-configurations/settings-configurations-server/settings-configurations-server.component';
const routes = [
    {
        path: '', component: SettingsComponent,
        children: [
            { path: '', redirectTo: 'settings', pathMatch: 'full' },
            {
                path: 'settings', 
                 children: [
                    {
                        path: '',
                        component: SettingsSetComponent
                    }
                ]
            },

            { path: 'crawler', component: SettingsCrawlerComponent },
            { path: 'keywords', component: SettingsKeywordsComponent },
            { path: 'warnings', component: SettingsWarningsComponent },
            { path: 'tutorials', component: SettingsTutorialsComponent },
            { path: 'configurations', component: SettingsConfigurationsComponent },
            { path: 'configurations-website', component: SettingsConfigurationsWebsiteComponent },
            { path: 'configurations-email', component: SettingsConfigurationsEmailComponent },
            { path: 'configurations-campaigns', component: SettingsConfigurationsCampignsComponent },
            { path: 'configurations-ip-address', component: SettingsConfigurationsIpAddressComponent },
            { path: 'configurations-users', component: SettingsConfigurationsUsersComponent },
            { path: 'configurations-users-form', redirectTo: 'configurations-users', pathMatch: 'full' },
            { path: '**', redirectTo: 'settings' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
