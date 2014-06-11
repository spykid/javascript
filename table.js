(function($){
	$(function() {
		 var option = ['Checked', 'Unchecked'];
            var option_values = $('<div id="option-table"><button class="test">Insert span element at the end of each p element</button>\
            <table class="option-values-table">\n\
            <tr>\n\
            <td class="option-value"><input id="value" type="textfield" size="60"></td>\n\
            <td class="make-default"><input id="default" type="checkbox" name="default" value="default"><label>Make Default</label></td>\n\
            <td class="option-add"><a href="" class="option-add-link">Add</a></td>\n\
            <td><button class="option-remove">Remove</button></td>\n\
            </tr>\n\
            <tr>\n\
            <td class="option-value"><input id="value" type="textfield" size="60"></td>\n\
            <td class="make-default"><input id="default" type="checkbox" name="default" value="default"><label>Make Default</label></td>\n\
            <td class="option-add"><button class="option-add">Add</button></td><td><button class="option-remove">Remove</button></td>\n\
            </tr></table>\n\
        ');

            $('form').append(option_values);
 			$('button.test').click (function() {
                $("<strong>aaaaa</stronger>").appendTo("button");
            });
		 }

		)


})(jQuery);