const uri = location.protocol + '//' + location.host + location.pathname
export default uri.substring(0, uri.lastIndexOf('/'));