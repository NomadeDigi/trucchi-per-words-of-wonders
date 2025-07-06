// dateUtils.js
// Utility functions for date formatting and calculations
// For educational purposes only

const DateUtils = {
  // Returns current date in YYYY-MM-DD format
  getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
  },

  // Formats a Date object to DD/MM/YYYY
  formatDateDMY(date) {
    if (!(date instanceof Date)) {
      throw new TypeError('Expected a Date object');
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },

  // Calculates difference in days between two dates
  diffDays(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new TypeError('Expected Date objects');
    }
    const diffTime = Math.abs(date2 - date1);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }
};

// Example usage:
// console.log(DateUtils.getCurrentDate());
// console.log(DateUtils.formatDateDMY(new Date()));
// console.log(DateUtils.diffDays(new Date('2025-01-01'), new Date('2025-01-10')));

export default DateUtils;
