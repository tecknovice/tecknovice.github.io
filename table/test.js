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
            if(this.sortName == attr){
                this.ascending = !this.ascending;
            }else{
                this.ascending = true;
                this.sortName = attr;
            }
            ascending = this.ascending;
            // Work well
            sortProducts(this.products,attr,ascending);
            //Not work
            // sortArray(this.products, attr, ascending);
            console.log(this.products);
        }
    }
});

function sortProducts(products, attr, ascending){
    products.sort(function(i,j){
        value_i = i[attr];
        value_j = j[attr];
        if(ascending){
            return (value_i < value_j);
        }else{
            return (value_i > value_j);
        }
    });
}

function sortArray(products, sortName, isIncrease) {
    for (i = 0; i < products.length; i++) {
        product_i = products[i];
        value_i = getValue(product_i, sortName);
        current_index = i;
        current_value = value_i;
        for (j = i + 1; j < products.length; j++) {
            product_j = products[j];
            value_j = getValue(product_j, sortName);
            if (isIncrease) {
                if (current_value > value_j) {
                    current_index = j;
                    current_value = value_j;
                }
            } else {
                if (current_value < value_j) {
                    current_index = j;
                    current_value = value_j;
                }
            }
        }
        swap(products, i, current_index);
    }
}
function getValue(product_i, sortName) {
    let value_i;
    for (key in product_i) {
        if (key == sortName) {
            value_i = product_i[key];
            return value_i;
        }
    }
    return '';
}
function swap(products, i, current_index) {
    temp = products[i];
    products[i] = products[current_index];
    products[current_index] = temp;
}