
export default function Todaydate() {
    
        const today = new Date();
        const isoDate = today.toISOString().split('T')[0];
        return isoDate;
    
}
