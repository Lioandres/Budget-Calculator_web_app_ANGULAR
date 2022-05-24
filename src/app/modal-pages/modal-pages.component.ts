import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pages',
  templateUrl: './modal-pages.component.html',
  styleUrls: ['./modal-pages.component.css']
})
export class ModalPagesComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
    
  }

 @Input() extra:string=''
}
