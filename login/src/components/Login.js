import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid">
                    <div id="loginbox" style="margin-top: 100px;" className="mainbox col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="panel-title">Evo | Login</div>
                                <div style="float:right; font-size: 80%; position: relative; top:-10px"><a href="#">Esqueceu a senha?</a></div>
                            </div>

                            <div style="padding-top:30px" className="panel-body">

                                <div style="display:none" id="login-alert" className="alert alert-danger col-sm-12"></div>

                                <form id="loginform" className="form-horizontal" role="form">

                                    <div style="margin-bottom: 25px" className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="Usuário"></input>
                                    </div>

                                    <div style="margin-bottom: 25px" className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" className="form-control" name="password" placeholder="Senha"></input>
                                    </div>



                                    <div className="input-group">
                                        <div className="checkbox">
                                            <label>
                                                <input id="login-remember" type="checkbox" name="remember" value="1"> Lembrar </input>
                                            </label>
                                        </div>
                                    </div>


                                    <div style="margin-top:10px" className="form-group">
                                        <div className="col-sm-12 controls">
                                            <a id="btn-login" href="#" className="btn btn-success">Login  </a>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <div className="col-md-12 control">
                                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">
                                                Não tem uma conta!
                                    <a href="#" onClick="$('#loginbox').hide(); $('#signupbox').show()">
                                                    Crie uma agora.
                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>



                            </div>
                        </div>
                    </div>

                    <div id="signupbox" style="display:none; margin-top:50px" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="panel-title">Criar Login</div>
                            </div>
                            <div className="panel-body">
                                <form id="signupform" className="form-horizontal" role="form">

                                    <div id="signupalert" style="display:none" className="alert alert-danger">
                                        <p>Erro:</p>
                                        <span></span>
                                    </div>
                                    <div className="form-group">
                                        <label for="suscard" className="col-md-3 control-label">Nº Cartão</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" name="lastname" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="firstname" className="col-md-3 control-label">Nome Completo</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" name="firstname" placeholder="Como consta no seu CPF"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="lastname" className="col-md-3 control-label">CPF</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" name="lastname" placeholder="Apenas números, ex: 00011122233"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="endereco" className="col-md-3 control-label">Endereço</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" name="endereco" placeholder="Ex: Rua, Nº, Bairro, Cidade, Estado"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="email" className="col-md-3 control-label">E-mail</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" name="email" placeholder="exemplo@gmail.com"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="col-md-3 control-label">Senha</label>
                                        <div className="col-md-9">
                                            <input type="password" className="form-control" name="passwd" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="col-md-3 control-label">Repita a Senha</label>
                                        <div className="col-md-9">
                                            <input type="password" className="form-control" name="passwd2" placeholder=""></input>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-offset-3 col-md-9">
                                            <button id="btn-signup" type="button" className="btn btn-info"><i className="icon-hand-right"></i> Cadastrar</button>
                                        </div>
                                    </div>

                                    <div style="border-top: 1px solid #999; padding-top:20px" className="form-group">
                                        <button id="btn-fbsignup" type="button" className="btn btn-primary"><i className="icon-facebook"></i>   Cadastre-se com o Facebook</button>
                                        <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Voltar à tela de Login </a></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;