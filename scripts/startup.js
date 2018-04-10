var site={};

$(document).ready(function(){
  site.heading=$(".heading");
  site.content=$("#content");

  site.setContent("Foreign Economic Influence","home");
});

site.setContent=function(name,id){
  $.get("content/"+id+".html",function(data){
    site.heading.find("h1").html(name);
    site.content.html(data);
    $(window).scrollTop(0);
  },"html");
}
