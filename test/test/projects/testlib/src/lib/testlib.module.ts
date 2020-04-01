import { NgModule } from '@angular/core';
import { TestlibComponent } from './testlib.component';
import { LibraryModule } from 'library';



@NgModule({
  declarations: [TestlibComponent],
  imports: [
    LibraryModule
  ],
  exports: [TestlibComponent]
})
export class TestlibModule { }
