import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { ThemeModule} from '../../@theme/theme.module';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    ThemeModule, StoreRoutingModule, FormsModule
  ],
  declarations: [StoreComponent],
  providers: [StoreService]
})
export class StoreModule { }
