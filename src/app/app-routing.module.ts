import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { AddnodeComponent } from './addnode/addnode.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { FileListComponent } from './content/file-list/file-list.component';
import { UpdateFileComponent } from './content/update-file/update-file.component';
import { UploadFileComponent } from './content/upload-file/upload-file.component';
import { ContratclientComponent } from './contratclient/contratclient.component';
import { ContratsListComponent } from './contrats-list/contrats-list.component';
import { DisplayfilesComponent } from './displayfiles/displayfiles.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'test', component: TestcomponentComponent },
  { path: 'update', component: UpdatedataComponent },
  { path: 'add/client', component: AdduserComponent },
  { path: 'add/contrat', component: AddcontratComponent },
  { path: 'show/listcontrat', component: ContratsListComponent },
  { path: 'show/listclient', component: ClientlistComponent },
  { path: 'show/clientcontrat', component: ContratclientComponent },
  { path: 'add/folder', component: AddnodeComponent },
  { path: 'show/file', component: DisplayfilesComponent },
  { path: 'upload/file', component: UploadFileComponent },
  { path: 'list/file', component: FileListComponent },
  { path: 'update/file', component: UpdateFileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
