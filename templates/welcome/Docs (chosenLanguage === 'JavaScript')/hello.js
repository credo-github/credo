<%
const kebabCaseName = name
    .trim()
    .toLocaleLowerCase()
    .split(' ')
    .join('-');
const capitalizedName = capitalize(
    dashToCamel(kebabCaseName)
);

%>class Hello<%- capitalizedName %> {

}

const welcomed<%- capitalizedName %> = new Hello<%- capitalizedName %>()