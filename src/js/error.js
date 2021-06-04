import { success, error, notice } from '@pnotify/core';
import { defaults } from '@pnotify/core';
defaults.delay = 2000;

export default { errorMessage, successMessage, noticeMessage };
function errorMessage(text) {
  error(text);
}
function successMessage(text) {
  success(text);
}
function noticeMessage(text) {
  notice(text);
}
