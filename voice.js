'use strict';

// main vars
var voiceRecordButton = document.querySelector('.voice-record');
var stopIcon = voiceRecordButton.querySelector('.fa-stop');
var recordIcon = voiceRecordButton.querySelector('.fa-microphone');
var countDownBlock = document.querySelector('.countdown__numbers');

/**
 * Function that adds a specified class to the element we want
 * 
 * @function addClass
 * @param {object} elements - the HTML element which can be modified
 * @param {object} myClass - the class to be added
 */	
function addClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) {

    return; 

  }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {

    elements = document.querySelectorAll(elements);

  } else if (elements.tagName) { 
    
    // ... if we have a single DOM element, make it an array to simplify behavior
    
    elements= [elements]; 
  
  }

  // add class to all chosen elements
  for (var i = 0; i < elements.length; i++) {

    // if class is not already found
    if ((' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0) {

      // add class
      elements[i].className += ' ' + myClass;

    }

  }

}

/**
 * Function that removes a specified class from a specific element
 * 
 * @function removeClass
 * @param {object} elements - the HTML element which can be modified
 * @param {object} myClass - the class to be removed from chosen element
 */	
function removeClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) { 
    
    return; 
    
  }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    
    elements = document.querySelectorAll(elements);
    
  } else if (elements.tagName) { 
    
    // ... if we have a single DOM element, make it an array to simplify behavior 
    
    elements = [elements]; 
  
  }

  // create pattern to find class name
  var pattern = new RegExp('(^| )'+myClass+'($| )','g');

  // remove class from all chosen elements
  for (var i = 0; i < elements.length; i++) {
    
    elements[i].className = elements[i].className.replace(pattern,' ');
    
  }
  
}

/**
 * Function for hiding a html element
 * 
 * @function hide
 * @param {object} elements - the element which can be hidden
 */	
function hide(element) {
  
    element.style.display = 'none';
  
}

/**
 * Function for showing a html element
 * 
 * @function show
 * @param {object} elements - the element which can be shown
 */	
function show(element) {
  
    element.style.display = 'block';
  
}

/**
 * Function for toggling
 * 
 * @function show
 * @param {object} elements - the element which can be shown
 */	
var toggle = function (element) {

	// If the element is visible, hide it
	if (window.getComputedStyle(element).display === 'block') { 
    
		hide(element);
		return;
  
	}

	// Otherwise, show it
	show(element);

};

function record(event) {

  console.log('start recording');
  removeClass(stopIcon,'hidden');
  addClass(recordIcon,'hidden');

}

/**
* Function for initiating functions
*/   
function init() { 

  recordIcon.addEventListener('click', function() {
    
    //  show the countdown
    show(countDownBlock);
    
    //  call the record function
    setTimeout(function() {
      
    }, 1500);


    record();
    
  }, false);
  
};

// call the main init function
init();
