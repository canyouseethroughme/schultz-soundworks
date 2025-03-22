export function formatDateTime(dateTimeString: string): { time: string; date: string } {
    const date = new Date(dateTimeString);
    const time = date.toISOString().substring(11, 16);
    const formattedDate = date.toISOString().substring(0, 10).split('-').reverse().join('-');
    return { time, date: formattedDate };
}