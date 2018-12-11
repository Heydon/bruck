export default {
  flowNext(trigger) {
    const flow = trigger.closest('f-low');
    if (flow) {
      flow.next();
    }
  },
  flowPrev(trigger) {
    const flow = trigger.closest('f-low');
    if (flow) {
      flow.prev();
    }
  },
  flowGoTo(trigger, index) {
    const flow = trigger.closest('f-low');
    if (flow && index > -1) {
      flow.goTo(index - 1);
    }
  },
  show(id) {
    const elem = document.getElementById(id);
    if (elem) {
      elem.hidden = false;
    }
  },
  Hide(id) {
    const elem = document.getElementById(id);
    if (elem) {
      elem.hidden = true;
    }
  },
  showHide(id) {
    const elem = document.getElementById(id);
    if (elem) {
      elem.hidden = !elem.hidden;
    }
  }
}