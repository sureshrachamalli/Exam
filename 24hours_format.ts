get24HoursTimeStamp('12:45:42 pm');
function get24HoursTimeStamp(timeString:string):string{
    let time = '';
    console.log('12 hours format => '+timeString);
    if(timeString && timeString.length === 11){
        const amOrPm:string =  timeString.substr(9, 2);
        let hour:number = parseInt(timeString.substr(0, 2));
        const minutes:number = parseInt(timeString.substr(3, 2));
        const seconds:number = parseInt(timeString.substr(6, 2));
        if(amOrPm && (amOrPm.toUpperCase() === 'PM') && (hour <= 11)){
            hour = hour+12;
            time = hour+':'+minutes+':'+seconds;
        }else{
            if(hour <= 9){
                time = '0'+hour+':'+minutes+':'+seconds;
            }else{
                time = hour+':'+minutes+':'+seconds;
            }            
        }
  }
  console.log('24 hours format => '+time);
  return time;
}
