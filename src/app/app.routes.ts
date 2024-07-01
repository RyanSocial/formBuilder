import {Routes} from '@angular/router';
import {BrokersListComponent} from "./brokers/brokers-list/brokers-list.component";
import {PageNotFoundComponent} from "./UI/page-not-found/page-not-found.component";
import {EmailsComponent} from "./products/emails/emails.component";
import {ProductsComponent} from "./brokers/products/products/products.component";
import {RssTestComponent} from "./rss-test/rss-test.component";
import {RssComponent} from "./products/emails/rss/rss.component";
import {MarketReportsComponent} from "./products/emails/market-reports/market-reports.component";

export const routes: Routes = [
  {path: 'ac-broker-manager', component: BrokersListComponent},
  {path: '', redirectTo: '/ac-broker-manager', pathMatch: 'full'},
  {path: 'test-rss', component: RssTestComponent},
  {
    path: 'emails/:broker_id',
    component: EmailsComponent,
    children: [
      {
        path: 'rss-emails',
        component: RssComponent
      },
      {
        path: 'market-reports',
        component: MarketReportsComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: []
  },

  {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];
