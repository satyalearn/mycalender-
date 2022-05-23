import { selectedYear, selectedMonth,monthDays, daysInMonth } from "../utils/dateUtils";
import { getDays } from "../utils/calenderUtils";
import {CHANGE_MoNTH} from '../actions/calenderActions'

const startDay = monthDays(`${selectedMonth + 1}-01--${selectedYear}`)
const endDay = daysInMonth(selectedMonth, selectedYear)
const initialState ={
    selectedMonth,
    selectedYear, 
    startDay, 
    endDay, 
    days: getDays(startDay,endDay)

}


export const reducers = (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_MoNTH :
            const {selectedYear, selectedMonth} = action.payload;
            const startDay = monthDays(`${selectedMonth + 1}-01--${selectedYear}`)
            const endDay = daysInMonth(selectedMonth, selectedYear);
            const days = getDays(startDay,endDay);

            return{...state, selectedMonth,selectedYear,days};
            default : 
            return state;

    }

}


// why we are declared startday and endday in reduces rather in calenderutils 