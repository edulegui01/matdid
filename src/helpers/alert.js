import Swal from "sweetalert2";

export const notification = async (title,message,type) =>{
    await Swal.fire({
        title:title,
        text:message,
        icon:type,
        confirmButtonText:"Aceptar"
        
    })
    
}


export const notification1 = (title,message,type) =>{
    Swal.fire({
        title:title,
        text:message,
        icon:type,
        
    })
}

export const confirmDeleteNotification = (handleDelete) =>{
    Swal.fire({
        title: 'Estas seguro?',
        text: "No será posible revertir este proceso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'cancelar',
        confirmButtonText: 'sí, estoy seguro'
      }).then((result) => {
        if (result.isConfirmed) {
            handleDelete()
        }
      })
}


export default (notification,confirmDeleteNotification)