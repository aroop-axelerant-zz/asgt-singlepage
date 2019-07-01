// Open event modal
$('.event-card').click(function (e){
    e.preventDefault();
    var modal_path = $('.modal-wrapper .events-modal');
    openModal(modal_path);
});

// Open book room form
$('.book-room-cta a').click(function (e){
    e.preventDefault();
    var modal_path = $('.modal-wrapper .book-room-modal');
    openModal(modal_path);
});

// Play Video
$('.play-btn').click(function (){
    var modal_path = $('.modal-wrapper .video-wrapper');
    openModal(modal_path);
});

// Close button
$('.cta-close a').click(function (e){
    e.preventDefault();
    modalClose();
    return false;
})

// Close modal when clicked outside modal content
$('.modal-wrapper').mouseup(function (e){
    var modal_container = $('.modal');
	if (!modal_container.is(e.target) && modal_container.has(e.target).length === 0){
        modalClose();
        $('.modal-wrapper iframe').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
	}
}); 

// Open modal function
function openModal (e) {
    // $("body").css("overflow","hidden");
    $('.modal-wrapper').css('display', 'flex');
    e.css('display', 'block');
}

// Close modal function
function modalClose () {
    // $("body").css("overflow","auto");
    $('.modal-wrapper').fadeOut();
    $('.modal').fadeOut();
}