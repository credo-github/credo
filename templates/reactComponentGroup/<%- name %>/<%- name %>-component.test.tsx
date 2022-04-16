import { <%- capitalize(dashToCamel(name)) %> } from './<%- name %>-component'

describe("<<%- capitalize(dashToCamel(name)) %> />", () => {
<% if (tests) { %>
<% tests.forEach(t => { %>
    it("<%- t %>", () => {

    });<% }) %>

<% } %>
})