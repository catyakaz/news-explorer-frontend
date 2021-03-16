const wordMonthes = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

class DateUtil {
  static digitFormatDate(date = new Date()) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  static wordFormatDate(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day} ${wordMonthes[month]}, ${year}`;
  }

  static getPastDate(dayAgo) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - dayAgo);
    return this.digitFormatDate(currentDate);
  }
}

export default DateUtil;
