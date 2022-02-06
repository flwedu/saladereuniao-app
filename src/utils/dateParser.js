/**
 * This function converts date String to Array or Array to String
 * @param {*} value 
 * @returns 
 */
export function dateParser(value) {
    return {
      /**
       * 
       * @returns a String in format "yyyy-MM-dd'T'dd:mm:ss"
       */
      toString() {
        const [year, month, day, hour, minuts, seconds] = value;
        return `${year}-${
          String(Number(month) + 1).padStart(2, "0")}-${
          String(Number(day) + 1).padStart(2, "0")}T${
          String(hour).padStart(2, "0")}:${
          String(minuts).padStart(2, "0")}:${
          String(seconds).padStart(2, "0")}`;
      },
      /**
       * 
       * @returns an array with numbers representing the date & timefields
       */
      toArray(){
        // The regex expression is used to extract the values from a date string
        // Format: yyyy-MM-dd'T'HH:mm:s
        // After the extraction, the values are converted to number
        const array = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/g.exec(value).map(n => Number(n));
  
        // reducing one of month and day values before returning
        array[2] -= 1;
        array[3] -= 1;
  
        return array.slice(1);
      }
    };
  }