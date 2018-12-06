export default {
  flowNext(trigger) {
    const flow = trigger.closest('f-low');
    if (flow) {
      trigger.closest('f-low').next();
    }
  },
  flowPrev(trigger) {
    const flow = trigger.closest('f-low');
    if (flow) {
      trigger.closest('f-low').prev();
    }
  }
}