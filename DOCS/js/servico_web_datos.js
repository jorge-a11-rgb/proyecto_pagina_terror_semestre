$("#btn-obtener").click(function () {
        $.get("https://imdb-api.com/en/API/Top250Movies/k_29bfmsvl/",
        function(data){
            $.each(data.items, function(i, item){
                var fila = "<tr><td>"+item.title+"</td><td>"+item.year +
                            "</td><td><img src='"+item.image+"'>" +
                            "</td><td>"+item.imDbRating+"</td></tr>"

                $("#tabla-categorias").append(fila);   
            
            });
        });
  
    });
    //   cierre del click 