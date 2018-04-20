package com.aspire.leavemanagement.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class LeaveManagementDTO {
	@Id
	private String aceNo;
	private String userName;
	private String communicatedCount;
	private String noncommunicatedCount;
	private String lastUpdated;

	public String getAceNo() {
		return aceNo;
	}

	public void setAceNo(String aceNo) {
		this.aceNo = aceNo;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCommunicatedCount() {
		return communicatedCount;
	}

	public void setCommunicatedCount(String communicatedCount) {
		this.communicatedCount = communicatedCount;
	}

	public String getNoncommunicatedCount() {
		return noncommunicatedCount;
	}

	public void setNoncommunicatedCount(String noncommunicatedCount) {
		this.noncommunicatedCount = noncommunicatedCount;
	}

	public String getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(String lastUpdated) {
		this.lastUpdated = lastUpdated;
	}
}
