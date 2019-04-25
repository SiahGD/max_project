var app = new Vue({
    el: '#app',
    data: {
        title: 'Search',
        searchInput: '',
        searchResult: []
    },
    mounted: function() {

    },
    methods: {
        submit: function(event) {
            var vm = this;

            axios
                .get('mock.json')
                .then(function(response) {
                    vm.searchResult = response;
                }).catch(err=> {
                    vm.searchResult = [];
                });
        }
    }
})