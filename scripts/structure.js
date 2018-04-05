site.positionContent=function(){
  site.content.offset({
    top:site.heading.offset().top+site.heading.height()+20,
    left:site.content.offset().left
  });

  site.footer.offset({
    top:site.content.offset().top+site.content.height()+20,
    left:site.footer.offset().left
  });
}
site.setContent=function(name,id){
  $.get("content/"+id+".html",function(data){
    site.heading.find("h1").html(name);
    site.content.html(data);
    site.positionContent();
  },"html");
}
