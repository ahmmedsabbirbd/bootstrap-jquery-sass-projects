jQuery( document ).ready(function() {

    // Options
    dynamic_title_repeater_accordion('footer_action_box', 'title');
    dynamic_title_repeater_accordion('call_action', 'title');
    
    // Careers
    dynamic_title_repeater_accordion('highlights', 'title');
    dynamic_title_repeater_accordion('jobs_group', 'name');
    dynamic_title_repeater_accordion('jobs', 'title');

    // Pricing
    dynamic_title_repeater_accordion('pricing_table', 'title');

    // Contact
    dynamic_title_repeater_accordion('contact_options', 'title');

    // Customer Story
    dynamic_title_repeater_accordion('gallery', 'creator');
    dynamic_title_repeater_accordion('features', 'title');

    // Home
    dynamic_title_repeater_accordion('explore_more', 'title');
    dynamic_title_repeater_accordion('how_works', 'title');
    dynamic_title_repeater_accordion('how_works_group', 'name');

    // About
    dynamic_title_repeater_accordion('tabs', 'title');
    dynamic_title_repeater_accordion('creators', 'name');
    dynamic_title_repeater_accordion('campaigns', 'title');

    // For Brands
    dynamic_title_repeater_accordion('how_works', 'title');

});

function dynamic_title_repeater_accordion(repeater_name, field_name) {
    var information_tabs = jQuery("div[data-name='" + repeater_name + "']");

    if (information_tabs.length) {
        var selector = "tr:not(.acf-clone) td.acf-fields .acf-accordion-content div[data-name='" + field_name + "'] input";

        // add lister
        jQuery(information_tabs).on('input', selector, function() {
            var me = jQuery(this);
            var meValue = me.val() ? me.val() : 'Unknown';
            me.closest('td.acf-fields').find('.acf-accordion-title label').text(meValue);
        });

        // trigger the function on load
        information_tabs.find(selector).trigger('input');

    }
}