import { toast } from '@zerodevx/svelte-toast'

export function successToast(message: string) {
    toast.push(message, {
        theme: {
          '--toastBackground': '#48BB78',
          '--toastBarBackground': '#2F855A'
        }
      })
}

export function errorToast(message: string) {
    toast.push(message, {
        theme: {
          '--toastBackground': '#DD2C00',
          '--toastBarBackground': '#A50000'
        }
      })
}

// toast.push('Danger!', {
//     theme: {
//       '--toastBackground': '#F56565',
//       '--toastBarBackground': '#C53030'
//     }
//   })