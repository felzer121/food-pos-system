import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface dishesType {
  id: number
  name: string
  picture: string
  price: number
  amount: number
  category: string
}

const initialState: dishesType[] = [
  {
    id: 1,
    name: 'Spicy seasoned seafood noodles',
    picture: 'spicy-seasoned-seafood-noodles',
    price: 2.29,
    amount: 20,
    category: 'Hot Dishes'
  },
  {
    id: 2,
    name: 'Salted Pasta with mushroom sauce',
    picture: 'salted-Pasta-with-mushroom-sauce',
    price: 2.69,
    amount: 11,
    category: 'Hot Dishes'
  },
  {
    id: 3,
      name: 'Beef dumpling in hot and sour soup',
    picture: 'beef-dumpling-in-hot-and-sour-soup',
    price: 2.99,
    amount: 16,
    category: 'Hot Dishes'
  }
]

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addDishes: (state, action: PayloadAction<any>) => {
      state = action.payload
    }
  }
})

export const selectDishes = (state: any) => state.dishes;
export const { addDishes } = dishesSlice.actions
export default dishesSlice.reducer;