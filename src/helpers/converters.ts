import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export function convertNumber(num:number){
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
}

export function convertDate(date:Date){
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(new Date(date))
}


