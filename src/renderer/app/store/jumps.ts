import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Jump {
  id: string;
  number: number;
  date: Date;
  place: string;
  aircraft: string;
  equipment: string;
  exitAltitude: number;
  deploymentAltitude: number;
  delayTime: number;
  distanceToTarget: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface JumpState {
  jumps: Jump[];
  isLoadingJumps: boolean;
  error: string | null;
}

const initialState: JumpState = {
  jumps: [],
  isLoadingJumps: false,
  error: null,
}

const jumpSlice = createSlice({
  name: 'jumps',
  initialState,
  reducers: {
    addJump: (state, action: PayloadAction<Jump>) => {
      state.jumps.push(action.payload)
    },
    deleteJump: (state, action: PayloadAction<string>) => {
      state.jumps.filter(item => item.id !== action.payload)
    },
  }
})

export const {  addJump, deleteJump} = jumpSlice.actions;
export default jumpSlice.reducer;