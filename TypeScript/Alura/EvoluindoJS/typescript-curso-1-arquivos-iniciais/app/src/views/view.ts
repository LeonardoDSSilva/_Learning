export abstract class View<T> {

	protected elemento : HTMLElement;
	private script = false;
	
	constructor(seletor : string, script?: boolean){
		const elemento =  document.querySelector(seletor);
		if (elemento){
			this.elemento = elemento as HTMLElement;
		} else{
			throw Error(`O seletor ${seletor} nao existe no DOM`)
		}
		if (script) this.script = script;
	}

	update(model : T): void {
		let template = this.template(model);
		if (this.script){
			template = template.replace(/<script>[\s\S]*?<\/script>/, '')
		}
		this.elemento.innerHTML = template;
	}

	protected abstract template(model : T): string;
}