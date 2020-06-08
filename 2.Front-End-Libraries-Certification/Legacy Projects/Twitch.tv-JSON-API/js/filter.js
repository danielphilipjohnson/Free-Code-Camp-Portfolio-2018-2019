$(document).ready(function() {
    $('.dropdown-item').click(function() {
      var filterBY = $(this).html();
      if (filterBY === 'Online') {
        $(".Offline").each(function(index) {
          $(this).css('display', 'none');
        });
        $(".Online").each(function(index) {
          $(this).css('display', 'flex');
        });
      } else if (filterBY === 'Offline') {
        $(".Online").each(function(index) {
          $(this).css('display', 'none');
        });
        $(".Offline").each(function(index) {
          $(this).css('display', 'flex');
        });
      } else if (filterBY === 'All') {
        console.log('all selected');
        $(".Offline").each(function(index) {
          $(this).css('display', 'flex');
        });
        $(".Online").each(function(index) {
          $(this).css('display', 'flex');
        });;
      }
    })
  });
