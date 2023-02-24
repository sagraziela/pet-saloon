import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";

export interface TimerProps {
    id: string,
}

export function Timer(props: TimerProps) {
    return (
        <Flatpickr
        options={{
            enableTime: true,
            noCalendar: true,
            minTime: '09:00',
            maxTime: '17:00',
            minuteIncrement: 30,
            time_24hr: true
        }}
        />
    )
 }
