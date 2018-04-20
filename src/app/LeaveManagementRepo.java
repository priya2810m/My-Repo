package com.aspire.leavemanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aspire.leavemanagement.model.LeaveManagement;
import com.aspire.leavemanagement.model.LeaveManagementDTO;

@Repository
public interface LeaveManagementRepo extends JpaRepository<LeaveManagement, String> {

	
	@Query(name = "getLeaveDetails", nativeQuery = true)
	List<LeaveManagementDTO> getLeaveDetails();
	
}
