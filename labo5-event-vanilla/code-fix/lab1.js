// TODO: Fix the errors in the functions below!

const functions = {
  addClickListener(element, callback) {

    element.addEventListener('click', callback) 
 
  },

  removeClickListener(element, callback) {
    element.removeEventListener('click', callback)
  },

  addKeyDownListener(element, callback) {
    element.addEventListener('keydown', callback)
  },

  removeKeyDownListener(element, callback) {
     element.removeEventListener('keydown', callback)
  },

  addClickWithCaptureListener(element, callback) {
    let clickCount = 0;

    const captureListener = () => {

      
      clickCount++;
    };

    const bubbleListener = () => {
      
      console.log(`Click count: ${clickCount}`);
    };

    
    element.addEventListener('click', bubbleListener) 
    element.addEventListener('click', captureListener, true) 
    // addEventListener 'click', handler, true/false
  },

  addClickWithBubbleListener(element, child) {
 // la manière dont les événement se propagent à leur parents

    let count = 0;

    const handleClick = (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

      count +=1
      
    };

    element.addEventListener('click', handleClick);

    return () => {
      // remove event listener
       element.removeEventListener('click', handleClick)
      
      return count;
    };
  },
};

module.exports = functions;
