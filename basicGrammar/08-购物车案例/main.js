const app = new Vue({
    el: '#app',
    data: {
        books:[
            {name:'Java',date:'2001-1-1',price:20,quantity:1},
            {name:'Python',date:'1996-1-1',price:30,quantity:1},
            {name:'Kotlin',date:'2010-5-5',price:50,quantity:1},
            {name:'Go',date:'200910-9',price:40,quantity:1}
        ]
    },
    computed:{
        totalPrice(){
            /*for (let book of this.books){
                result += book.price * book.quantity;
            }*/
            return this.books.reduce(function (pre,book) {
                return pre + book.price * book.quantity
            },0)
        }
    },
    methods:{
        increase(index){
            this.books[index].quantity++;
        },
        decrease(index){
            this.books[index].quantity--;
        },
        removeBook(index){
            this.books.splice(index,1)
        }
    },
    filters:{
        priceFilter(price){
            return '￥' + price.toFixed(2);
        }
    }
});