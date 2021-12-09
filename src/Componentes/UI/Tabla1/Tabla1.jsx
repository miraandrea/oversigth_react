import React from "react";
import "./Tabla1.css"
import MaterialTable from "material-table";

export const Tabla1 = () =>{
    const columnas =[
        {
            title: 'Documento',
            field: 'documento',
            type: 'numeric'
        },
        {
            title: 'Nombre1',
            field: 'nombre1'
        },
        {
            title: 'Nombre2',
            field: 'nombre2'
        },
        {
            title: 'Apellido1',
            field: 'apellido1'
        },{
            title: 'Apellido2',
            field: 'apellido2'
        },
        {
            title: 'Grado',
            field: 'grado'
        }
    ]

    const data =[
        {documento: 1005207265, nombre1: 'paola', nombre2: 'andrea', apellido1: 'mira', apellido2: 'orozco', grado: '11.B'},
        {documento: 1908764532, nombre1: 'patricia', nombre2: '', apellido1: 'orozco', apellido2: 'bentacour', grado: '11.A'},
        {documento: 1005207265, nombre1: 'paola', nombre2: 'andrea', apellido1: 'mira', apellido2: 'orozco', grado: '6.B'},
    ]
    return(
        <div className="">
            <MaterialTable
                columns={columnas}
                data={data}
                tile='OverSigh'
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (event, rowData) =>alert('Has presionado editar: '+ rowData.documento)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event, rowData) =>alert('Estas seguro que deseas eliminar: '+ rowData.documento)
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions: 'Acciones'
                    }
                }}
            />
        </div>
    )
}
