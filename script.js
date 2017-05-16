// dragula([document.querySelector('#opt1'), document.querySelector('#head1')]);

// OPT1 DRAGGABLE INTO HEAD1

$(function() {
  $("#opt1").draggable({
    revert: "invalid",
    revertDuration: 350
  });

  $("#head1").droppable({
    deactivate: function (event, ui) {
      $('#opt1').css('background-color', '#ff0000')
      $('#opt1').animate({
        backgroundColor: '#85c644'
      });
    },
    accept: "#opt1",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      $(this)
      console.log("Dropped!");
    }
  });
});


// OPT2 DRAGGABLE INTO HEAD3

$(function() {
  $("#opt2").draggable({
    revert: "invalid"
  });

  $("#head3").droppable({
    accept: "#opt2",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      $(this)
      console.log("Dropped!");
    }
  });
});


// OPT3 DRAGGABLE INTO HEAD4

$(function() {
  $("#opt3").draggable({
    revert: "invalid"
  });

  $("#head4").droppable({
    accept: "#opt3",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      $(this)
      console.log("Dropped!");
    }
  });
});


// OPT4 DRAGGABLE INTO HEAD2

$(function() {
  $("#opt4").draggable({
    revert: "invalid"
  });

  $("#head2").droppable({
    accept: "#opt4",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      $(this)
      console.log("Dropped!");
    }
  });
});
