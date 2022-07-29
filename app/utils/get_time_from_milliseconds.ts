export default function get_time_from_milliseconds(milliseconds: number){
    const hour = new Date(milliseconds).getHours()
    const minutes = new Date(milliseconds).getMinutes()
    return `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
}