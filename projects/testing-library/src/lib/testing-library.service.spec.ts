import { TestBed } from '@angular/core/testing';

import { TestingLibraryService } from './testing-library.service';

describe('TestingLibraryService', () => {
  let service: TestingLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
