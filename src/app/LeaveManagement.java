package com.aspire.leavemanagement.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NamedNativeQueries;
import org.hibernate.annotations.NamedNativeQuery;

@Entity
@Table(name = "LeaveManagement")


 
@NamedNativeQueries({  
	@NamedNativeQuery(name = "getLeaveDetails", query = "SELECT l.ace_no AS ace_no,l.user_name AS user_name,SUM(CASE WHEN l.status='communicated' THEN l.count ELSE 0 END) AS communicated_count,SUM(CASE WHEN l.status='noncommunicated' THEN l.count ELSE 0 END) AS noncommunicated_count,"
		+ "l.last_updated AS last_updated FROM leave_management l GROUP BY l.ace_no", resultClass = LeaveManagementDTO.class)})

   public class LeaveManagement {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int number;
	private String aceNo;
	private String userName;
	private String status;
	private Date startDate;
	private Date endDate;
	private String lastUpdated;
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

	public String getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(String string) {
		this.lastUpdated = string;
	}

}
