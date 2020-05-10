import { Component, OnInit } from '@angular/core';
import { BoxPackagesService } from "../../box-packages.service";

@Component({
  selector: 'app-contract-options',
  templateUrl: './contract-options.component.html',
  styleUrls: ['./contract-options.component.scss']
})
export class ContractOptionsComponent implements OnInit {
  contract_length = {};
  contractType:string = "";
  items = [];
  selectedItems = [];

  constructor(public boxPackagesService: BoxPackagesService) { }

  ngOnInit() {
    this.fillContractOpts();
    this.fillItems();
  }

  fillContractOpts(): void{
    this.boxPackagesService.getBoxPackages()
    .subscribe(boxes => {
      this.contract_length = boxes["contract_length"];
    })
  }

  fillItems():void {
    this.boxPackagesService.getBoxPackages()
    .subscribe(boxes => {
      this.items = boxes["items"];
    })
  }

  getPackages(ev: any){
    this.contractType = ev.target.value;
    this.selectedItems = this.items.filter(item => 
      item.prices["old_price_recurring"][this.contractType] 
      || item.prices["price_recurring"][this.contractType]);
    console.log(this.selectedItems);
  }
}
