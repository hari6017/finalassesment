var React=require('react');

var Home = React.createClass({

getInitialState:function()
{
return({wave:"wave5",name:"",email:"",phno:"",giturl:"",ecode:"",edesg:"",skill:"",exp:""});
},
input1 : function(event)
{
		console.log(this.state.name);
	this.setState({name:event.target.value});
},

input2 : function(event)
{
	this.setState({email:event.target.value});
},
input3 : function(event)
{
	this.setState({phno:event.target.value});
},
input4 : function(event)
{
	this.setState({giturl:event.target.value});
},
input5 : function(event)
{
	this.setState({ecode:event.target.value});
},
input6 : function(event)
{
	this.setState({edesg:event.target.value});
},
input7 : function(event)
{
	this.setState({skill:event.target.value});
},
input8 : function(event)
{
	this.setState({exp:event.target.value});
},
dropdown1 : function(event)
{
				this.setState({wave:event.target.value});
},
saving : function ()
{
		console.log(this.state);
		$.ajax({
       url: '/save',
       dataType: 'json',
       contentType: "application/json",
       type: 'POST',
       data: JSON.stringify({'wave':this.state.wave, 'name' : this.state.name, 'email' : this.state.email, 'phno' : this.state.phno,
 													'giturl' : this.state.giturl, 'ecode' : this.state.ecode, 'edesg' : this.state.edesg, 'skill' : this.state.skill, 'exp' : this.state.exp}),
			async : false,

         });
},


		render : function()
{
		return(
		<div className = "container">
					<div className = "col-lg-3">
				<form className = "form-horizontal">
			   Wave :<select className= "form-control" onChange ={this.dropdown1}>
  							<option value="wave5">wave5</option>
  							<option value="wave4">wave4</option>
  							<option value="wave3">wave3</option>
  							<option value="wave2">Wave2</option>
						</select>
<br/>
					<div className = "form-group">
								<label for ="Name">Name</label>
					     <input type ="text" className= "form-control" name = "name" id ="Name" className= "sty1" onChange ={this.input1}></input><br/>
					</div>
					<div className = "form-group">
					<label for ="email">Email</label>
				 <input type ="email" className= "form-control" name = "email" id = "Email" onChange ={this.input2}></input><br/>
					</div>
					<div className = "form-group">
           <label for ="Phno">Phone no</label>
					 <input type ="text" className= "form-control" name = "phno" id = "Phone no" onChange ={this.input3}></input><br/>
					</div>
					<div className = "form-group">
						<label for ="giturl">Giturl</label>
				 <input type = "text" className= "form-control" name = "url" id = "Giturl" onChange ={this.input4}></input><br/>
					</div>
					<div className = "form-group">
<label for ="ecode">Employee code</label>
				 <input type = "text" className= "form-control" name = "ecode" id = "Employee code" onChange ={this.input5}></input><br/>
					</div>
					<div className = "form-group">
					<label for ="edesg">Employee_desn</label>
				<input type = "text" className= "form-control" name = "edesg" id = "Employee_desn" onChange ={this.input6}></input><br/>
					</div>
					<div className = "form-group">
<label for ="skill">skill</label>
					 <textarea rows="4" cols="50" className= "form-control" name="skill" id = "Skill" onChange ={this.input7}></textarea><br/>
				</div>
					<div className = "form-group">
<label for ="exp">Experience</label>
					 <input type = "text" className= "form-control" name = "exp" id = "Experience" onChange ={this.input8}></input><br/>
				</div>
            <button type="button" className="btn btn-success"  onClick={this.saving}>Submit</button>
         </form>
				</div>
		</div>
);
}
});

module.exports = Home
