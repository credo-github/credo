class Welcome<%- capitalize(dashToCamel(name)) %>
end

welcomed_<%- name.split(' ').join('_').toLocaleLowerCase() %> = Welcome<%- capitalize(dashToCamel(name)) %>. new