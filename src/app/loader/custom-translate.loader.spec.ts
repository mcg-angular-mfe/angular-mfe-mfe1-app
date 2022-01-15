import { TestBed } from '@angular/core/testing';

import { CustomTranslateLoader } from './custom-translate.loader';

describe('CustomTranslateLoader', () => {
  let service: CustomTranslateLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTranslateLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
