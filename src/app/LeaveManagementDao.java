package com.aspire.leavemanagement.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspire.leavemanagement.model.LeaveManagement;
import com.aspire.leavemanagement.model.LeaveManagementDTO;
import com.aspire.leavemanagement.repository.LeaveManagementRepo;

@Service
public class LeaveManagementDao {
	@Autowired
	LeaveManagementRepo leaveManagementRepository;

	public void addLeave(LeaveManagement leaveManagement) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		Date date = new Date();
		System.out.println("dao");
		Date sdate = leaveManagement.getStartDate();
		Date edate = leaveManagement.getEndDate();
		long count = (edate.getTime() - sdate.getTime())/86400000 + 1;
		//System.out.println(edate.getTime() - sdate.getTime());
		leaveManagement.setLastUpdated(dateFormat.format(date));
		leaveManagement.setCount((int)count);
		leaveManagementRepository.save(leaveManagement);
	}

	public List<LeaveManagementDTO> getAllLeaveDetails() {		
		List<LeaveManagementDTO> list=leaveManagementRepository.getLeaveDetails();
		/*for(LeaveManagementDTO d : list){
		System.out.println(d.getAceNo());
		}*/
		return list;
	}     
}
