import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertsComponent } from './events/alerts.component';
import { RaidComponent } from './events/event-types/raid/raid.component';
import { FollowComponent } from './events/event-types/follow/follow.component';
import { SubComponent } from './events/event-types/sub/sub.component';
import { CheerComponent } from './events/event-types/cheer/cheer.component';
import { ResubComponent } from './events/event-types/resub/resub.component';
import { GiftsubComponent } from './events/event-types/giftsub/giftsub.component';
import { GiftbombComponent } from './events/event-types/giftbomb/giftbomb.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    RaidComponent,
    FollowComponent,
    SubComponent,
    CheerComponent,
    ResubComponent,
    GiftsubComponent,
    GiftbombComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
