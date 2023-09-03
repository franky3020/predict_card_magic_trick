import { TestBed } from '@angular/core/testing';

import { VersionCheckService } from './version-check.service';

describe('VersionCheckService', () => {

  it('isV1GreateThanV2', () => {

    const t1Result = VersionCheckService.isV1GreateThanV2('1.2.3', '1.2');
    expect(t1Result).toBe(true);

    const t2Result = VersionCheckService.isV1GreateThanV2('1.2.3', '1.2.2');
    expect(t2Result).toBe(true);

    const t3Result = VersionCheckService.isV1GreateThanV2('50', '20');
    expect(t3Result).toBe(true);

    const t4Result = VersionCheckService.isV1GreateThanV2('1.2.3', '1.3');
    expect(t4Result).toBe(false);

    const t5Result = VersionCheckService.isV1GreateThanV2('1.2.3', '1.3.3');
    expect(t5Result).toBe(false);
    
  });

  
});
