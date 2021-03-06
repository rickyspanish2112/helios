import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeliosShellComponent } from './helios-shell.component';

import { MaterialModule } from '../shared/materialmodule.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MainShellComponent } from '../helios-shell/components/main-shell/main-shell.component';
import { SidenavComponent } from '../helios-shell/components/sidenav/sidenav.component';
import { ToolbarComponent } from '../helios-shell/components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from './listservice.service';
import { MAT_DATE_LOCALE } from '@angular/material';

import { DeclarationShellComponent } from './components/main-shell/containers/declaraion-shell/declaration-shell.component';
import { DeclarationTypeComponent } from './components/main-shell/components/declaration/declaraion-type/declaration-type.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from '../helios-shell/components/main-shell/components/declaration/declaraion-type/state/declaration-type.reducer';
import { DeclarationTypeEffects } from './components/main-shell/components/declaration/declaraion-type/state/declaraion-type.effects';
import { DeclarationPartyComponent } from './components/main-shell/components/declaration/declaration-party/declaration-party.component';
// tslint:disable-next-line: max-line-length
import { AccountComponent } from './components/main-shell/components/declaration/declaration-controls/declaraion-party-account/account.component';
// tslint:disable-next-line: max-line-length
import { DeclarationPartyTabContentComponent } from './components/main-shell/components/declaration/declaration-party/declaration-party-tab-content/declaration-party-tab-content.component';
// tslint:disable-next-line:max-line-length
import { DeclarationPartyAccountAddressComponent } from './components/main-shell/components/declaration/declaration-controls/declaration-party-account-address/declaration-party-account-address.component';

const routes: Routes = [
  { path: '', component: HeliosShellComponent,
    children: [
      { path: 'declaraion', component: DeclarationShellComponent },
      { path: '', component: MainShellComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    HeliosShellComponent,
    MainShellComponent,
    SidenavComponent,
    ToolbarComponent,
    DeclarationShellComponent,
    DeclarationTypeComponent,
    DeclarationPartyComponent,
    AccountComponent,
    DeclarationPartyTabContentComponent,
    DeclarationPartyAccountAddressComponent
  ],

    imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
   RouterModule.forChild(routes),
   StoreModule.forFeature('declarationType', reducer),
   EffectsModule.forFeature(
    [ DeclarationTypeEffects ]
  ),

  ],
  providers: [
    ListService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
})
export class HeliosShellModule { }
