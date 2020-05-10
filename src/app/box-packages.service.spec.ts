import { TestBed } from '@angular/core/testing';

import { BoxPackagesService } from './box-packages.service';

describe('BoxPackagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxPackagesService = TestBed.get(BoxPackagesService);
    expect(service).toBeTruthy();
  });
});
