	var bio = {
		"name" : "Raunak Singh",
		"role" : "Web Developer",
		"contacts" : {
			"mobile" : "9999999999",
			"email" : "raunak@udacity.com",
			"github" : "invincible-Me",
			"twitter" : "@raunak",
			"location" : "India"
		},
		"skills" :["HTML", "swimming", "css", "Batman"],
		"welcomeMessage": "Welcome to Raunak's resume Site ",
		"biopic" : "images/fry.jpg"
	};

	var education = {
		"schools" : [
		{
	      "name" : "GNIOT Greater Noida",
	      "location" : "Greater Noida, UP",
	      "degree" : "None",
	      "dates" : "2019" ,
	      "majors" : ["no majors"]     
		}
	   ],	
	   "onlineCourses" : [
	   {
	   	"title": "FrontEnd Nano Degree",
	   	"school": "Udacity",
	   	"dates": "2017",
	   	"url": "https://www.udacity.com"
	   }
	  ]
	};

	var work = {
	  "jobs": [
	    {
	      "employer": "Udacity",
	      "title": "Course Developer",
	      "location": "Mountain View, CA",
	      "dates": "Feb 2014 - Current",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LearnBIG",
	      "title": "Software Engineer",
	      "location": "Seattle, WA",
	      "dates": "May 2013 - Jan 2014",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LEAD Academy Charter High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jul 2012 - May 2013",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "Stratford High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jun 2009 - Jun 2012",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    }
	  ]
	};

	var projects = {
		"projects": [
		{
			"title": "sample project 1",
			"dates" : "2017",
			"description" : "Who moved my cheese feet cauliflower cheese. Queso taleggio when cheese comes out everybody's happy airedale ricotto cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frails airedale swiss cheesecake.",
			"images" : ["images/2.jpg" ]
		}
		]
	};

	bio.display = function() {
	   
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }

	};
	   bio.display();

	    work.display = function() {
	            for ( var i = 0 ; i < work.jobs.length ; i++) {
	     	$("#workExperience").append(HTMLworkStart);

	     	var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[i].employer);
	     	var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[i].title);
	     	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	        $(".work-entry:last").append(formattedEmployerTitle);
	        var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[i].dates);
	        $(".work-entry:last").append(formattedDates);
	        var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[i].description);
	        $(".work-entry:last").append(formattedDescription);
	     }
	};
	 work.display();



	     projects.display = function() {
	    	for (var i=0 ; i<projects.projects.length ; i++) {
	     		$("#projects").append(HTMLprojectStart);

	     		var pTitle = HTMLprojectTitle.replace("%data%" , projects.projects[i].title);
	     		$(".project-entry:last").append(pTitle);

	     		var pDates = HTMLprojectDates.replace("%data%" , projects.projects[i].dates);
	     		$(".project-entry:last").append(pDates);

	     		var pDescription = HTMLprojectDescription.replace("%data%" , projects.projects[i].description);
	     		$(".project-entry:last").append(pDescription);
                
                for ( var j = 0 ; j < projects.projects[i].images.length ; j++) {
	     		var pImages = HTMLprojectImage.replace("%data%" , projects.projects[j].images);
	     		$(".project-entry:last").append(pImages);
               }
	     	
	     	}
	};
	    projects.display();
 

	     education.display = function() {
	        $("#education").append(HTMLschoolStart);

	    for (var i=0;i<education.schools.length;i++) {

		    	var schoolName = HTMLschoolName.replace("%data%" , education.schools[i].name);
			     $(".education-entry:last").append(schoolName);

			    var schoolLocation = HTMLschoolLocation.replace("%data%" , education.schools[i].location);
			    $(".education-entry:last").append(schoolLocation);

			    var qualification = HTMLschoolDegree.replace("%data%" , education.schools[i].degree);
			    $(".education-entry:last").append(qualification);

			    var passed = HTMLschoolDates.replace("%data%" , education.schools[i].dates);
			    $(".education-entry:last").append(passed);

	                 for (var k = 0; k < education.schools[i].majors.length ; k++) {
				    var major = HTMLschoolMajor.replace("%data%" , education.schools[k].majors);
				    $(".education-entry:last").append(major);
				    }
		    }
		    for (var j = 0 ; j < education.onlineCourses.length ; j++) {
			    var oTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[j].title);
			    $(".education-entry:last").append(oTitle);

			    var oSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[j].school);
			    $(".education-entry:last").append(oSchool);

			    var oDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[j].dates);
			     $(".education-entry:last").append(oDates);

			    var oUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[j].url);
			    $(".education-entry:last").append(oUrl);
		       }
	};
	  education.display();

   

      $("#mapDiv").append(googleMap);



   





   



