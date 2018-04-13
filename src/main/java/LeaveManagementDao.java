package com.leavemanagement.dao;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leavemanagement.model.LeaveManagement;
import com.leavemanagement.repository.LeaveManagementRepo;

@Service
public class LeaveManagementDao {
	@Autowired
	LeaveManagementRepo leaveManagementRepository;

	public void addLeave(LeaveManagement leaveManagement) {
		System.out.println("dao");
		Date sdate = leaveManagement.getStartDate();
		Date edate = leaveManagement.getEndDate();
		long count = (edate.getTime() - sdate.getTime())/86400000 + 1;
		//System.out.println(edate.getTime() - sdate.getTime());
		leaveManagement.setCount((int)count);
		leaveManagementRepository.save(leaveManagement);
	}
	
}
