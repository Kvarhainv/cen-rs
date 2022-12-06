/* eslint no-use-before-define: 0 */
export default class EntidadeModel {
    constructor({
        nom_entidade,
        cod_entidade,
        pop_absoluta_total,
        pop_absoluta_urbana_total,
        pop_absoluta_urbana_sede,
        pop_relativa_urbana_total,
        pop_relativa_urbana_sede,
        area_total,
        densidade_demografica
    }) {
        this.nom_entidade = nom_entidade;
        this.cod_entidade = cod_entidade;
        this.pop_absoluta_total = pop_absoluta_total;
        this.pop_absoluta_urbana_total = pop_absoluta_urbana_total;
        this.pop_absoluta_urbana_sede = pop_absoluta_urbana_sede;
        this.pop_relativa_urbana_total = pop_relativa_urbana_total;
        this.pop_relativa_urbana_sede = pop_relativa_urbana_sede;
        this.area_total = area_total;
        this.densidade_demografica = densidade_demografica;
    }
}