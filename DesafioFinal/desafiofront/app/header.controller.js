(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['helperFactory','AutoLocadoraApp'];

    function headerController(helper,service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        //vm.iniciar = iniciar;
        vm.service = serviceF;

        // function iniciar() {
        //     vm.go();
        // }

        function go(_path){
            $location.path(_path);
        }

        function serviceF(_path) {
            return service.buscaCep(11320140)
                .then(function (response) {
                    console.log(response)
                });
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */


    }

})();