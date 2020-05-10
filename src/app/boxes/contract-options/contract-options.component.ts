import { Component, OnInit } from '@angular/core';
import { BoxPackagesService } from "../../box-packages.service";

@Component({
  selector: 'app-contract-options',
  templateUrl: './contract-options.component.html',
  styleUrls: ['./contract-options.component.scss']
})
export class ContractOptionsComponent implements OnInit {
  contract_length = {};

  constructor(public boxPackagesService: BoxPackagesService) { }

  ngOnInit() {
    this.fillContractOpts();
  }

  fillContractOpts(): void{
    this.boxPackagesService.getBoxPackages()
    .subscribe(boxes => {
      this.contract_length = boxes["contract_length"];
    })
  }
}
