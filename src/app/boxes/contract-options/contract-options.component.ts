import { Component, OnInit } from '@angular/core';
import { BoxPackagesService } from "../../box-packages.service";

@Component({
  selector: 'app-contract-options',
  templateUrl: './contract-options.component.html',
  styleUrls: ['./contract-options.component.scss']
})
export class ContractOptionsComponent implements OnInit {
  mainBox:Object = {};
  promoText:string = "";
  contract_length = {};
  contractType:string = "";
  items = [];
  selectedItems = [];

  constructor(public boxPackagesService: BoxPackagesService) { }

  ngOnInit() {
    this.getMainBox();
    this.fillContractOpts();
    this.fillItems();
    this.getPromoText();    
  }

  getMainBox():void {
    this.boxPackagesService.getBoxPackages()
    .subscribe(box => {
      this.mainBox = box;
    });
  }

  getPromoText(): void {
    this.boxPackagesService.getBoxPackages()
     .subscribe(boxes => {
       this.promoText = boxes["promo_text"];
     });    
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
  }
}
