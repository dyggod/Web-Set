import { TestBed } from '@angular/core/testing';

import { CommonStoreService } from './common-store.service';

describe('CommonStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonStoreService = TestBed.get(CommonStoreService);
    expect(service).toBeTruthy();
  });
});
