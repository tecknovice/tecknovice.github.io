let app = new Vue({
    el: "#app",
    data: {
        tableName: 'My Table',
        products: [
            {
                image: '1',
                name: '1',
                code: '1',
                price: '1',
                quantity: '1'
            },
            {
                image: '2',
                name: '2',
                code: '2',
                price: '2',
                quantity: '2'
            },
            {
                image: '3',
                name: '3',
                code: '3',
                price: '3',
                quantity: '3'
            }
        ]
    },
    methods: {
        sort: function (event) {
            console.log(event.target.innerText);
            sortName = event.target.innerText;
            console.log(this);


        }
    }
});
function sortArray(products, sortName, isIncrease) {
    for (i = 0; i < products.length; i++) {
        product_i = products[i];
        value_i = getValue(product_i, sortName);
        current_index;
        current_value= value_i;
        for(j=i+1;j<products.length;j++){
            product_j = products[j];
            value_j = getValue(product_j,sortName);
            if(isIncrease){
                if(current_value>value_j){
                    current_value = value_j;
                }
            }else{
                if(current_value<value_j){
                    current_value = value_j;
                }
            }
        }
        swap(products,product_i,product_j);
    }
}
function getValue(product_i, sortName) {
    value_i;
    for (key in product_i) {
        if (key == sortName) {
            value_i = product_i[key];
            return value_i;
        }
    }
    return '';
}