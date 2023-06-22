import {atom, selector} from 'recoil';

export const userInfo = atom({
    key:'user',
    default: {
        firstName: '',
        lastName: ''
    },
})
export const ProductInfo = atom({
    key:'product',
    default: 'Mango',
})
export const filterSelect = selector({
    key: 'filter',
    get: ({ get }) => {
        const user = get(userInfo)
        const productname = get(ProductInfo)
        return { user, productname }
    }
})