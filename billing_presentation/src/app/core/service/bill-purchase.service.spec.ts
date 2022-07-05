import { TestBed } from '@angular/core/testing';

import { BillPurchaseService } from './bill-purchase.service';

describe('BillPurchaseService', () => {
  let service: BillPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillPurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
