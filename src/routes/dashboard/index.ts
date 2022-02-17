export async function get() {
  
    return {
      headers: { Location: '/dashboard/notes' },
      status: 302
    }
  }