angular.module("rtcPrevent").factory("usuarioAPI", function ($http, $localStorage, config) {
	var _save = function (usuario) {
		if ((usuario.cd_usuario != "")&&(usuario.cd_usuario != undefined)){
			return $http.post(config.baseUrl+"/usuario/editar", usuario);
		} else {
			return $http.post(config.baseUrl+"/usuario/cadastrar", usuario);
		}
	};

	var _list = function (){
		return $http.get(config.baseUrl+"/usuario/listar");
	}

	var _detail = function (cd_canal){
		return $http.get(config.baseUrl+"/canal/exibir/"+cd_canal);
	}

	return {
		save  : _save,
		list  : _list,
		detail: _detail
	};
});
