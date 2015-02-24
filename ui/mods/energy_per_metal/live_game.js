(function() {
  var vanillaUnitData = handlers.unit_data
  handlers.unit_data = function(payload) {
    vanillaUnitData(payload)

    _.forEach(payload.data, function (element, id) {
        model.itemDetails[id].energyPerMetal = ko.observable(element.build_arm_cost ? element.build_arm_cost / element.build_arm_power : null);
    });
  }
})()
