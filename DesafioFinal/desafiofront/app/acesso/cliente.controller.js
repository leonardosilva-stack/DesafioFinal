(function () {
    "use strict";

    // CONTROLLER
    angular.module('autoLocadoraApp')
        .controller('ClienteController', clienteController);

    clienteController.$inject = ['$rootScope'];

    function clienteController($rootScope, service) {
        var vm = this;

        vm.service = serviceF;

    }

})();