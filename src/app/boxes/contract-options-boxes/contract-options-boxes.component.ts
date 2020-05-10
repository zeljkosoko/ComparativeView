import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contract-options-boxes',
  templateUrl: './contract-options-boxes.component.html',
  styleUrls: ['./contract-options-boxes.component.scss']
})
export class ContractOptionsBoxesComponent implements OnInit {
  @Input() inputMB:any;
  @Input() inputCLO:any;
  @Input() inputCT:any;
  @Input() iPromoText:string;

  constructor() { }

  ngOnInit() {
  }

}