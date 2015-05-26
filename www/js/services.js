angular.module('starter.services', [])
.factory('Demo', function() {
	var visits = [{
      id: 1,
      name: 'Yosef Avni',
      title: 'VP, Sales EMEA',
  	  visit_date: '14/May/2015',
  	  company_id: '1',
  	  opp_txt:'customer would like to purcahse switches and manage them via UFM',
      pain_txt:'customer has many users and a lot of traffic and needs high performing netwrok',
      action_txt:'check pricing for switches. check pricing for ufm',
      comm_txt:'need to talk to john regarding what he saw at HP',
  	  face: 'http://portal/images/photo_resize.php?v=2&personid=3986'
    }, {
      id: 2,
      name: 'Yael Birk',
      title: 'Director of sales',
      visit_date: '11/May/2015',
      company_id: '1',
  	  icon_opp:'false',
  	  icon_pain:'true',
  	  icon_action:'true',
  	  icon_comm:'false',
  	  opp_txt:'',
      pain_txt:'lorem ipso dsjlfh dkj sdlfh dslkjfh ',
      action_txt:'',
      comm_txt:'',
      face: 'http://portal/images/photo_resize.php?v=2&personid=20661'
    }, {
	  id: 3,
      name: 'Amit Katz',
      title: 'Sr. Director WW Ethernet Switch Sales',
      visit_date: '15/May/2015',
      company_id: '1',
  	  opp_txt:'',
      pain_txt:'lorem ipso dsjlfh dkj sdlfh dslkjfh ',
      action_txt:'sdfh  sdfkjdhs fsdkhf ksdlkashdf kjsdf',
      comm_txt:'lorem ipso dsjlfh dkj sdlfh dslkjfh',
      face: 'http://portal/images/photo_resize.php?v=2&personid=5445'
    }, {
      id: 4,
      name: 'Darrin Chen',
      title: 'VP, Worldwide Channel Sale',
      visit_date: '28/Apr/2015',
      company_id: '1',
  	  opp_txt:'lorem ipso dsjlfh dkj sdlfh dslkjfh ',
      pain_txt:'',
      action_txt:'',
      comm_txt:'sdfh  sdfkjdhs fsdkhf ksdlkashdf kjsdf',
      face: 'http://portal/images/photo_resize.php?v=2&personid=1390'
    }, {
      id: 5,
      name: 'Gil Briman',
      title: 'VP, APAC',
      visit_date: '13/Apr/2015',
      company_id: '1',
  	  opp_txt:'',
      pain_txt:'lorem ipso dsjlfh dkj sdlfh dslkjfh ',
      action_txt:'',
      comm_txt:'sdfh  sdfkjdhs fsdkhf ksdlkashdf kjsdf',
      face: 'http://portal/images/photo_resize.php?v=2&personid=18153'
    }, {
      id: 6,
      name: 'Darrin Chen',
      title: 'VP, Worldwide Channel Sale',
      visit_date: '1/Mar/2015',
      company_id: '1',
  	  opp_txt:'lorem ipso dsjlfh dkj sdlfh dslkjfh',
      pain_txt:'',
      action_txt:'sdfh  sdfkjdhs fsdkhf ksdlkashdf kjsdf',
      comm_txt:'',
      face: 'http://portal/images/photo_resize.php?v=2&personid=1390'
    }];

	return {
		visits: function() {
	      return visits;
	    },
	    companies: function() {
	      return visits;
	    },
	    comments: function() {
	      return comments;
	    },
	    remove: function(chat) {
	      visits.splice(visits.indexOf(chat), 1);
	    },
	    getvisit: function(visitId) {
	      for (var i = 0; i < visits.length; i++) {
	        if (visits[i].id === parseInt(visitId)) {
	          return visits[i];
	        }
	      }
	      return null;
	    }
  	};
});