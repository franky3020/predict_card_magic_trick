import { TestBed } from '@angular/core/testing';

import { CordovaPluginService } from './cordova-plugin.service';

describe('CordovaPluginService', () => {
  let service: CordovaPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CordovaPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
