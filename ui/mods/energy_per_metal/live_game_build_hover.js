(function() {
  model.energyPerMetal = ko.computed(function () { return model.state().energyPerMetal || ''; }).extend({ numeric: 2 });
  
  $('[data-bind="visible: buildEfficency"]').replaceWith('<div class="stat" data-bind="visible: energyPerMetal">EPM: <span class="stat_num" data-bind="    text: energyPerMetal"></span></div>')
})()
