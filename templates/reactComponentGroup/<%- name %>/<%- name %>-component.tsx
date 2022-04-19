import { 
    useState,
    <% if (state && state.length > 2 ) { %>useReducer,<% } %>
    <% if (fetchedResourcePath) { %>useEffect<% }%>
   } from 'react'
<% if (props && props.length > 0) {%>
export interface <%- capitalize(dashToCamel(name)) %>Props {
<% props.map(item => item.split(':')).forEach(([k, v])=> {%><%- dashToCamel(k) %>: <%- v %>;
<% }) %>
}
<%}%>

<% if (state && state.length > 2 ) { %>
export interface <%- capitalize(dashToCamel(name)) %>State {
    <% state.map(item => item.split(':')).map(([k, v]) => {%>
        <%- dashToCamel(k) %>: <%- v %>;<% }) %>
}

/**
 * For components that require more than a few different pieces
 * of state to manage, we prefer useReducer
 */
export const reducer = (state: <%- capitalize(dashToCamel(name)) %>State, action) => {
  switch (action.type) {
      <% state.map(item => item.split(':')).map(([k, v]) => { %>
      case "SET_<%- k.split('-').join('_').toUpperCase()  %>":
          return { ...state, <%- dashToCamel(k) %>: action.payload}
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
    <% if (state && state.length > 2 ) { %>
    const [state, dispatch] = React.useReducer(reducer);
    <% } else if (state) { %>
        <% state.map(s => s.split(':')).forEach(([k,v]) => { %>
    const [ <%- dashToCamel(k)  %>, set<%- capitalize(dashToCamel(k)) %>] = useState();<% }) %>
    <% } %>
<% if (fetchedResourcePath) { %>  
        const [
          data,
          setData
        ] = useState();
        useEffect(() => {
         const fetchData = async () => {
           const dataFromApi = await fetch("/<%- fetchedResourcePath %>").then(res => res.json());
           setData(dataFromApi);
         }
         
         fetchData();
       }, [])
<%}%>


    return <div />
}