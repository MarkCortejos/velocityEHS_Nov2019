const toggleFlyout = () => {
  $('.button--triggerFlyout + .flyout').toggleClass('flyout--hidden');
  $('.button--triggerFlyout > i').toggleClass('fa-chevron-up fa-chevron-down')
}

// Doc Ready
$(function(){

  $('.button--triggerFlyout').on('click', toggleFlyout)

})