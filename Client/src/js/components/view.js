var React=require('react');
var Employeelist = require('./Employeelist');
var View = React.createClass({
getInitialState:function()
{
return({sid:"",message:[],array1:[]});
},

input8 : function(event)
{

	this.setState({sid:event.target.value});
console.log(this.state.sid);
},
getting : function()
{
	console.log("in getting");
console.log(this.state.sid);
		$.ajax({
					url : '/fetch',
					dataType : 'json',
        contentType: "application/json",
					type : 'GET',
				data :this.state,
success: function(data)
{
	this.setState({array1:data});
	console.log("Success HEROO",data);
		console.log(message);

}.bind(this),

error: function(xhr, status, err) {
	console.error("Error.."+err.toString());
}.bind(this)

});
},
render : function()
{
return(
	<div>
			<h1>HAi from view </h1>

				Search By Id: <input type = "text" className= "form-control" name = "eid"  onChange ={this.input8}></input><br/>
				<button type="button" className="btn btn-success" onClick ={this.getting}>Fetch</button>
								<Employeelist adata={this.state.message}/>
	</div>
);
},

componentDidMount: function(){

     $.ajax({
            url: '/save',
            dataType: 'json',
            type: 'GET',
          //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
            // beforeSend: function (request)
            // {
            //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
            // },

      success: function(data)
      {
        this.setState({message:data});
        console.log("Success HEROO",data);
					console.log(message);

      }.bind(this),

      error: function(xhr, status, err) {
        console.error("Error.."+err.toString());
      }.bind(this)
    });

},
});

module.exports = View
