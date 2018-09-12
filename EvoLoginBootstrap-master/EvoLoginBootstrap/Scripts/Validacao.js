function Validar() {
    var username = login.username.value;
    var password = login.password.value;

    if (username != 'Vinicius' || password != '12345') {
        alert('Usuario ou Senha incorreto !')
        login.password.focus();
        return false;
    }
}

function ValidarJquery() {
    var Vusername = $('#username').val();
    var Vpassword = $('#password').val();
    var DBusername = 'Vinicius'
    var DBpassword = '12345'

    if (Vusername != DBusername || Vpassword != DBpassword) {
        alert('Usuario ou Senha incorreto ')
        return false;
    }
           
}.