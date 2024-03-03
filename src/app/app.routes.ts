import {Routes} from '@angular/router';
import {BrokersListComponent} from "./brokers/brokers-list/brokers-list.component";
import {PageNotFoundComponent} from "./UI/page-not-found/page-not-found.component";
import {EmailsComponent} from "./products/emails/emails.component";
import {MarketReportComponent} from "./products/emails/market-report/market-report.component";
import {ProductsComponent} from "./brokers/products/products/products.component";

export const routes: Routes = [
  {path: 'ac-broker-manager', component: BrokersListComponent},
  {path: '', redirectTo: '/ac-broker-manager', pathMatch: 'full'},
  {
    path: 'emails',
    component: EmailsComponent,
    children: [{
      path: 'market-reports', // child route path
      component: MarketReportComponent, // child route component that the router renders
    },]
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [{
      path: 'market-reports', // child route path
      component: MarketReportComponent, // child route component that the router renders
    },]
  },
  {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];
