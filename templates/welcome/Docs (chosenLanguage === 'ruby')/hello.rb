class Welcome<%- capitalize(dashToCamel(name.split(' ').join('-'))) %>
end

welcomed_<%- name.split(' ').join('_').toLocaleLowerCase() %> = Welcome<%- capitalize(dashToCamel(name)) %>. new