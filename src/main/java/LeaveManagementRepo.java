package com.aspire.leavemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aspire.leavemanagement.model.LeaveManagement;

@Repository
public interface LeaveManagementRepo extends JpaRepository<LeaveManagement, String> {

}
