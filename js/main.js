var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

$btnExpand.on('click', function () {
    $panel.toggleClass('js-panel-expand'); 
});
