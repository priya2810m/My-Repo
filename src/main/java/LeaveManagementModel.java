package com.leavemanagement.model;



import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="LeaveManagement")
public class LeaveManagement {
	
	@Id
	private String aceNo;
	private String userName;
	private String status;
	private Date startDate;
	private Date endDate;
	private int count;
	public String getAceNo() {
		return aceNo;
	}
	public void setAceNo(String aceNo) {
		this.aceNo = aceNo;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
