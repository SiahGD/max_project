var app = new Vue({
    el: '#app',
    data: {
        title: 'Home',
        collection: []
    },
    mounted: function() {


    },
    methods: {

        getSomething: function() {
            var vm = this;
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(function(response) {
                	vm.collection = response.data.bpi;
                });
        }
    }
})