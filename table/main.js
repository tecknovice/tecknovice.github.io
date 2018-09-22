let app = new Vue({
    el: "#app",
    data: {
        tableName: 'My Table',
        ascending: true,
        sortName: '',
        products: [
            {
                image: '1',
                name: 'fan',
                code: 'F123',
                price: '$100',
                quantity: '10'
            },
            {
                image: '2',
                name: 'normal table',
                code: 'T433',
                price: '$20',
                quantity: '30'
            },
            {
                image: '3',
                name: 'chair',
                code: 'C200',
                price: '$10',
                quantity: '5'
            },
            {
                image: '4',
                name: 'fabulous table',
                code: 'T400',
                price: '$220',
                quantity: '3'
            },
            {
                image: '5',
                name: 'saving table',
                code: 'T119',
                price: '$10',
                quantity: '3000'
            }
        ]
    },
    computed: {
        attributes: function () {
            if (this.products.length == 0) {
                return [];
            } else {
                return Object.keys(this.products[0]);
            }
        }
    },
    methods: {
        sort: function (attr) {
            if(attr=='image'){
                return;
            }
            if(this.sortName == attr){
                this.ascending = !this.ascending;
            }else{
                this.ascending = true;
                this.sortName = attr;
            }
            ascending = this.ascending;
            this.products.sort(function(i,j){
                let value_i, value_j;
                if(attr=='price'){
                    value_i = Number(i[attr].slice(1));
                    value_j = Number(j[attr].slice(1));
                }else if(attr=='quantity'){
                    value_i = Number(i[attr]);
                    value_j = Number(j[attr]);
                }
                else{
                    value_i = i[attr];
                    value_j = j[attr];
                }
                if(ascending){
                    return (value_i < value_j);
                }else{
                    return (value_i > value_j);
                }
            });
            console.log(this.products);
        }
    }
});