import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface selectEatType {
  id: number
  name: string
  active: boolean
}

const initialState:selectEatType[]  = [
  {id: 0, name: 'Dine In', active: true},
  {id: 1, name: 'To Go', active: false},
  {id: 2, name: 'Delivery', active: false}
]

export const selectEatSlice = createSlice({
  name: 'selectEat',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<any>) => {
      state.map((item, index) => {
        if (action.payload.id === index) {
          return item.active = true
        } else {
          return item.active = false
        }
      })
    }
  }
})

export const selectEat = (state: any) => state.selectEat;
export const { select } = selectEatSlice.actions
export default selectEatSlice.reducer;