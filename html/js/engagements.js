/*--------------------------------------- */
/*  SEARCH FORMS
/*--------------------------------------- */

$(document).ready(function(){
    $("ul.radio-group-list").tabs("div.specific-experience-panes > div"); // radio tabs init

    // ------ INDUSTRY/ORGANIZATION ---------------
    updateAreas = function()
    {
      $count = $("div.areas p:not(.markup)").size(); //count areas
      if($count==0){
        $(".areas p.markup").clone().removeClass("markup").appendTo(".areas").show();
        $count = 1;
      }
      $i = 1;
      // append id's to selects
      $("div.areas p:not(.markup)").each(function(){
        $(this).find("select").each(function(){
          $name = $(this).attr("name").replace(/-[0-9]+/, "");
          $(this).attr("name", $name+"-"+$i);
          $(this).attr("id", $name+"-"+$i);
          //$(this).prev("label").attr("for", $name+"-"+$i);
        });
        // perform check to show or hide buttons
        if($i==$count){
          $(this).find("a.add").show();
        } else {
          $(this).find("a.add").hide();
        }
        $i++;
      });
    }

    // init first area
    initAreas = function()
    {
      $(".areas p.markup").clone().removeClass("markup").appendTo(".areas").show();
      updateAreas();
    }

    $(document).on("click", "div.areas a.delete", function(){  //event for clicking delete button
      $(this).parent().remove();
      updateAreas();
      return false;
    });

    $(document).on("click", "div.areas a.add", function(){  //event for clicking add button
      $(".areas p.markup").clone().removeClass("markup").appendTo(".areas").show(); //clone markup paragraph
      updateAreas();
      return false;
    });

    initAreas();
    //radio tabs script
    $("input[name='specific-experience']").live("change", (function(){
      var api = $("ul.radio-group-list").data("tabs");
      api.click($("input[name='specific-experience']:checked").index(".radio-group input"));
      $("input[name='specific-experience']:checked").parents("p").addClass("selected").siblings().removeClass("selected");
    }));
  });


/*--------------------------------------- */
/*  SEARCH RESULTS
/*--------------------------------------- */
$(document).ready(function(){
  $("select#show").change(function(){
    if($(this).val()=="show"){
      $("#filters").show();
    } else {
      $("#filters").hide();
    }
  });
});
