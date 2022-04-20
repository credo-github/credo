<%
const kebabCaseName = name
    .trim()
    .split(' ')
    .join('-');
const capitalizedName = capitalize(
    dashToCamel(kebabCaseName)
);

%>class Welcome<%- capitalizedName %>
end

welcomed_<%- name.split(' ').join('_').toLocaleLowerCase() %> = Welcome<%- capitalizedName %>. new