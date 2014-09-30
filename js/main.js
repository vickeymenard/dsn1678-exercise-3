var infoOne = $('.info-one');
var showInfoOne = $('.show-info-one');

var buttonClickHandler = function () {
	var isActive = infoOne.attr('data-state');

	if (isActive == 'active') {
		infoOne.attr('data-state', 'inactive');
	} else {
		infoOne.attr('data-state', 'active');
	}


};

showInfoOne.on('click', buttonClickHandler);



var infoTwo = $('.info-two');
var showInfoTwo = $('.show-info-two');

var buttonClickHandler = function () {
	var isActive = infoTwo.attr('data-state');

	if (isActive == 'active') {
		infoTwo.attr('data-state', 'inactive');
	} else {
		infoTwo.attr('data-state', 'active');
	}


};

showInfotwo.on('click', buttonClickHandler);
