package com.aspire.leavemanagement.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aspire.leavemanagement.model.LeaveManagement;
import com.aspire.leavemanagement.model.LeaveManagementDTO;
import com.aspire.leavemanagement.model.MonthsDTO;
import com.aspire.leavemanagement.repository.LeaveManagementRepo;

@Service
public class LeaveManagementDao {
	@Autowired
	LeaveManagementRepo leaveManagementRepository;

	public void addLeave(LeaveManagement leaveManagement) {
		DateFormat dateFormat = new SimpleDateFormat("MMMM");
		DateFormat lastUpdated = new SimpleDateFormat("yyyy/MM/dd");
		Date date = new Date();
		System.out.println("dao");
		Date sdate = leaveManagement.getStartDate();
		Date edate = leaveManagement.getEndDate();
		long count = (edate.getTime() - sdate.getTime()) / 86400000 + 1;
		// System.out.println(edate.getTime() - sdate.getTime());
		leaveManagement.setMonth(dateFormat.format(sdate));

		leaveManagement.setLastUpdated(lastUpdated.format(date));
		leaveManagement.setCount((int) count);
		leaveManagementRepository.save(leaveManagement);
	}

	public List<LeaveManagementDTO> getAllLeaveDetails() {
		List<LeaveManagementDTO> list = leaveManagementRepository.getLeaveDetails();
		/*
		 * for(LeaveManagementDTO d : list){ System.out.println(d.getAceNo()); }
		 */
		return list;
	}

	public List<String> getMonths() {
		List<String> months = new ArrayList<String>();
		months.add("January");
		months.add("February");
		months.add("March");
		months.add("April");
		months.add("May");
		months.add("June");
		months.add("July");
		months.add("August");
		months.add("September");
		months.add("October");
		months.add("November");
		months.add("December");
		return months;
	}

	public List<MonthsDTO> getMonth(String aceNo) {
		System.out.println("inside get by ace no dao");
		List<MonthsDTO> leaveDetails = new ArrayList<>();
		List<String> months = getMonths();
		List<MonthsDTO> leaveDetail = leaveManagementRepository.getLeaveDetailsByAceNo(aceNo);
		MonthsDTO dummy = new MonthsDTO();
		for (String month : months) {
			for (MonthsDTO m : leaveDetail) {
				if (month.equalsIgnoreCase(m.getMonth())) {
					leaveDetails.add(m);
				} else {
					dummy = new MonthsDTO();
					dummy.setMonth(month);
//					dummy.setTotalCommunicated(155);
//					dummy.setTotalNonCommunicated(255);
					leaveDetails.add(dummy);
				}
			}
		}

		return leaveDetails;
	}
}
