var id="main"; //id to swap contents

// sends elements to add event listners to click events
function setUpHistoryClicks()
{
  addClicker(document.getElementById("home"));
  addClicker(document.getElementById("anurag"));
  addClicker(document.getElementById("dhiraj"));
  addClicker(document.getElementById("krrish"));
  addClicker(document.getElementById("nikhil"));
}

// adds events listners
function addClicker(link)
{
    $(link).bind('click', function(e) {
  //  $("#"+id).html("loading..."); add something here if you want a loading message
    swapContents(link.href);
    document.title = link.id;
    history.pushState(null,null,link.href);
    e.preventDefault(); // stop the browser from following the link
    });

}

function swapContents(href)
{
  $("#"+id).load(href+' #'+id);// load the html response into a DOM element
  return true;
}

//bind pop state (back/foreward buttons)
$(window).bind('popstate', function (e) {
  swapContents(document.location)
});
