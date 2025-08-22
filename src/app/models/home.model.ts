//interfaz de tipo articuloI
export namespace models {
  //podemos organizar las interdaces en una sola entidad
  //para de esta forma podemos meter varios interfaces en un solo archivo,
  // y puede ser mas intuitivo ya que las interfaces las llammos como
  // propiedades de un objeto (algo similar models.ArticuloI)
  export interface ArticuloI {
    title: string;
    descripcion: string;
    image: {
      url: string;
      desc: string;
    };
    id?: string;
  }
}
