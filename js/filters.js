(function(angular, moment) {
    'use strict';

    angular
        .module('mbApp')
        .filter('tzFix', tzFix)
        .filter('unixTs', unixTs)
        .filter('tsFormat', tsFormat);

    var offset = moment().utcOffset();

    function tzFix() {

        return inner;

        function inner(input) {
            return moment.utc(input).utcOffset(offset);
        }
    }

    function unixTs() {

        return inner;

        function inner(input) {
            return moment.unix(input);
        }
    }

    function tsFormat() {

        return inner;

        function inner(input) {
            return input.format('MMMM D, YYYY - hh:mm A');
        }
    }

})(window.angular, window.moment);
