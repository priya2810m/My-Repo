package com.aspire.leavemanagement.controller;

import java.util.List;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aspire.leavemanagement.dao.LeaveManagementDao;
import com.aspire.leavemanagement.model.LeaveManagement;
import com.aspire.leavemanagement.model.LeaveManagementDTO;

@RestController
@CrossOrigin("*")
public class LeaveManagementController {
	
	@Autowired
	LeaveManagementDao leaveManagementDao;
	
	@RequestMapping(method=RequestMethod.POST , value = "/addLeaveDetails")
	public void addLeave(@RequestBody LeaveManagement leaveManagement){
		System.out.println("controller");
		leaveManagementDao.addLeave(leaveManagement);
	}
	
	@RequestMapping(value = "/getAllLeaveDetails")	
	@Produces(MediaType.APPLICATION_JSON)
	public List<LeaveManagementDTO> getAllLeaveDetails(){
		return leaveManagementDao.getAllLeaveDetails();
	}
}
