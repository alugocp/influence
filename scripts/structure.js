site.setContent=function(name,id){
  $.get("content/"+id+".html",function(data){
    site.heading.find("h1").html(name);
    site.content.html(data);
    site.positionContent();
  },"html");
}
