import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'card/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
