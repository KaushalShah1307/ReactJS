/**
 * Created by kshah on 5/28/16.
 */
var React = require("react");
var ReactDOM = require("react-dom");

var HelloWorld = React.createClass({
    render: function () {
    return (
            <div>Hello  ReactJS</div>
        )

}
});

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));