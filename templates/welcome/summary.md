Hi <%- name %>!

This is a template, it's built using a library called Embedded JS (EJS).

This means that I can pass the data you're inputing and include it in this text.

This page is powered by the repository you forked from Credo.

You could show this working by pushing a change in this file, either in github or locally:

---
Change this text
---

<% if (developerType === 'frontend') { %>
When I first learned to code I really looked down on Frontend development, now I love it!<% } %>
<% if (developerType === 'backend') { %>
Basically just functions and SQL right? Nothing too difficult there!
<% } %>
<% if (developerType === 'fullstack') { %>
Jack of all trades master of none.
<% } %>
<% if (developerType === 'devops') { %>
Bleep, bloop
<% } %>
<% if (developerType === 'all of the above') { %>
Whaaaa?
<% } %>


