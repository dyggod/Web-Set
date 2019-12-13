import { TestBed } from '@angular/core/testing';

import { CommonAxiosService } from './common-axios.service';

describe('CommonAxiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonAxiosService = TestBed.get(CommonAxiosService);
    expect(service).toBeTruthy();
  });
});
