Title: Patagonia tools
Slug: patagonia-tools

## Introducción

En este mod, se pueden encontrar muchas recetas, con elementos vanilla. Fue creado hace mucho tiempo, y actualmente, lo estamos actualizando, debido a las nuevas exigencias del servidor. El mod, esta publicado en la workshop, y siempre nos basamos en la opinión de la comunidad, para realizar las modificaciones correspondientes en las recetas (aunque también tenemos criterio propio). La idea, es poder extender la partida lo máximo posible, proporcionando ciertos elementos, que no aparecen en los contenedores de manera habitual.

{% for item in patagoniaItems %}
<div class="row">
    <div class="col-md-5">
        <table class="table table-bordered table-sm text-center align-middle">
            <thead class="table-success">
                <tr>
                    <th colspan="{{ item.itemMaterials.count + 1 }}" class="text-center"><img src="{{ item.itemImage }}" alt=""> {{ item.itemName }}</th>
                </t>
            </thead>
            <tbody>
                <tr>
                    <th scope="col">Materiales</th>
                    {% for material in item.itemMaterials %}
                    <td scope="col">
                        <img src="{{ material.materialmg }}" alt="{{ material.materialName }}" />
                        <span> x{{ material.materialCount }}</span>
                    </td>
                    {% endfor %}
                </tr>
                <tr>
                    <th>Herramientas</th>
                    {% for tool in item.itemTools %}
                    <td>
                        <img src="{{ tool.toolImg }}" />
                        <span> x{{ tool.toolCount }}</span>
                    </td>
                    {% endfor %}
                </tr>
            </tbody>
        </table>
    </div>
</div>
{% endfor %}
