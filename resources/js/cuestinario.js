angular.module("cuestionario",[])
	.controller("ctrCuestinario",["$scope",function($scope){
		$scope.correctas=0;
		$scope.lock=false;
		$scope.preguntas=[
			{
				id:1,
				texto:'Pregunta 1',
				respuestaCorrecta:1,
				respuesta:null,
				respuestas:[
						{id:1,text:'Respuesta 1.1'},
						{id:2,text:'Respuesta 1.2'},
						{id:3,text:'Respuesta 1.3'}
				]
			},
			{
				id:2,
				texto:'Pregunta 2',
				respuestaCorrecta:2,
				respuesta:null,
				respuestas:[
						{id:1,text:'Respuesta 2.1'},
						{id:2,text:'Respuesta 2.2'},
						{id:3,text:'Respuesta 2.3'}
				]
			},
			{
				id:3,
				texto:'Pregunta 3',
				respuestaCorrecta:3,
				respuesta:null,
				respuestas:[
						{id:1,text:'Respuesta 3.1'},
						{id:2,text:'Respuesta 3.2'},
						{id:3,text:'Respuesta 3.3'}
				]
			},
		];
		
		$scope.calcular=function(){
			if(!$scope.validar())	return;

			$scope.correctas=0;			
			for(var i in $scope.preguntas){				
				if($scope.preguntas[i].respuesta!=null){
					
					if($scope.preguntas[i].respuesta.id==$scope.preguntas[i].respuestaCorrecta){
						$scope.correctas +=1
					}
					
				}				
			}
			$scope.lock=true;			
		}

		$scope.validar=function(){
			for(var i in $scope.preguntas){				
				if($scope.preguntas[i].respuesta==null){
					alert("Todas las preguntas son obligatorias");
					return false;
				}				
			}
			return true;
		}
		
		$scope.reiniciar=function(){			
			$scope.correctas=0;			
			for(var i in $scope.preguntas){				
				$scope.preguntas[i].respuesta=null;							
			}
			$scope.lock=false;
		}
		
	}])