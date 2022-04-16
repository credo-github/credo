
<% if (props && props.length > 0) {%>
export interface <%- capitalize(dashToCamel(name)) %>Props {
<% props.forEach(p => {%>
    <%- p %>
<% }) %>
}
<%}%>

<% if (state && state.length > 4 ) { %>
interface State {
    <% state.forEach(s => {%>
        <%- s %><% }) %>
}

/**
 * For components that require more than a few different pieces
 * of state to manage, we prefer useReducer
 */
const reducer = (state: State, action) => {
  switch (action.type) {
      <% state.map(item => item.split(':')).map(([k, v]) => { %>
      case "SET_<%- k.toUpperCase()  %>":
          return { ...state, <%- k %>: action.payload}
      <% }) %>
      default: return state;
  }

}
<% } %>

export const <%- capitalize(dashToCamel(name)) %> = (
    <% if (props && props.length > 0 ) { %>
        props: <%- capitalize(dashToCamel(name)) %>Props
    <% } %>
) => {
    <% if (state && state.length > 4 ) { %>
    const [state, dispatch] = React.useReducer(reducer);
    <% } else if (state) { %>
        <% state.map(s => s.split(':')).forEach(([k,v]) => { %>
    const [ <%- k  %>, set<%- capitalize(k) %>] = useState();
        <% }) %>
    <% } %>
    return <div />
}