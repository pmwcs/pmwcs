export const triggerWindowResize = function () {
  window.dispatchEvent(new Event('resize'));
};
