var menu=document.getElementById("menubar");
$("#sidenav").css("width","0px");
$(".snv1").css("padding","0px");
$(".snv1").css("font-size","0px");
$("#sidenav").css("display","none");
menu.onclick=function(){
	if (sidenav.style.width=="0px"){
		$("#sidenav").css("width","100%");
        $(".snv1").css("padding","0.8%");
        $(".snv1").css("margin-top","3px");
        $("#sidenav").css("display","block");
        $(".snv1").css("font-size","small");
	}
	else{
        $("#sidenav").css("display","none");
        $(".snv1").css("padding","0px");
        $(".snv1").css("font-size","0px");
		$("#sidenav").css("width","0px");
	}
}

const url1 = 'https://codeforces.com/api/user.info?handles=Rituraj.rs';
const url2 = 'https://codeforces.com/api/user.status?handle=Rituraj.rs&from=1&count=1000'
async function getRating(){
    const response = await fetch(url1);
    const data = await response.json();
    if(data.status === "OK" ){
        document.getElementById('rating').innerHTML = "Current rating : " + data.result[0].rating + "<br /> Current rank : " + data.result[0].rank;
    }
}
async function getSubmission(){
    const response = await fetch(url2);
    const data = await response.json();
    if(data.status === "OK" ){
        var c = 0;
        for( i = 0 ; i < data.result.length ; i++ ){
            if( data.result[i].verdict === "OK" )
            {
                c = c+1;
            }
        }
            document.getElementById('submissions').innerHTML =  "Number of questions solved : "+c+"<br />Total number of submissions : "+data.result.length;
    }
}
getRating();
getSubmission();
// Define selector for selecting
        // anchor links with the hash
        let anchorSelector = 'a[href^="#"]';
      
        $(anchorSelector).on('click', function (e) {
          
            // Prevent scrolling if the
            // hash value is blank
            e.preventDefault();
      
            // Get the destination to scroll to
            // using the hash property
            let destination = $(this.hash);
      
            // Get the postion of the destination
            // using the coordinates returned by
            // offset() method
            let scrollPosition
                = destination.offset().top;
      
            // Specify animation duration
            let animationDuration = 500;
      
            // Animate the html/body with 
            // the scrollTop() method
            $('html, body').animate({
                scrollTop: scrollPosition
            }, animationDuration);
        });