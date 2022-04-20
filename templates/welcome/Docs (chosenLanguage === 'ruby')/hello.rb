class Welcome<%- capitalize(dashToCamel(name)) %>
end

welcomed_<%- name.split(' ').join('_').toLocaleLowercase() %> = Welcome<%- capitalize(dashToCamel(name)) %>. new