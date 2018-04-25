package com.aspire.leavemanagement.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MonthsDTO {
	@Id
	private String aceNo;
	private String userName;
	private String month;
	private int communicated;
	private int nonCommunicated;
//	private int totalCommunicated;
//	private int totalNonCommunicated;
	
	
	/*public int getTotalCommunicated() {
		return totalCommunicated;
	}
	public void setTotalCommunicated(int totalCommunicated) {
		this.totalCommunicated = totalCommunicated;
	}
	public int getTotalNonCommunicated() {
		return totalNonCommunicated;
	}
	public void setTotalNonCommunicated(int totalNonCommunicated) {
		this.totalNonCommunicated = totalNonCommunicated;
	}*/
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getCommunicated() {
		return communicated;
	}
	public void setCommunicated(int communicated) {
		this.communicated = communicated;
	}
	public int getNonCommunicated() {
		return nonCommunicated;
	}
	public void setNonCommunicated(int nonCommunicated) {
		this.nonCommunicated = nonCommunicated;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getAceNo() {
		return aceNo;
	}
	public void setAceNo(String aceNo) {
		this.aceNo = aceNo;
	}
	
}
