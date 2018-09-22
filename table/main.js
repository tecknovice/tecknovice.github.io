function Employee(avatar, name, email, job, address, phone, age) {
    this.avatar = avatar;
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address;
    this.phone = phone;
}
function generateFakeData(quantity){
    data = [];
    for (i = 1; i <= quantity; i++) {
        randomAvatar = faker.image.avatar();
        randomName = faker.name.findName();
        randomEmail = faker.internet.email();
        randomJob = faker.name.jobTitle();
        randomAddress = faker.fake('{{address.zipCode}} {{address.streetName}} Street, {{address.county}} County, {{address.city}} {{address.stateAbbr}}');
        randomPhone = faker.phone.phoneNumberFormat(2);
        randomAge = faker.random.number({ min: 18, max: 60 });
        e = new Employee(randomAvatar, randomName, randomEmail, randomJob, randomAddress, randomPhone, randomAge);
        data.push(e);
    }
    return data;
}
let app = new Vue({
    el: "#app",
    data: {
        tableName: 'Employees',
        ascending: true,
        sortName: '',
        rows: []
    },
    created() {
        data = localStorage.getItem('Employees');
        if(data==null){
            this.rows = generateFakeData(50);
            localStorage.setItem("Employees", JSON.stringify(this.rows));
        }else{
            this.rows = JSON.parse(data);
        }
    },
    computed: {
        columns: function () {
            if (this.rows.length == 0) {
                return [];
            } else {
                return Object.keys(this.rows[0]);
            }
        }
    },
    methods: {
        sort: function (column) {
            if (column == 'avatar') {
                return;
            }
            if (this.sortName == column) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortName = column;
            }
            ascending = this.ascending;
            this.rows.sort(function (i, j) {
                let value_i, value_j;
                if (column == 'age') {
                    value_i = Number(i[column]);
                    value_j = Number(j[column]);
                }else{
                    value_i = i[column];
                    value_j = j[column];
                }
                if (ascending) {
                    return (value_i < value_j);
                } else {
                    return (value_i > value_j);
                }
            });
            console.log(this.rows);
        }
    }
});