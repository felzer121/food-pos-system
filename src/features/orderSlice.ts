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
]

export const dishesSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDishes: (state, action: PayloadAction<any>) => {
      state = action.payload
    }
  }
})