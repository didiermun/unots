import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

export const currentUser = writable(null);

if(typeof window !== 'undefined'){
    if(localStorage.getItem('user')){
        console.log(JSON.parse(localStorage.getItem('user')));
        currentUser.set(JSON.parse(localStorage.getItem('user')));
    }
    else{
        goto('/signin');
    }
}

export function updateUser(user) {
    console.log('updateUser', user);
    currentUser.set(user);
}

export function removeUser() {
    currentUser.set(null);
}
