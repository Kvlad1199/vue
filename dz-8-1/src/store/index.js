import { createStore } from 'vuex'

export default createStore({
    state: {
        laptopsList: [
            {
                id: 1,
                productCategory: 'Ноутбуки',
                model: 'MacBook Pro 16',
                image: 'https://touch.com.ua/upload/resize_cache/webp/upload/iblock/3c6/3c6u7f63ussol3on2w4d8p1l1hp6m4fi.webp',
                price: 69999,
            },
            {
                id: 2,
                productCategory: 'Ноутбуки',
                model: 'Lenovo ThinkPad X1 Carbon',
                image: 'https://api.e-server.com.ua/storage/156970/rs/U0838390_big___rs_1200_1200.jpg',
                price: 1999,
            },
            {
                id: 3,
                productCategory: 'Ноутбуки',
                model: 'Asus ZenBook 14',
                image: 'https://dlcdnwebimgs.asus.com/gain/98e97646-638e-4172-a126-7ad1972fc941/',
                price: 899,
            },
        ],
        pcList: [
            {
                id: 5,
                productCategory: 'ПК',
                model: 'Mac Mini',
                image: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230206064036095946/230314150028662522.png@webp',
                price: 699,
            },
            {
                id: 6,
                productCategory: 'ПК',
                model: 'Lenovo ThinkCentre M90T',
                image: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NjQxNDN8aW1hZ2UvcG5nfGgzMy9oZTUvMTA5NDA4NTcyNTM5MTgucG5nfGM5OWM5NjJkZTY0YzZhYTE5MDBhMGZkZTUzNGJhMjJmNzY0MGE1N2M4YjljMjllZTE4NzUwMGM3ZThkY2VhMDk',
                price: 999,
            },
            {
                id: 7,
                productCategory: 'ПК',
                model: 'Asus VivoPC VM62',
                image: 'https://img.moyo.ua/img/gallery/2771/59/327339_main.png?1498833175',
                price: 599,
            },
        ],
        phonesList: [
            {
                id: 8,
                productCategory: 'Телефони',
                model: 'Samsung Galaxy S24 Ultra',
                image: 'https://gsmhub.com.ua/storage/assets/news/images/4714b46eafce389bdbfaf4f4acaf8bcc.webp',
                price: 1499,
            },
            {
                id: 9,
                productCategory: 'Телефони',
                model: 'Apple iPhone 15 Pro Max',
                image: 'https://hotline.ua/img/tx/409/4093645735.jpg',
                price: 1099,
            },
            {
                id: 10,
                productCategory: 'Телефони',
                model: 'Xiaomi Redmi Note 13 Pro',
                image: 'https://s.ek.ua/jpg_zoom1/2539467.jpg',
                price: 399,
            },
            {
                id: 11,
                productCategory: 'Телефони',
                model: 'Google Pixel 8 Pro',
                image: 'https://pixophone.com/image/cache/catalog/product-upload/thumb_828688_default_big-567x517.jpg',
                price: 899,
            },
        ],
        tabletList: [
            {
                id: 12,
                productCategory: 'Планшети',
                model: 'Apple iPad Pro 12.9 (2024)',
                image: 'https://ilenta.com/netcat_files/441/311/ipad_6.jpg',
                price: 1099,
            },
            {
                id: 13,
                productCategory: 'Планшети',
                model: 'Samsung Galaxy Tab S8 Ultra',
                image: 'https://images.samsung.com/is/image/samsung/p6pim/ua/sm-x906bzaesek/gallery/ua-galaxy-tab-s8-ultra-5g-x906-sm-x906bzaesek-534234160?$624_624_PNG$',
                price: 1199,
            },
        ],

        listForHeader: [],

        selectedCategory: null,
    },
    getters: {
        laptopsList: ({ laptopsList }) => laptopsList,
        pcList: ({ pcList }) => pcList,
        phonesList: ({ phonesList }) => phonesList,
        tabletList: ({ tabletList }) => tabletList,

        selectedCategory: ({ selectedCategory }) => selectedCategory,
        listForHeader: ({ listForHeader }) => listForHeader,

        getRandomLaptop(state) {
            const randIndx = Math.floor(Math.random() * state.laptopsList.length)
            return state.laptopsList[randIndx]
        },

        getRandomPC(state) {
            const randIndx = Math.floor(Math.random() * state.pcList.length)
            return state.pcList[randIndx]
        },
        getRandomPhone(state) {
            const randIndx = Math.floor(Math.random() * state.phonesList.length)
            return state.phonesList[randIndx]
        },
        getRandomTablet(state) {
            const randIndx = Math.floor(Math.random() * state.tabletList.length)
            return state.tabletList[randIndx]
        },
    },
    mutations: {
        setSelectedCategory(state, category) {
            state.selectedCategory = category
        },
        setListForHeader(state, getters) {
            state.listForHeader = [
                getters.getRandomLaptop,
                getters.getRandomPC,
                getters.getRandomPhone,
                getters.getRandomTablet,
            ]
            console.log(state.listForHeader)
        },
    },
    actions: {
        setSelectedCategory({ commit }, category) {
            commit('setSelectedCategory', category)
        },
        setListForHeader({ commit, getters }) {
            commit('setListForHeader', getters)
        },
    },
    modules: {},
})
