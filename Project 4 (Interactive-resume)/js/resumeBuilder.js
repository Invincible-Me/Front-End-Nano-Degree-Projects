	var bio = {
		"name" : "Raunak Singh",
		"role" : "Web Developer",
		"contacts" : {
			"mobile" : "8802216369",
			"email" : "invincibleme.404@gmail.com",
			"github" : "invincible-Me",
			"twitter" : "@RaunakS47409218",
			"location" : "India"
		},
		"skills" :["HTML", "Java Script", "css", "Bootstrap","Swimming"],
		"welcomeMessage": "Welcome to Raunak's resume Site ",
		"biopic" : "images/fry.JPG"
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
	      "title": "Mentor",
	      "location": "India",
	      "dates": "July 2017 - Current",
	      "description": "I guide Udacity Nanodegree enrolled students on how to achieve their desired goals."
	    }
	  ]
	};

	var projects = {
		"projects": [
		{
			"title": "Frogger Game",
			"dates" : "2017",
			"description" : "Its a simple game in which a boy try to cross path avoiding moving bugs",
			"images" : ["images/2.png" ]
		},
		{
			"title": "Neighbourhood Map",
			"dates" : "2017",
			"description" : "Its a friendly map which includes famous places and their description",
			"images" : ["images/1.png" ]
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
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
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



   





   



