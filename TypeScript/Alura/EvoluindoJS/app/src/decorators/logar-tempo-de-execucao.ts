export function logarTempoDeExecucao(emSegundos: boolean = false){
	return function (
		target: any, // constructor
		propertyKey: string, // nome do metodo
		descriptor: PropertyDescriptor // propriedades do metodo
	){
		const metodoOriginal = descriptor.value;
		descriptor.value = function(...args: any[]){
			let divisor = 1;
			let unidade = 'milisegundos';
			if (emSegundos){
				divisor = 1000;
				unidade = 'segundos';
			};
			const t1 = performance.now();
			const retorno = metodoOriginal.apply(this, args);
			const t2 = performance.now();
			console.log(`${propertyKey}, tempo de execucao: ${(t2 - t1)/divisor} ${unidade}.`);
			return retorno;
		}

	}
}