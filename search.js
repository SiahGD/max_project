var app = new Vue({
    el: '#app',
    data: {
        title: 'Search',
        searchInput: '',
        searchResult: [],
        debounce: null
    },
    mounted: function() {

    },
    methods: {

        onInput: function() {
            var vm = this;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                vm.search();
            }, 300)
        },
        submit: function(event) {
            var vm = this;
            vm.search();
        },

        search() {
            var vm = this;
            axios
                .get('mock.json')
                .then(function(response) { return vm.searchInput ? response.data : {data: []} })
                .then(function(response) {
                    vm.searchResult = response.data;
                }).catch(err => {
                    vm.searchResult = [];
                });
        }
    }
})