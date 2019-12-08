import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Claim} from '../../../models/Claim';
import {ClaimService} from '../../../services/managers/claim.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteClaim} from '../../../models/NoteClaim';
import {StorageService} from '../../../services/security/storage.service';
import {NotesClaimService} from '../../../services/managers/notesClaim.service';
import {EditNoteBackComponent} from "../editNoteClaim/edit.note.claim.back.component";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'all-notes-claim-back',
  templateUrl: './all.notes.claim.back.component.html',
  styleUrls: ['./all.notes.claim.back.component.css']
})
export class AllNotesClaimComponent implements OnInit {
  @Input()
  notes;
  @Output()
  sendDeleteRequest = new EventEmitter();
  userLogged = StorageService.get('currentUser').userId;

  constructor(private notesClaimService: NotesClaimService, private  modalService: NgbModal) {

  }


  ngOnInit() {
  }

  deleteNote(n: NoteClaim) {
    this.sendDeleteRequest.emit(n);
  }

  editNote(n: NoteClaim) {
    const modalRef = this.modalService.open(EditNoteBackComponent);
    modalRef.componentInstance.note = n;
  }
}
