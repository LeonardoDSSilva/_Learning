export function domInjector(seletor: string){
	return function(target: any, propertyKey: string){
		// console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
		const getter = function(){
			// console.log(`buscando ${seletor} para injetar em ${propertyKey}`);
			const elemento = document.querySelector(seletor);
			if (!elemento){
				throw new Error(`Seletor ${seletor} não encontrado! Verifique!`);
			}
			return elemento;
		}
		Object.defineProperty(target, propertyKey, {get: getter}) // 
	}
}