import { Routes } from '@angular/router';
import { PayApplicationDisplayComponent } from './components/pay-application-display/pay-application-display';
import { PayApplicationCreateComponent } from './components/pay-application-create/pay-application-create';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch:'full' },
    { path: 'dashboard', component: PayApplicationDisplayComponent },
    { path: 'CreateApplication', component: PayApplicationCreateComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch:'full' }
];
