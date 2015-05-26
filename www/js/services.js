angular.module('starter.services', [])
.factory('Demo', function() {
	var employees = [{
      id: 1,
      name: 'Yosef Avni',
      title: 'VP, Sales EMEA',
  	  visit_date: '14/May/2015',
      icon_opp:'true',
  	  icon_pain:'true',
  	  icon_action:'true',
  	  icon_comm:'true',
  	  face: 'http://portal/images/photo_resize.php?v=2&personid=3986'
    }, {
      id: 2,
      name: 'Yael Birk',
      title: 'Director of sales',
      visit_date: '11/May/2015',
  	  icon_opp:'false',
  	  icon_pain:'true',
  	  icon_action:'true',
  	  icon_comm:'false',
      face: 'http://portal/images/photo_resize.php?v=2&personid=20661'
    }, {
	  id: 3,
      name: 'Amit Katz',
      title: 'Sr. Director WW Ethernet Switch Sales',
      visit_date: '15/May/2015',
  	  icon_opp:'false',
  	  icon_pain:'true',
  	  icon_action:'false',
  	  icon_comm:'true',
      face: 'http://portal/images/photo_resize.php?v=2&personid=5445'
    }, {
      id: 4,
      name: 'Darrin Chen',
      title: 'VP, Worldwide Channel Sale',
      visit_date: '28/Apr/2015',
  	  icon_opp:'true',
  	  icon_pain:'true',
  	  icon_action:'true',
  	  icon_comm:'true',
      face: 'http://portal/images/photo_resize.php?v=2&personid=1390'
    }, {
      id: 5,
      name: 'Gil Briman',
      title: 'VP, APAC',
      visit_date: '13/Apr/2015',
  	  icon_opp:'true',
  	  icon_pain:'true',
  	  icon_action:'true',
  	  icon_comm:'false',
      face: 'http://portal/images/photo_resize.php?v=2&personid=18153'
    }, {
      id: 6,
      name: 'Darrin Chen',
      title: 'VP, Worldwide Channel Sale',
      visit_date: '1/Mar/2015',
  	  icon_opp:'true',
  	  icon_pain:'true',
  	  icon_action:'false',
  	  icon_comm:'false',
      face: 'http://portal/images/photo_resize.php?v=2&personid=1390'
    }];

    var comments = [
	    { id: 1, employee_id: 1, company_id: 1, comment: "employee 1 comment 1 for company 1" },
	    { id: 2, employee_id: 1, company_id: 1, comment: "employee 1 comment 2 for company 1" },
	    { id: 3, employee_id: 2, company_id: 1, comment: "employee 2 comment 3 for company 1" },
	    { id: 4, employee_id: 3, company_id: 1, comment: "employee 3 comment 4 for company 1" },
	    { id: 5, employee_id: 3, company_id: 1, comment: "employee 3 comment 5 for company 1" },
	    { id: 6, employee_id: 4, company_id: 1, comment: "employee 4 comment 6 for company 1" },
	    { id: 7, employee_id: 5, company_id: 1, comment: "employee 5 comment 7 for company 1" }
 	];
	return {
		employees: function() {
	      return employees;
	    },
	    companies: function() {
	      return employees;
	    },
	    comments: function() {
	      return comments;
	    },
	    remove: function(chat) {
	      employees.splice(employees.indexOf(chat), 1);
	    },
	    getemployee: function(employeeId) {
	      for (var i = 0; i < employees.length; i++) {
	        if (employees[i].id === parseInt(employeeId)) {
	          return employees[i];
	        }
	      }
	      return null;
	    }
  	};
});