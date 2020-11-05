import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "./profile.component";

const routes = [
    {
        path: '', component: ProfileComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
            { path: '**', redirectTo: 'profile' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
