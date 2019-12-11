import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimBackRouting } from './claim.back.routing'
import { ClaimService } from 'src/app/services/managers/claim.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {AllClaimBackComponent} from './all/all.claim.back';
import {EditClaimBackComponent} from './editClaim/edit.claim.back.component';
import {ShowClaimBackComponent} from './show/show.claim.back.component';
import {AddNoteClaimComponent} from './addNote/add.note.claim.component';
import {AllNotesClaimComponent} from './allNotes/all.notes.claim.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthIntercepter} from '../../services/security/auth.intercepter';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditNoteBackComponent} from './editNoteClaim/edit.note.claim.back.component';
import {AllClaimsResolverService} from '../../services/resolvers/all.claims.resolver.service';
import {ClaimDetailResolverService} from '../../services/resolvers/claim.detail.resolver.service';
import {ArraySortPipe} from '../../services/common/ArraySortPipe';

@NgModule({
  imports: [
    ClaimBackRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
  ],
  declarations: [
    AllClaimBackComponent,
    EditClaimBackComponent,
    ShowClaimBackComponent,
    AddNoteClaimComponent,
    AllNotesClaimComponent,
    EditNoteBackComponent,
    ArraySortPipe
  ],
  providers: [
    ClaimService,
    StorageService,
    AllClaimsResolverService,
    ClaimDetailResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepter,
      multi: true
    },
  ],
  entryComponents: [
    EditClaimBackComponent,
    EditNoteBackComponent
  ],
})
export class ClaimBackModule { }
