(function(){

setTimeout(function() {
	$("#loader").addClass('hide');
}, 1000);
		


	$('.success').find('.indicator').html('ok');

	$('.error').find('.indicator').html('<img src="../assets/svg/ic_close_black_24px.svg"/>');
	
	

$('#mck-form').submit(function(e) {
	e.preventDefault();
	/* Act on the event */
	var searchTerm = $('#lz-search').val();

	$('.card-process-flow ').removeClass('hide');
	// console.log(searchTerm);
	// $('.card-process-flow ').html('testing');


		$.ajax({
			url: '/mck-data.php',
			type: 'post',
			dataType: 'json',
			data: {search: searchTerm},
		})						
		.done(function(data) {
			console.log(data);
		})
		.fail(function() {
			//console.log("error");
		})
		.always(function() {
			//console.log("complete");
		});
	
	});

$('.card-process-flow ').addClass('hide');

})();