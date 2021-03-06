import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LineItemsService } from '../line-item.service';
import { LineItem } from '../line-item.class';
import { PurchaseRequest } from '../../purchase-request/purchase-request.class';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent implements OnInit {
  lineitem: LineItem = new LineItem();
  constructor(
    private linesvc: LineItemsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  delete(): void {
    this.linesvc.remove(this.lineitem)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.router.navigateByUrl('/lineitems/list/' +this.lineitem.purchaseRequest.id);
    })
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.linesvc.get(id)
    .subscribe(resp => {
      console.log("LineItem: ", resp);
      this.lineitem = resp.data;
    })
  }
}