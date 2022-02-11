import { goto } from "$app/navigation";

export function goSignin(){
    goto('/signin');
}

export function goSignup(){
    goto('/register');
}