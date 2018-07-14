<?php

c::set('debug', true);
c::set('staticbuilder', true);
c::set('staticbuilder.filter', function($page) {
    if ($page->intendedTemplate() == 'team') {
        return [false, 'No standalone pages for team members'];
    }
    return fvsch\KirbyStaticBuilder\Plugin::defaultFilter($page);
});
