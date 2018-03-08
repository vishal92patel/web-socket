import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastSeen'
})
export class LastSeenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && args[0]) {
      if (args[0] == '1') {
        return "Online";
      } else if (args[0] == '0') {
        let datetime = value.split(' ');
        let date = datetime[0];
        let time = datetime[1];
        let datetimeSplited = datetime[0].split('-');
        let day = datetimeSplited[0];
        let month = datetimeSplited[1];
        let year = datetimeSplited[2];
        let dateInDate = new Date(year + '-' + month + '-' + day + ' ' + time);
        let todayStart = new Date(new Date().setHours(0, 0, 0, 0));
        let todayEnd = new Date(new Date().setHours(+23, 59, 59, 0));
        let yesterdayStart = new Date(new Date().setHours(-24, 0, 0, 0));
        let yesterdayEnd = new Date(new Date(new Date().setHours(-24, 0, 0, 0)).setHours(+23, 59, 59, 0));
        if (dateInDate >= todayStart && dateInDate <= todayEnd) {
          return 'Last seen today at ' + time;
        } else if (dateInDate >= yesterdayStart && dateInDate <= yesterdayEnd) {
          return 'Last seen yesterday at ' + time;
        } else {
          return 'Last seen ' + date +' at ' + time;
        }
      }
    } else {
      return value;
    }
  }

}
