import Swal from "sweetalert2";

export const notification = (title,message,type) =>{
    Swal.fire({
        title:title,
        text:message,
        icon:type,
        timer:"1600",
        showConfirmButton:false
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
        confirmButtonText: 'si estoy seguro'
      }).then((result) => {
        if (result.isConfirmed) {
            handleDelete()
        }
      })
}


export default (notification,confirmDeleteNotification)