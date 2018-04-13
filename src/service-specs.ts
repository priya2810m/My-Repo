import { TestBed, inject } from '@angular/core/testing';

import { LeaveManagementServiceService } from './leave-management-service.service';

describe('LeaveManagementServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveManagementServiceService]
    });
  });

  it('should be created', inject([LeaveManagementServiceService], (service: LeaveManagementServiceService) => {
    expect(service).toBeTruthy();
  }));
});
