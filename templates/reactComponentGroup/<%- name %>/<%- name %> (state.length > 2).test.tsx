import { reducer, <%- capitalize(dashToCamel(name)) %>State } from './<%- name %>-component';

describe('reducer', () => {
<% state.map(item => item.split(':')).forEach(([k, v]) => { %>
        it('should change state when an action of type "SET_<%- k.split('-').join('_').toUpperCase()  %>" is dispatched', () => {
  
          const newState = reducer([], { type: "SET_<%- k.split('-').join('_').toUpperCase()  %>", payload: null });

          expect(newState.<%-  dashToCamel(k) %>).toEqual(null)
        });
<% }) %>
        
      
})