import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";

export interface CalendarProps {
    id: string,
}
export function Calendar(props: CalendarProps) {
    return (
        <Flatpickr
        options={{
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: 'd.m.Y',
            minDate: 'today',
        }}
        />
    )
 }
