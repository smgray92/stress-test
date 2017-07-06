$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    var neg;
    var health;
    var relieve;

    $("input:checkbox[name=negative]:checked").each(function() {
      var negativeStress = $(this).val();
    });
    neg = $("input:checkbox[name=negative]:checked").length;
    console.log(neg);
      $("input:checkbox[name=health]:checked").each(function() {
        var healthStress = $(this).val();
      });
      health = $("input:checkbox[name=health]:checked").length;
        $("input:checkbox[name=relieve]:checked").each(function() {
          var relieveStress = $(this).val();
        });
        relieve = $("input:checkbox[name=relieve]:checked").length;

        if ((neg >= 3) && (health >= 3) && (relieve <=1)) {
          $(".outcome-1").show();
        }
        else if ((neg === 2) && (health === 2) && (relieve === 2)) {
          $(".outcome-2").show();
        }
        else if ((neg <= 1) && (health <= 1) && (relieve >= 3)) {
          $(".outcome-3").show();
        }
        else {
          $(".outcome-4").show();
        }

  });
});
